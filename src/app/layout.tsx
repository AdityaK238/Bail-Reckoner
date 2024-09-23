<<<<<<< HEAD
"use client"; // Mark this file as a Client Component
=======
  import type { Metadata } from "next";
  import localFont from "next/font/local";
  import "./globals.css";
  import Link from "next/link";
  import { Scale } from "lucide-react";
  import { FloatingNav } from "./components/ui/floating-navbar";
  import { useRouter } from 'next/navigation';  // Importing useRouter for navigation

>>>>>>> b234ba699fa1cfdabcd3baab6d252358d37bba27

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Scale } from "lucide-react";
import { useState, useCallback } from "react";

// Import the local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

<<<<<<< HEAD
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use useState to handle dropdown open state
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown, wrapped in useCallback to prevent recreation on each render
  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* Chatbot Button */}
        <div className="chatbot">
=======
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const navItems = [
      { name: "FAQ", link: "/faq" },
      { name: "Marketplace", link: "/marketplace" },
      { name: "Statistics", link: "/statistics" },
      { name: "Bail Criteria Assessment", link: "/bail-overview" },
    ];
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <div className="chatbot">
            <button 
              className="fixed bottom-16 right-4 bg-primary text-white p-3 rounded-full shadow-lg"
              aria-label="Open Chatbot"><img src="chatbot.png" alt="Chatbot" /></button>
          </div>
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
              <Scale className="h-6 w-6" />
              <span className="sr-only">Indian Bail Reckoner</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link href="/faq">FAQ</Link>
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/statistics">Statistics</Link>
              <Link href="/bail-overview" style={{ fontSize: 15.5, border: 5 }}>Bail Criteria Assessment</Link>
              <Link href="/login" style={{ fontSize: 15 }}>Login</Link>
            </nav>
          </header>

          <main className="flex-grow">
          <FloatingNav navItems={navItems} className="bg-white" />

            {/* navbar code goes here */}
            {children}
          </main>
>>>>>>> b234ba699fa1cfdabcd3baab6d252358d37bba27
          
        </div>

        {/* Header and Navigation */}
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <Scale className="h-6 w-6" />
            <span className="sr-only">Indian Bail Reckoner</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/faq">FAQ</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/statistics">Statistics</Link>

            {/* Other Services Dropdown */}
            <div className="relative">
              <button
                className="focus:outline-none"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                Other Services
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10" style={{background:"transparent"}}>
                  <Link
                    href="/bailapplication"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Bail Application
                  </Link>
                  <Link href="/fir" className="block px-4 py-2 hover:bg-gray-100">
                    FIR Registration
                  </Link>
                  <Link
                    href="/indianmap"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Indian Map
                  </Link>
                </div>
              )}
            </div>

            <Link href="/bail-overview" style={{ fontSize: "15px" }}>
              Bail Criteria Assessment
            </Link>
            <Link href="/login" style={{ fontSize: "15px" }}>
              Login
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2023 Indian Bail Reckoner. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
