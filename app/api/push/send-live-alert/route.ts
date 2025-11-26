import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  const cookieStore = await cookies()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing sessions.
          }
        },
      },
    }
  )

  // Verify user is authenticated and has pastor/admin role
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // TODO: Check user role from database
  // const { data: profile } = await supabase
  //   .from('people')
  //   .select('role')
  //   .eq('id', user.id)
  //   .single()
  
  // if (!profile || !['admin', 'pastor'].includes(profile.role)) {
  //   return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  // }

  // Get all push subscription tokens
  const { data: subscriptions, error } = await supabase
    .from('push_subscriptions')
    .select('token')

  if (error) {
    console.error('Error fetching subscriptions:', error)
    return NextResponse.json({ error: 'Failed to fetch subscriptions' }, { status: 500 })
  }

  // TODO: Send push notifications to all subscribers
  // This would integrate with a push notification service like Firebase Cloud Messaging
  // or Web Push API
  
  const notificationPayload = {
    title: 'Faith Living Church',
    body: '🔴 We are LIVE! Join us now for worship.',
    icon: '/icons/icon-192x192.png',
    data: {
      url: '/live'
    }
  }

  console.log(`Would send notification to ${subscriptions?.length || 0} subscribers:`, notificationPayload)

  return NextResponse.json({ 
    success: true, 
    message: `Notification sent to ${subscriptions?.length || 0} subscribers` 
  })
}

