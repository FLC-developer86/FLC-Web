import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Radio, Heart, Users, BookOpen, Clock, MapPin, ArrowRight, Play, Calendar } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
          {/* Eyebrow */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-white/90">Sundays at 10:00 AM & 12:00 PM</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="animate-fade-in-delay-1 font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            Welcome to{' '}
            <span className="text-gradient-gold">Faith Living</span>
          </h1>
          
          {/* Subtitle */}
          <p className="animate-fade-in-delay-2 mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            A community dedicated to growing in faith, loving unconditionally, and building strength through Christ. 
            Let&apos;s journey together and see lives transformed!
          </p>
          
          {/* CTAs */}
          <div className="animate-fade-in-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/live">
              <Button size="lg" className="btn-gold rounded-full px-8 py-6 text-base">
                <Play className="mr-2 h-5 w-5" />
                Watch Live
              </Button>
            </Link>
            <Link href="/connect">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-white/30 bg-white/5 px-8 py-6 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                I&apos;m New Here
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1.5 mx-auto rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="relative -mt-16 z-20 px-4 pb-16 md:-mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Watch Live Card */}
            <Link href="/live" className="group">
              <Card className="card-elevated overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="bg-gradient-purple p-6">
                    <Radio className="h-8 w-8 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">Watch Live</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Join our services online</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Give Card */}
            <Link href="/give" className="group">
              <Card className="card-elevated overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="bg-gradient-gold p-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">Give</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Support our mission</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Connect Card */}
            <Link href="/connect" className="group">
              <Card className="card-elevated overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="bg-gradient-purple p-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">Connect</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Get involved today</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Sermons Card */}
            <Link href="/media" className="group">
              <Card className="card-elevated overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="bg-gradient-gold p-6">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">Sermons</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Watch past messages</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="bg-secondary py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <div className="accent-line-gold mb-6" />
              <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
                Join Us This{' '}
                <span className="text-gradient-gold">Week</span>
              </h2>
              <p className="mt-4 text-lg text-white/70">
                We&apos;d love to meet you! Come as you are and experience a 
                welcoming community that feels like family. We empower one another 
                to live out our purpose, walk in God&apos;s love, and thrive in every season of life.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Service Times</h3>
                    <div className="mt-1 space-y-1 text-white/70">
                      <p>Saturday (Sabbath Service): 6:00 PM</p>
                      <p>Sunday (Worship Service): 10:00 AM & 12:00 PM</p>
                      <p>Tuesday (Corporate Prayer): 6:00 PM - 7:00 PM</p>
                      <p>Wednesday (Bible Study): 6:00 PM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-white/70">7037 FM 1044, BLDG 8 STE 802</p>
                    <p className="text-white/70">Marion, TX 78124</p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="mt-8 inline-block">
                <Button className="btn-gold rounded-full px-6">
                  Plan Your Visit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Right Content - Mission Card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-gold opacity-20 blur-xl" />
              <Card className="relative overflow-hidden border-0 bg-gradient-purple">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                      <Heart className="h-4 w-4 text-white" />
                      <span className="text-sm font-medium text-white">Our Mission</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white md:text-2xl leading-relaxed">
                      Growing in faith, loving unconditionally, and building strength through Christ.
                    </h3>
                    <div className="mt-6 h-px bg-white/20" />
                    <p className="mt-6 text-white/70 text-sm leading-relaxed">
                      We are dedicated to empowering one another to live out our purpose, 
                      walk in God&apos;s love, and thrive in every season of life. 
                      Let&apos;s journey together in faith and see lives transformed!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="accent-line-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Get <span className="text-gradient-purple">Involved</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              There are many ways to connect and grow at Faith Living Church
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="card-elevated text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-purple">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Faith Kids</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                A fun and engaging environment where children learn about God&apos;s love
              </p>
            </Card>
            
            <Card className="card-elevated text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Bible Study</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Dive deeper into God&apos;s Word every Wednesday at 6:00 PM
              </p>
            </Card>
            
            <Card className="card-elevated text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-purple">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Outreach</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Serve our community and make a difference through various outreach programs
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden py-20 px-4 bg-background">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Ready to Take the{' '}
            <span className="text-gradient-purple">Next Step</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you&apos;re exploring faith for the first time or looking for a church 
            to call home, we&apos;re here for you.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/connect">
              <Button size="lg" className="btn-purple rounded-full px-8">
                Fill Out a Connection Card
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer padding for mobile nav */}
      <div className="h-20 md:hidden" />
    </div>
  )
}
