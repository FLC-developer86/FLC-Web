export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      people: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          first_name: string
          last_name: string
          email: string | null
          phone: string | null
          role: 'member' | 'group_leader' | 'media' | 'pastor' | 'admin'
          auth_user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          first_name: string
          last_name: string
          email?: string | null
          phone?: string | null
          role?: 'member' | 'group_leader' | 'media' | 'pastor' | 'admin'
          auth_user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          first_name?: string
          last_name?: string
          email?: string | null
          phone?: string | null
          role?: 'member' | 'group_leader' | 'media' | 'pastor' | 'admin'
          auth_user_id?: string | null
        }
      }
      connections: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string | null
          phone: string | null
          source: 'connection_card' | 'qr_checkin' | 'visitor'
          how_heard: string | null
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email?: string | null
          phone?: string | null
          source?: 'connection_card' | 'qr_checkin' | 'visitor'
          how_heard?: string | null
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string
          email?: string | null
          phone?: string | null
          source?: 'connection_card' | 'qr_checkin' | 'visitor'
          how_heard?: string | null
          notes?: string | null
        }
      }
      media_items: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          description: string | null
          file_url: string
          thumbnail_url: string | null
          type: 'photo' | 'video'
          status: 'pending' | 'approved' | 'rejected'
          uploaded_by: string | null
          approved_by: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          description?: string | null
          file_url: string
          thumbnail_url?: string | null
          type?: 'photo' | 'video'
          status?: 'pending' | 'approved' | 'rejected'
          uploaded_by?: string | null
          approved_by?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          description?: string | null
          file_url?: string
          thumbnail_url?: string | null
          type?: 'photo' | 'video'
          status?: 'pending' | 'approved' | 'rejected'
          uploaded_by?: string | null
          approved_by?: string | null
        }
      }
      prayer_requests: {
        Row: {
          id: string
          created_at: string
          request: string
          is_private: boolean
          submitted_by: string | null
          submitted_by_name: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          request: string
          is_private?: boolean
          submitted_by?: string | null
          submitted_by_name?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          request?: string
          is_private?: boolean
          submitted_by?: string | null
          submitted_by_name?: string | null
        }
      }
      groups: {
        Row: {
          id: string
          created_at: string
          name: string
          description: string | null
          meeting_day: string | null
          meeting_time: string | null
          location: string | null
          leader_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          description?: string | null
          meeting_day?: string | null
          meeting_time?: string | null
          location?: string | null
          leader_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          description?: string | null
          meeting_day?: string | null
          meeting_time?: string | null
          location?: string | null
          leader_id?: string | null
        }
      }
      group_attendance: {
        Row: {
          id: string
          created_at: string
          group_id: string
          date: string
          attendee_count: number
          notes: string | null
          recorded_by: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          group_id: string
          date: string
          attendee_count?: number
          notes?: string | null
          recorded_by?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          group_id?: string
          date?: string
          attendee_count?: number
          notes?: string | null
          recorded_by?: string | null
        }
      }
      push_subscriptions: {
        Row: {
          id: string
          created_at: string
          token: string
          user_id: string | null
          device_info: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          token: string
          user_id?: string | null
          device_info?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          token?: string
          user_id?: string | null
          device_info?: string | null
        }
      }
      email_recipients: {
        Row: {
          id: string
          created_at: string
          email: string
          name: string | null
          report_type: 'weekly_followup' | 'attendance' | 'all'
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          name?: string | null
          report_type?: 'weekly_followup' | 'attendance' | 'all'
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          name?: string | null
          report_type?: 'weekly_followup' | 'attendance' | 'all'
        }
      }
      sermons: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          youtube_url: string
          date: string
          speaker: string | null
          transcript: string | null
          ai_summary: string | null
          discussion_questions: string[] | null
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          youtube_url: string
          date?: string
          speaker?: string | null
          transcript?: string | null
          ai_summary?: string | null
          discussion_questions?: string[] | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          youtube_url?: string
          date?: string
          speaker?: string | null
          transcript?: string | null
          ai_summary?: string | null
          discussion_questions?: string[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

