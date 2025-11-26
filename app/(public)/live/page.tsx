import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Radio, Download, Share2, MessageCircle, Clock, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'

export default function LivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Live Banner */}
      <div className="bg-gradient-gold py-2 px-4">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
          </span>
          <span className="text-sm font-semibold text-black">🔴 LIVE — Faith Living Church</span>
        </div>
      </div>

      {/* Video Player Section */}
      <section className="w-full bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="aspect-video w-full bg-gradient-mesh flex items-center justify-center">
            {/* YouTube embed will go here */}
            <div className="text-center text-white p-8">
              <Radio className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h2 className="font-serif text-2xl font-bold mb-2">Live Stream</h2>
              <p className="text-white/60 max-w-md mx-auto">
                Join us for worship! Our live stream will appear here during service times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-1 bg-muted/30 py-8 px-4 pb-24 md:pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Service Info */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="font-serif text-2xl font-bold md:text-3xl">Welcome to Faith Living</h1>
                      <p className="mt-1 text-muted-foreground">
                        Growing in faith, loving unconditionally, building strength through Christ
                      </p>
                    </div>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="mt-4 h-px bg-border" />
                  
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Join us as we empower one another to live out our purpose, walk in God&apos;s love, 
                      and thrive in every season of life. Let&apos;s journey together in faith and see lives transformed!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Sermon Notes */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <h2 className="font-semibold">Sermon Notes</h2>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your notes are saved locally on your device
                  </p>
                  <Textarea 
                    placeholder="Type your sermon notes here... Your notes will be saved automatically."
                    className="min-h-[200px] resize-none"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Schedule */}
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-white" />
                    <h3 className="font-semibold text-white">Service Schedule</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-white/80">
                      <div>
                        <span className="block text-white font-medium">Saturday</span>
                        <span className="text-xs">Sabbath Service</span>
                      </div>
                      <span className="font-medium text-white">6:00 PM</span>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="flex justify-between text-white/80">
                      <div>
                        <span className="block text-white font-medium">Sunday</span>
                        <span className="text-xs">Worship Services</span>
                      </div>
                      <span className="font-medium text-white">10 & 12 PM</span>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="flex justify-between text-white/80">
                      <div>
                        <span className="block text-white font-medium">Tuesday</span>
                        <span className="text-xs">Corporate Prayer</span>
                      </div>
                      <span className="font-medium text-white">6-7 PM</span>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="flex justify-between text-white/80">
                      <div>
                        <span className="block text-white font-medium">Wednesday</span>
                        <span className="text-xs">Bible Study</span>
                      </div>
                      <span className="font-medium text-white">6-7 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/connect">
                      <Button variant="outline" className="w-full justify-start">
                        🙏 Submit Prayer Request
                      </Button>
                    </Link>
                    <Link href="/give">
                      <Button variant="outline" className="w-full justify-start">
                        💝 Give Online
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button variant="outline" className="w-full justify-start">
                        📖 Our Beliefs
                      </Button>
                    </Link>
                    <Link href="/media">
                      <Button variant="outline" className="w-full justify-start">
                        🎬 Past Messages
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* New Here? */}
              <Card className="card-elevated border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">New Here?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We&apos;d love to connect with you!
                  </p>
                  <Link href="/connect">
                    <Button className="w-full btn-gold">
                      Fill Out a Connection Card
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
