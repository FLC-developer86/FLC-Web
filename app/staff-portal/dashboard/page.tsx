import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Welcome to the staff portal</p>
      
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Connections</CardTitle>
            <CardDescription>Recent visitor submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Prayer Requests</CardTitle>
            <CardDescription>Pending requests</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Media Queue</CardTitle>
            <CardDescription>Pending approval</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Items to review</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

