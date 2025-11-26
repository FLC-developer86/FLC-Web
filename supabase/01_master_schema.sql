-- ============================================
-- Faith Living Church - Master Database Schema
-- ============================================
-- This file contains the complete database schema for the FLC PWA/CMS.
-- Run this in your Supabase SQL Editor to set up the database.

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLE: people
-- Master list of all members/attendees
-- RLS: Only visible to admin/pastor. Users can only update their own record.
-- ============================================
CREATE TABLE IF NOT EXISTS people (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE,
    phone TEXT,
    role TEXT DEFAULT 'member' CHECK (role IN ('member', 'group_leader', 'media', 'pastor', 'admin')),
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- RLS for people table
ALTER TABLE people ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin and pastor can view all people" ON people
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor')
        )
    );

CREATE POLICY "Users can view their own record" ON people
    FOR SELECT USING (auth_user_id = auth.uid());

CREATE POLICY "Users can update their own record" ON people
    FOR UPDATE USING (auth_user_id = auth.uid());

CREATE POLICY "Admin can insert people" ON people
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role = 'admin'
        )
    );

-- ============================================
-- TABLE: connections
-- Tracks form submissions, QR check-ins, and visitors
-- RLS: Only pastor/admin can read
-- ============================================
CREATE TABLE IF NOT EXISTS connections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    source TEXT DEFAULT 'connection_card' CHECK (source IN ('connection_card', 'qr_checkin', 'visitor')),
    how_heard TEXT,
    notes TEXT
);

-- RLS for connections table
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pastor and admin can view connections" ON connections
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor')
        )
    );

CREATE POLICY "Anyone can insert connections (public form)" ON connections
    FOR INSERT WITH CHECK (true);

-- ============================================
-- TABLE: media_items
-- Stores metadata for photos/videos
-- RLS: status='approved' is public. Others restricted to media/pastor
-- ============================================
CREATE TABLE IF NOT EXISTS media_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    thumbnail_url TEXT,
    type TEXT DEFAULT 'photo' CHECK (type IN ('photo', 'video')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    uploaded_by UUID REFERENCES people(id) ON DELETE SET NULL,
    approved_by UUID REFERENCES people(id) ON DELETE SET NULL
);

-- RLS for media_items table
ALTER TABLE media_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view approved media" ON media_items
    FOR SELECT USING (status = 'approved');

CREATE POLICY "Media team, pastor, admin can view all media" ON media_items
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor', 'media')
        )
    );

CREATE POLICY "Media team can insert media" ON media_items
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor', 'media')
        )
    );

CREATE POLICY "Pastor and admin can update media status" ON media_items
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor')
        )
    );

-- ============================================
-- TABLE: prayer_requests
-- Member-submitted prayer items
-- RLS: Private. Submitter can read/delete own. Pastor/admin can read all.
-- ============================================
CREATE TABLE IF NOT EXISTS prayer_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    request TEXT NOT NULL,
    is_private BOOLEAN DEFAULT true,
    submitted_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    submitted_by_name TEXT
);

-- RLS for prayer_requests table
ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pastor and admin can view all prayer requests" ON prayer_requests
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor')
        )
    );

CREATE POLICY "Users can view their own prayer requests" ON prayer_requests
    FOR SELECT USING (submitted_by = auth.uid());

CREATE POLICY "Users can delete their own prayer requests" ON prayer_requests
    FOR DELETE USING (submitted_by = auth.uid());

CREATE POLICY "Anyone can submit prayer requests" ON prayer_requests
    FOR INSERT WITH CHECK (true);

-- ============================================
-- TABLE: groups
-- Small group structure and metadata
-- RLS: Public can read all. Group leader can update their group.
-- ============================================
CREATE TABLE IF NOT EXISTS groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    description TEXT,
    meeting_day TEXT,
    meeting_time TEXT,
    location TEXT,
    leader_id UUID REFERENCES people(id) ON DELETE SET NULL
);

-- RLS for groups table
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view all groups" ON groups
    FOR SELECT USING (true);

CREATE POLICY "Admin can manage groups" ON groups
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role = 'admin'
        )
    );

-- ============================================
-- TABLE: group_attendance
-- Weekly attendance records for groups
-- RLS: Only group_leader/pastor can insert/read
-- ============================================
CREATE TABLE IF NOT EXISTS group_attendance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    attendee_count INTEGER DEFAULT 0,
    notes TEXT,
    recorded_by UUID REFERENCES people(id) ON DELETE SET NULL
);

-- RLS for group_attendance table
ALTER TABLE group_attendance ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pastor can view all attendance" ON group_attendance
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor')
        )
    );

CREATE POLICY "Group leaders can view their group attendance" ON group_attendance
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM groups g
            JOIN people p ON g.leader_id = p.id
            WHERE g.id = group_attendance.group_id
            AND p.auth_user_id = auth.uid()
        )
    );

CREATE POLICY "Group leaders can insert attendance for their group" ON group_attendance
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM groups g
            JOIN people p ON g.leader_id = p.id
            WHERE g.id = group_id
            AND p.auth_user_id = auth.uid()
        )
    );

-- ============================================
-- TABLE: push_subscriptions
-- Stores mobile tokens for push alerts
-- RLS: User can only INSERT and DELETE their own token. No SELECT for public.
-- ============================================
CREATE TABLE IF NOT EXISTS push_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    token TEXT NOT NULL UNIQUE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    device_info TEXT
);

-- RLS for push_subscriptions table
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own subscription" ON push_subscriptions
    FOR INSERT WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can delete their own subscription" ON push_subscriptions
    FOR DELETE USING (user_id = auth.uid());

CREATE POLICY "Admin can view all subscriptions for push notifications" ON push_subscriptions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor')
        )
    );

-- ============================================
-- TABLE: email_recipients
-- Stores emails for the weekly follow-up report
-- RLS: Only admin can read/update
-- ============================================
CREATE TABLE IF NOT EXISTS email_recipients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    email TEXT NOT NULL UNIQUE,
    name TEXT,
    report_type TEXT DEFAULT 'weekly_followup' CHECK (report_type IN ('weekly_followup', 'attendance', 'all'))
);

-- RLS for email_recipients table
ALTER TABLE email_recipients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can manage email recipients" ON email_recipients
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role = 'admin'
        )
    );

-- ============================================
-- TABLE: sermons
-- Stores YouTube URL, title, transcript, AI summary
-- RLS: Public read access
-- ============================================
CREATE TABLE IF NOT EXISTS sermons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    title TEXT NOT NULL,
    description TEXT,
    youtube_url TEXT NOT NULL,
    date DATE DEFAULT CURRENT_DATE,
    speaker TEXT,
    transcript TEXT,
    ai_summary TEXT,
    discussion_questions TEXT[]
);

-- RLS for sermons table
ALTER TABLE sermons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view all sermons" ON sermons
    FOR SELECT USING (true);

CREATE POLICY "Pastor and admin can manage sermons" ON sermons
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM people p 
            WHERE p.auth_user_id = auth.uid() 
            AND p.role IN ('admin', 'pastor')
        )
    );

-- ============================================
-- INDEXES for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_people_auth_user ON people(auth_user_id);
CREATE INDEX IF NOT EXISTS idx_people_role ON people(role);
CREATE INDEX IF NOT EXISTS idx_connections_created ON connections(created_at);
CREATE INDEX IF NOT EXISTS idx_media_status ON media_items(status);
CREATE INDEX IF NOT EXISTS idx_prayer_submitted ON prayer_requests(submitted_by);
CREATE INDEX IF NOT EXISTS idx_groups_leader ON groups(leader_id);
CREATE INDEX IF NOT EXISTS idx_attendance_group ON group_attendance(group_id);
CREATE INDEX IF NOT EXISTS idx_attendance_date ON group_attendance(date);
CREATE INDEX IF NOT EXISTS idx_sermons_date ON sermons(date);

-- ============================================
-- TRIGGER: Update updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_people_updated_at
    BEFORE UPDATE ON people
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_media_items_updated_at
    BEFORE UPDATE ON media_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

