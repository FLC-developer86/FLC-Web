import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BookOpen, Search, Play, Calendar, User, Clock } from 'lucide-react'
import Link from 'next/link'

// Placeholder sermon data - will be replaced with database content
const sermons = [
  {
    id: '1',
    title: 'Walking in Faith',
    speaker: 'Pastor',
    date: 'November 24, 2024',
    duration: '45 min',
    thumbnail: null,
  },
  {
    id: '2',
    title: 'The Power of Prayer',
    speaker: 'Pastor',
    date: 'November 17, 2024',
    duration: '42 min',
    thumbnail: null,
  },
  {
    id: '3',
    title: 'Living in God\'s Love',
    speaker: 'Pastor',
    date: 'November 10, 2024',
    duration: '38 min',
    thumbnail: null,
  },
  {
    id: '4',
    title: 'Building Strength Through Christ',
    speaker: 'Pastor',
    date: 'November 3, 2024',
    duration: '40 min',
    thumbnail: null,
  },
  {
    id: '5',
    title: 'Thriving in Every Season',
    speaker: 'Pastor',
    date: 'October 27, 2024',
    duration: '44 min',
    thumbnail: null,
  },
  {
    id: '6',
    title: 'Empowered to Live',
    speaker: 'Pastor',
    date: 'October 20, 2024',
    duration: '41 min',
    thumbnail: null,
  },
]

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-purple py-16 px-4 md:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Sermons & <span className="text-gradient-gold">Messages</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Missed a service? Catch up on past messages and continue growing in your faith journey.
          </p>
          
          {/* Search */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <Input 
                placeholder="Search sermons..."
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      <section className="py-12 px-4 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="accent-line-gold" />
            <h2 className="font-serif text-2xl font-bold">Latest Message</h2>
          </div>
          
          <Card className="card-elevated overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video Thumbnail */}
              <div className="aspect-video bg-gradient-mesh flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <p className="text-white/60">Click to play</p>
                </div>
              </div>
              
              {/* Sermon Info */}
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  Latest
                </div>
                <h3 className="font-serif text-2xl font-bold md:text-3xl">Walking in Faith</h3>
                <p className="mt-2 text-muted-foreground">
                  Join us as we explore what it means to walk in faith and trust God in every area of our lives.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Pastor</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>November 24, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>45 min</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="btn-gold">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* All Sermons */}
      <section className="py-12 px-4 bg-muted/30 pb-24 md:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold">All Messages</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Most Recent</Button>
              <Button variant="ghost" size="sm">By Series</Button>
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="card-elevated overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-purple relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                    {sermon.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {sermon.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{sermon.speaker}</span>
                    <span>•</span>
                    <span>{sermon.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Messages
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
