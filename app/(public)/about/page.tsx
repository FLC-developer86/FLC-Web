import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Church, Clock, MapPin, Users, Heart, BookOpen, ArrowRight, Mail, Phone, Cross, Sparkles, Book, Globe } from 'lucide-react'

const beliefs = [
  {
    title: "The Bible",
    description: "We believe the Bible is the inspired Word of God, the ultimate authority for faith and practice in our lives.",
    icon: Book,
  },
  {
    title: "The Trinity",
    description: "We believe in one God who eternally exists in three persons: Father, Son, and Holy Spirit.",
    icon: Sparkles,
  },
  {
    title: "Jesus Christ",
    description: "We believe Jesus Christ is fully God and fully man, who lived a sinless life, died for our sins, and rose again.",
    icon: Cross,
  },
  {
    title: "Salvation",
    description: "We believe salvation is a gift from God, received through faith in Jesus Christ alone, not by works.",
    icon: Heart,
  },
  {
    title: "The Holy Spirit",
    description: "We believe the Holy Spirit indwells believers, empowering them to live godly lives and use their spiritual gifts.",
    icon: Sparkles,
  },
  {
    title: "The Church",
    description: "We believe the Church is the body of Christ, called to worship, fellowship, grow, and serve together.",
    icon: Church,
  },
  {
    title: "The Second Coming",
    description: "We believe in the personal, visible return of Jesus Christ to establish His eternal kingdom.",
    icon: Globe,
  },
  {
    title: "The Great Commission",
    description: "We believe we are called to share the Gospel and make disciples of all nations.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-purple py-16 px-4 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <Church className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            About <span className="text-gradient-gold">Faith Living Church</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            A community dedicated to growing in faith, loving unconditionally, 
            and building strength through Christ.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="accent-line-gold mb-6" />
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                Our <span className="text-gradient-purple">Mission</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Welcome to Faith Living! We are a community dedicated to growing in faith, 
                loving unconditionally, and building strength through Christ.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Join us as we empower one another to live out our purpose, walk in God&apos;s love, 
                and thrive in every season of life. Let&apos;s journey together in faith and see 
                lives transformed!
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-purple">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Love God</h3>
                    <p className="text-sm text-muted-foreground">Worship wholeheartedly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Love People</h3>
                    <p className="text-sm text-muted-foreground">Build authentic community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Grow Together</h3>
                    <p className="text-sm text-muted-foreground">Deepen our faith</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-purple">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Reach Out</h3>
                    <p className="text-sm text-muted-foreground">Share hope with others</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-gold opacity-20 blur-xl" />
              <Card className="relative overflow-hidden bg-gradient-mesh border-0">
                <CardContent className="p-8 md:p-12 text-center">
                  <p className="font-serif text-xl text-white/90 italic leading-relaxed">
                    &ldquo;For where two or three gather in my name, there am I with them.&rdquo;
                  </p>
                  <p className="mt-4 text-white/60">— Matthew 18:20</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="accent-line-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Our <span className="text-gradient-purple">Beliefs</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              These are the core beliefs that guide everything we do at Faith Living Church
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${index % 2 === 0 ? 'bg-gradient-purple' : 'bg-gradient-gold'}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{belief.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{belief.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Times & Location */}
      <section className="py-16 px-4 bg-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="accent-line-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Join Us <span className="text-gradient-gold">This Week</span>
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Service Times Card */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-purple">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Service Times</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <p className="font-semibold">Saturday</p>
                      <p className="text-sm text-muted-foreground">Sabbath Service</p>
                    </div>
                    <p className="text-lg font-bold text-gradient-purple">6:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <p className="font-semibold">Sunday</p>
                      <p className="text-sm text-muted-foreground">Worship Services</p>
                    </div>
                    <p className="text-lg font-bold text-gradient-purple">10 AM & 12 PM</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <p className="font-semibold">Tuesday</p>
                      <p className="text-sm text-muted-foreground">Corporate Prayer</p>
                    </div>
                    <p className="text-lg font-bold text-gradient-purple">6 - 7 PM</p>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p className="font-semibold">Wednesday</p>
                      <p className="text-sm text-muted-foreground">Bible Study</p>
                    </div>
                    <p className="text-lg font-bold text-gradient-purple">6 - 7 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Location</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">Faith Living Church</p>
                    <p className="text-muted-foreground">7037 FM 1044</p>
                    <p className="text-muted-foreground">BLDG 8 STE 802</p>
                    <p className="text-muted-foreground">Marion, TX 78124</p>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <p className="text-muted-foreground">(830) 444-FAITH</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <p className="text-muted-foreground">hello@faithlivingchurchnbtx.com</p>
                  </div>
                  <Button className="w-full btn-gold mt-4">
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-background">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Ready to <span className="text-gradient-purple">Visit</span>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We can&apos;t wait to meet you! Let us know you&apos;re coming so we can 
            make your first visit special.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/connect">
              <Button size="lg" className="btn-purple rounded-full px-8">
                Plan Your Visit
              </Button>
            </Link>
            <Link href="/live">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Watch Online First
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
