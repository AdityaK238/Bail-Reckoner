import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Justice System Portal</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">For Judges</h2>
            <p className="mb-4">Access case information and manage your docket.</p>
            <div className="space-x-4">
              <Link href="/judge/login">
                <Button>Login</Button>
              </Link>
              <Link href="/judge/register">
                <Button variant="outline">Register</Button>
              </Link>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">For Prisoners</h2>
            <p className="mb-4">View your case status and upcoming hearings.</p>
            <div className="space-x-4">
              <Link href="/prisoner/login">
                <Button>Login</Button>
              </Link>
              <Link href="/prisoner/register">
                <Button variant="outline">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Justice System Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}