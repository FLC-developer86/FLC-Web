import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Users, Heart, Send, CheckCircle, MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function ConnectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-purple py-16 px-4 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Let&apos;s <span className="text-gradient-gold">Connect</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            We&apos;d love to get to know you better! Whether you&apos;re new to Faith Living 
            or looking to get more involved, we&apos;re here for you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="flex-1 bg-muted/30 py-12 px-4 pb-24 md:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Connection Card</CardTitle>
                  <CardDescription>
                    Tell us a little about yourself and how we can serve you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Smith" className="h-12" />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" className="h-12" />
                      </div>
                    </div>

                    {/* How did you hear about us */}
                    <div className="space-y-2">
                      <Label htmlFor="howHeard">How did you hear about Faith Living Church?</Label>
                      <Input id="howHeard" placeholder="Friend, social media, Google..." className="h-12" />
                    </div>

                    {/* Interest Areas */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">I&apos;m interested in:</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button type="button" variant="outline" className="h-12 justify-start">
                          <CheckCircle className="mr-2 h-4 w-4 opacity-0" />
                          Learning more about the church
                        </Button>
                        <Button type="button" variant="outline" className="h-12 justify-start">
                          <CheckCircle className="mr-2 h-4 w-4 opacity-0" />
                          Faith Kids (Children&apos;s Ministry)
                        </Button>
                        <Button type="button" variant="outline" className="h-12 justify-start">
                          <CheckCircle className="mr-2 h-4 w-4 opacity-0" />
                          Serving opportunities
                        </Button>
                        <Button type="button" variant="outline" className="h-12 justify-start">
                          <CheckCircle className="mr-2 h-4 w-4 opacity-0" />
                          Bible Study
                        </Button>
                        <Button type="button" variant="outline" className="h-12 justify-start">
                          <CheckCircle className="mr-2 h-4 w-4 opacity-0" />
                          Prayer support
                        </Button>
                        <Button type="button" variant="outline" className="h-12 justify-start">
                          <CheckCircle className="mr-2 h-4 w-4 opacity-0" />
                          Outreach programs
                        </Button>
                      </div>
                    </div>

                    {/* Prayer Request */}
                    <div className="space-y-2">
                      <Label htmlFor="prayer">Prayer Request (Optional)</Label>
                      <Textarea 
                        id="prayer" 
                        placeholder="Share your prayer request with us..."
                        className="min-h-[120px] resize-none"
                      />
                      <p className="text-xs text-muted-foreground">
                        Your prayer request will be kept confidential
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full h-14 btn-gold text-lg rounded-xl">
                      <Send className="mr-2 h-5 w-5" />
                      Submit Connection Card
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Times */}
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-white" />
                    <h3 className="font-semibold text-white">Service Times</h3>
                  </div>
                  <div className="space-y-2 text-white/80 text-sm">
                    <p><span className="text-white font-medium">Saturday:</span> 6:00 PM</p>
                    <p><span className="text-white font-medium">Sunday:</span> 10:00 AM & 12:00 PM</p>
                    <p><span className="text-white font-medium">Tuesday:</span> 6:00 PM - 7:00 PM</p>
                    <p><span className="text-white font-medium">Wednesday:</span> 6:00 PM - 7:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Our Location</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">Faith Living Church</p>
                    <p>7037 FM 1044, BLDG 8 STE 802</p>
                    <p>Marion, TX 78124</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Other Ways to Connect</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <p className="text-muted-foreground">(830) 444-FAITH</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <p className="text-muted-foreground">hello@faithlivingchurchnbtx.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Note */}
              <Card className="card-elevated border-blue-200 bg-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Your Privacy Matters</h3>
                      <p className="mt-1 text-sm text-blue-700">
                        We respect your privacy and will never share your information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
