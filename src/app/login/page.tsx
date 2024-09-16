import Link from 'next/link'
import { Button } from "@/app/components/ui/button";


export default function newLogin() {
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
            <h2 className="text-xl font-semibold mb-4" style={{color: 'black'}}>For clients</h2>
            <p className="mb-4" style={{color: 'black'}}>Access case information and manage your docket.</p>
            <div className="space-x-4">
              <Link href="/login/judge">
                <Button>Login</Button>
              </Link>
              <Link href="/register/judge">
                <Button variant="outline" style={{color: 'black'}}>Register</Button>
              </Link>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4" style={{color: 'black'}}>For Lawyers</h2>
            <p className="mb-4" style={{color: 'black'}}>View your case status and upcoming hearings.</p>
            <div className="space-x-4">
              <Link href="/login/prisoner">
                <Button>Login</Button>
              </Link>
              <Link href="/register/prisoner">
                <Button variant="outline" style={{color: 'black'}}>Register</Button>
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