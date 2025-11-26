import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Heart, Shield, CreditCard, Repeat, Gift } from 'lucide-react'

const presetAmounts = [25, 50, 100, 250, 500]

export default function GivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-purple py-16 px-4 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Give <span className="text-gradient-gold">Generously</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Your generosity helps us reach more people with the message of hope and love. 
            Together, we&apos;re building strength through Christ and transforming lives.
          </p>
        </div>
      </section>

      {/* Giving Form Section */}
      <section className="flex-1 bg-muted/30 py-12 px-4 pb-24 md:pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Make a Gift</CardTitle>
                  <CardDescription>
                    Support the mission of Faith Living Church
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="one-time" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="one-time" className="gap-2">
                        <Gift className="h-4 w-4" />
                        One-Time
                      </TabsTrigger>
                      <TabsTrigger value="recurring" className="gap-2">
                        <Repeat className="h-4 w-4" />
                        Recurring
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="one-time" className="space-y-6">
                      {/* Amount Selection */}
                      <div className="space-y-3">
                        <Label className="text-base font-medium">Select Amount</Label>
                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                          {presetAmounts.map((amount) => (
                            <Button
                              key={amount}
                              variant="outline"
                              className="h-12 text-base font-semibold hover:bg-gradient-purple hover:text-white hover:border-transparent"
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                        
                        <div className="relative mt-4">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                            $
                          </span>
                          <Input 
                            type="number" 
                            placeholder="Custom amount"
                            className="pl-8 h-12 text-lg"
                          />
                        </div>
                      </div>

                      {/* Fund Selection */}
                      <div className="space-y-3">
                        <Label className="text-base font-medium">Select Fund</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Button variant="outline" className="h-12 justify-start">
                            General Fund
                          </Button>
                          <Button variant="outline" className="h-12 justify-start">
                            Missions
                          </Button>
                          <Button variant="outline" className="h-12 justify-start">
                            Building Fund
                          </Button>
                          <Button variant="outline" className="h-12 justify-start">
                            Faith Kids
                          </Button>
                          <Button variant="outline" className="h-12 justify-start">
                            Outreach
                          </Button>
                          <Button variant="outline" className="h-12 justify-start">
                            Special Offering
                          </Button>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button className="w-full h-14 btn-gold text-lg rounded-xl mt-6">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Continue to Payment
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="recurring" className="space-y-6">
                      {/* Amount Selection */}
                      <div className="space-y-3">
                        <Label className="text-base font-medium">Monthly Amount</Label>
                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                          {presetAmounts.map((amount) => (
                            <Button
                              key={amount}
                              variant="outline"
                              className="h-12 text-base font-semibold hover:bg-gradient-purple hover:text-white hover:border-transparent"
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                        
                        <div className="relative mt-4">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                            $
                          </span>
                          <Input 
                            type="number" 
                            placeholder="Custom amount"
                            className="pl-8 h-12 text-lg"
                          />
                        </div>
                      </div>

                      {/* Frequency */}
                      <div className="space-y-3">
                        <Label className="text-base font-medium">Frequency</Label>
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" className="h-12">Weekly</Button>
                          <Button variant="outline" className="h-12">Monthly</Button>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button className="w-full h-14 btn-gold text-lg rounded-xl mt-6">
                        <Repeat className="mr-2 h-5 w-5" />
                        Set Up Recurring Gift
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Security Notice */}
              <Card className="card-elevated border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-green-600 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900">Secure Giving</h3>
                      <p className="mt-1 text-sm text-green-700">
                        Your payment information is encrypted and secure. We never store your card details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Give */}
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-4">Why We Give</h3>
                  <div className="space-y-4 text-white/80 text-sm">
                    <p>
                      &ldquo;Each of you should give what you have decided in your heart to give, 
                      not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
                    </p>
                    <p className="text-white/60">— 2 Corinthians 9:7</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-white/70 text-sm">
                      Your generosity helps us grow in faith, love unconditionally, and build 
                      strength through Christ in our community.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Other Ways to Give */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Other Ways to Give</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">In Person:</span> During any of our services
                    </p>
                    <p>
                      <span className="font-medium text-foreground">By Mail:</span> 7037 FM 1044, BLDG 8 STE 802, Marion, TX 78124
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Questions?</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us at{' '}
                    <a href="mailto:give@faithlivingchurchnbtx.com" className="text-primary hover:underline">
                      give@faithlivingchurchnbtx.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
