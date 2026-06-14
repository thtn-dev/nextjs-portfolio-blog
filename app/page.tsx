import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/features/hero"
import { TechStack } from "@/components/features/tech-stack"

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <Header />
      
      <main className="flex-1 flex flex-col bg-background">
        <Hero />
        <TechStack />
      </main>

      <Footer />
    </div>
  )
}


