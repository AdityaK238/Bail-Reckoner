import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { BarChart3, BookOpen, Scale, Users } from "lucide-react"
import Link from "next/link"
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Scale className="h-6 w-6" />
          <span className="sr-only">Indian Bail Reckoner</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Indian Bail Reckoner
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Simplifying bail calculations for legal professionals across India. Fast, accurate, and always up-to-date.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-primary hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12" color="black">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <BarChart3 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Accurate Calculations</h3>
                <p className="text-gray-500 dark:text-gray-400">Precise bail amount calculations based on the latest legal guidelines.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BookOpen className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Legal Database</h3>
                <p className="text-gray-500 dark:text-gray-400">Comprehensive database of Indian bail laws and precedents.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Collaboration Tools</h3>
                <p className="text-gray-500 dark:text-gray-400">Easy sharing and collaboration features for legal teams.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold">Input Case Details</h3>
                <p className="text-gray-500 dark:text-gray-400">Enter the relevant case information into our user-friendly interface.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold">Calculate Bail Amount</h3>
                <p className="text-gray-500 dark:text-gray-400">Our algorithm processes the information and calculates the appropriate bail amount.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold">Generate Report</h3>
                <p className="text-gray-500 dark:text-gray-400">Receive a detailed report with the calculated bail amount and legal justifications.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4 text-center">
                <p className="text-xl italic">Indian Bail Reckoner has revolutionized our bail calculation process. Its fast, accurate, and indispensable.</p>
                <p className="font-semibold">- Priya Sharma, Criminal Lawyer</p>
              </div>
              <div className="flex flex-col space-y-4 text-center">
                <p className="text-xl italic">This tool has saved us countless hours and improved our accuracy. Highly recommended for all legal professionals.</p>
                <p className="font-semibold">- Rajesh Patel, Legal Consultant</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Ready to simplify your bail calculations?</h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                  Join thousands of legal professionals using Indian Bail Reckoner to streamline their work.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Enter your email" type="email" />
                  <Button className="bg-white text-primary hover:bg-gray-100" type="submit">
                    Get Started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Indian Bail Reckoner. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}