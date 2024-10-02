"use client";  // Ensure this line is added to mark the component as a Client Component

import { Button } from "@/app/components/ui/button";
import { BarChart3, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import { FloatingNav } from "./components/ui/floating-navbar";
import Head from 'next/head';  // Import the Next.js Head component
import Input from '@/app/components/ui/input';

export default function LandingPage() {
  
   // Initialize router

  // Hydration-safe check to only run the chat button logic on the client
  

  const navItems = [
    { name: "FAQ", link: "/faq" },
    { name: "Marketplace", link: "/marketplace" },
    { name: "Statistics", link: "/statistics" },
    { name: "Bail Criteria Assessment", link: "/bail-overview" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <FloatingNav navItems={navItems} className="bg-white" />
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
                <Link href="/bail-overview">
                  <Button className="bg-white text-primary hover:bg-gray-100">Get Started</Button>
                </Link>
                <Link href="/help" passHref>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12" style={{ color: "black" }}>Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <BarChart3 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold" style={{ color: "black" }}>Accurate Calculations</h3>
                <p className="text-gray-500 dark:text-gray-400">Precise bail amount calculations based on the latest legal guidelines.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BookOpen className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold" style={{ color: "black" }}>Legal Database</h3>
                <p className="text-gray-500 dark:text-gray-400">Comprehensive database of Indian bail laws and precedents.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold" style={{ color: "black" }}>Collaboration Tools</h3>
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
                <p className="text-gray-500 dark:text-gray-400" style={{ color: "white" }}>Enter the relevant case information into our user-friendly interface.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold">Calculate Bail Amount</h3>
                <p className="text-gray-500 dark:text-gray-400" style={{ color: "white" }}>Our algorithm processes the information and calculates the appropriate bail amount.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold">Generate Report</h3>
                <p className="text-gray-500 dark:text-gray-400" style={{ color: "white" }}>Receive a detailed report with the calculated bail amount and legal justifications.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12" style={{ color: "black" }}>Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4 text-center">
                <p className="text-xl italic" style={{ color: "black" }}>Indian Bail Reckoner has revolutionized our bail calculation process. Its fast, accurate, and indispensable.</p>
                <p className="font-semibold" style={{ color: "black" }}>- Priya Sharma, Criminal Lawyer</p>
              </div>
              <div className="flex flex-col space-y-4 text-center">
                <p className="text-xl italic" style={{ color: "black" }}>This tool has saved us countless hours and improved our accuracy. Highly recommended for all legal professionals.</p>
                <p className="font-semibold" style={{ color: "black" }}>- Rajesh Patel, Legal Consultant</p>
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
    </div>
  );
}
