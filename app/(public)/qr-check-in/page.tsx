export default function QRCheckInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold tracking-tight text-center">Welcome!</h1>
      <p className="mt-2 text-center text-muted-foreground">
        Quick check-in for today&apos;s service
      </p>
      
      <div className="mt-8 w-full max-w-sm">
        {/* Simplified one-tap check-in form */}
        <p className="text-center text-sm text-muted-foreground">
          One-tap check-in form will appear here
        </p>
      </div>
    </main>
  )
}

