import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/features/hero"
import { TechStack } from "@/components/features/tech-stack"
import { ProjectsSection } from "@/components/features/projects-section"
import { ContactSection } from "@/components/features/contact-section"
import { ForceDark } from "@/components/force-dark"

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans bg-black force-pure-black-page">
      <ForceDark />
      <Header />
      
      <main className="flex-1 flex flex-col bg-black">
        <Hero />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        /* Force dark theme variables locally */
        .force-pure-black-page {
          --background: oklch(0 0 0) !important;
          --foreground: oklch(0.985 0 0) !important;
          --border: oklch(0.15 0 0) !important;
          --card: oklch(0.08 0 0) !important;
          --muted: oklch(0.08 0 0) !important;
          --secondary: oklch(0.08 0 0) !important;
          --accent: oklch(0.08 0 0) !important;
        }

        /* Force page backgrounds to be pure black */
        html, body, .force-pure-black-page {
          background-color: #000000 !important;
        }
        main, section, footer, .bg-\\[\\#050505\\], .bg-\\[\\#0a0a0a\\], .bg-zinc-950 {
          background-color: #000000 !important;
        }

        /* Force scrollbar to be black */
        html, body, * {
          scrollbar-color: #222222 #000000 !important;
        }
        ::-webkit-scrollbar {
          width: 10px !important;
          height: 10px !important;
        }
        ::-webkit-scrollbar-track {
          background: #000000 !important;
        }
        ::-webkit-scrollbar-thumb {
          background: #222222 !important;
          border-radius: 5px !important;
          border: 2px solid #000000 !important;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #333333 !important;
        }
      ` }} />
    </div>
  )
}




