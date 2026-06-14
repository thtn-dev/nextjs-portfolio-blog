"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "px-4" : "px-0"}`}>
      <header
        className={`mx-auto transition-all duration-500 ease-in-out font-sans ${
          isScrolled
            ? "max-w-5xl mt-3 rounded-full border border-border bg-background/85 backdrop-blur-md shadow-md px-6"
            : "w-full border-b border-transparent bg-transparent px-6 md:px-8"
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand Name */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
            >
              YourName
            </Link>
          </div>

          {/* Middle: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Social Icons + Resume CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md"
              aria-label="GitHub"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md"
              aria-label="LinkedIn"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <Button variant="outline" className="h-9 px-4 font-medium rounded-full" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile: Menu Icon Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground rounded-full"
              aria-label="Toggle Menu"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
