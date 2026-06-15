import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-zinc-400 py-16 font-sans overflow-hidden border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Top Section: Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {/* Column 1: Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sky-300 font-medium text-base mb-2">Navigation</h3>
            <Link href="#about" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">About</Link>
            <Link href="#projects" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Projects</Link>
            <Link href="#skills" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Skills</Link>
            <Link href="#contact" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Contact</Link>
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sky-300 font-medium text-base mb-2">Socials</h3>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">X / Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">YouTube</a>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sky-300 font-medium text-base mb-2">Resources</h3>
            <a href="/pdf/Tang-Ho-Trung-Nam-CV.pdf" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Resume / CV</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Source Code</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Style Guide</a>
          </div>
         
        </div>

        {/* Middle Section: Giant Outline Text */}
        <div className="w-full flex justify-center mb-16 overflow-hidden">
          <h1 
            className="text-[12vw] md:text-[8vw] font-black tracking-tighter uppercase whitespace-nowrap text-transparent opacity-80"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)" }}
          >
            TrungNamDev
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 pt-8 border-t border-zinc-900/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            All systems operational
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
