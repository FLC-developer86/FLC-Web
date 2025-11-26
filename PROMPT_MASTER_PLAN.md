This document is the single source of truth for the project's scope, architecture, and constraints. Cursor/AI: Use this document as the primary context for all code generation, editing, and planning.

1. CORE IDENTITY & GOALS
    Target Domain: www.faithliving.church
    Project Type: Full-Stack Progressive Web App (PWA) and Custom Church Management System (CMS).
    Aesthetic: Mobile-first, modern, clean, high-contrast, bold typography (similar to major tech company design systems).
    Timeline: 3-Week Sprint (Prioritize core functionality over polish).
    Global Reach: Full Internationalization (i18n) support for English (default) and Spanish.
    
2. 🔒 SECURITY & ACCESS (Fort Knox Protocol)
    Security is the #1 priority. All sensitive data must be protected with the highest level of security.
        Database: Supabase Row Level Security (RLS) is non-negotiable for every table.
        Default: public users can only read content required for the public site.
        Admin/Pastor: Must pass role checks via RLS to access sensitive tables (connections, prayer_requests).
        Hidden CMS: No public "Login" or "Sign Up" links on the public-facing PWA.
        Staff Login Route: The only entry point is a secret route: /staff-portal/login.
        Middleware Protection: Use Next.js Middleware (middleware.ts) to immediately redirect any non-authenticated attempts to access /staff-portal back to the login page, and redirect any guessed routes like /admin or /dashboard to the homepage (/).
        Sensitive Data: Financial transaction details (credit card/bank info) must NEVER be stored in the Supabase database. Use Stripe or a dedicated giving processor and only store transaction IDs and summaries.
        
    3. 💻 TECH STACK & CONFIGURATION
        Framework: Next.js 15 (App Router, TypeScript).
        Styling: Tailwind CSS.UI 
        Components: shadcn/ui (accessible and composable components).
        Backend/DB/Auth: Supabase (Postgres, Auth, Storage, Edge Functions).
        PWA: Must be configured using next-pwa for manifest, service worker, and offline capabilities.
        Video: YouTube (Livestreaming/Archive).
        i18n: next-intl.
        
    4. 🛠️ FULL DATABASE SCHEMA (CRM-Lite & Features)
        Cursor/AI: Generate the following SQL tables using a new file supabase/01_master_schema.sql.
        Table Name,Primary Purpose,RLS Constraint
        people,Master list of all members/attendees.,Only visible to admin / pastor. Users can only update their own record.
        connections,"Tracks form submissions, QR check-ins, and visitors.",Only pastor / admin can read.
        media_items,Stores metadata for photos/videos (after being uploaded to Supabase Storage).,status = 'approved' is public. All others are restricted to media / pastor.
        prayer_requests,Member-submitted prayer items.,Private. Only submitter can read/delete their own. pastor / admin can read all.
        groups,Small group structure and metadata.,public can read all group details. group_leader can update attendance for their group.
        group_attendance,Weekly attendance records for groups.,Only group_leader / pastor can insert/read.
        push_subscriptions,Stores mobile tokens for push alerts.,User can only INSERT and DELETE their own token. No SELECT for public.
        email_recipients,Stores emails for the weekly follow-up report.,Only admin can read/update.
        sermons,"Stores YouTube URL, title, transcript, AI summary.",Public read access.
        
    5. PWA & PUBLIC SITE FEATURES
        5.1. Navigation & Structure
            Mobile-First Design: All components must prioritize small screens. Implement a persistent Bottom Tab Bar navigation for the main PWA routes (Home, Live, Give, Connect, More).
            Routes:
                /: Home
                /Feed
                /live: Livestream Page
                /give: Dedicated Secure Giving Page
                /connect: Forms
                /QR Check-in
                /media: Sermon Archive
                /about: Static pages
        5.2. Livestream & Media
            Dedicated /live page: Must contain a YouTube Live Embed (full-width, top sticky on mobile).
            Live Status Indicator: Use conditional logic to display a prominent "🔴 LIVE NOW" banner on the homepage and /live page when services are scheduled or detected as streaming.
            Sermon Notes: Integrate a local storage-backed <Textarea> component on the /live page for users to take and download notes (saves data locally to the phone).
            AI Content Repurposing: For the sermons table, add a backend process (Edge Function) to call the OpenAI API to generate a transcript, summary, and discussion questions upon video upload.
        5.3. Giving (Secure)
            Requirement: Giving will NOT use Planning Center. The site must integrate with a secure third-party processor (e.g., Stripe, Tithely, or Pushpay).
            Prompt: Generate a secure Giving Component that handles the front-end validation and securely passes data to the payment processor's API, without storing financial data in Supabase.
        5.4. Visitor Tracking & Follow-Up
            Digital Connection Card: Create a form on the /connect route that saves data to the connections table.
            QR Check-in: Create a dedicated /qr-check-in route that opens a simplified, one-tap form for users who scan a physical QR code (saves to connections).
            
        6. 🧑‍💻 STAFF PORTAL & CMS FEATURES
            Cursor/AI: All components and routes under this section must be protected by the middleware check for the /staff-portal route group.
            
            6.1. Role-Based Dashboards
                Admin View: Access to all tables, User/Role Management.
                Pastor View: Access to Media Approval Queue, Connections Table, and Prayer Request Dashboard.
                Media Team View: Access to Photo/Video Upload Portal only.
                
            6.2. Media Approval Workflow
                Upload Portal: Media Team uploads images to Supabase Storage (in a bucket called media-drafts). A record is created in the media_items table with 
                    status: 'pending'.Approval 
                    Queue: Pastor's dashboard displays a grid view of all media_items where status = 'pending'. 
                The Pastor can click Approve (updates status to 'approved') or Reject (deletes item).
                Public Feed: The public site only displays media where status = 'approved'.
                
            6.3. Automated Reporting (The Cron Job)
                Edge Function (send_followup_report): Write the conceptual Deno code for the Edge Function that runs weekly.
                Job: Runs every Monday 9:00 AM (Conceptual trigger).
                Action: Queries connections for all records created in the last 7 days.
                Output: Formats data and sends an email report (using a conceptual email client) to the email stored in the email_recipients table.
                
            6.4. Push Notifications
            Trigger UI: On the Pastor's dashboard, create a simple button labeled "Send Live Service Push Alert."
            Backend: This button should call a protected API route (/api/push/send-live-alert) that reads all tokens from the push_subscriptions table and sends a "We are LIVE!" notification payload.