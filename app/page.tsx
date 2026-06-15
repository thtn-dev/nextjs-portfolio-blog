import Script from "next/script"
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

      <Script id="chatbase-script" strategy="lazyOnload">
        {`
          (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="XkebijsNLCFq8r9-uXAlv";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
        `}
      </Script>

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

        /* Chatbase Ping Effect */
        @keyframes chatbase-ping {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); }
          70% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        #chatbase-bubble-button {
          animation: chatbase-ping 2.5s infinite cubic-bezier(0.2, 0.8, 0.2, 1) !important;
          border-radius: 50% !important;
        }
      ` }} />
    </div>
  )
}




