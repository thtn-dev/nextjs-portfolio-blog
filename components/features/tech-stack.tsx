"use client"

import { useState } from "react"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  initials: string
  hoverColor: string
  defaultColor: string
}

const allTech: TechItem[] = [
  { name: ".NET",           icon: "/images/aspnet.png",        initials: "NET",  hoverColor: "group-hover:bg-purple-500/15 group-hover:text-purple-400 group-hover:border-purple-500/30",  defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "Python",         icon: "/images/python.png",        initials: "PY",   hoverColor: "group-hover:bg-yellow-500/10 group-hover:text-yellow-400 group-hover:border-yellow-500/30", defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "Go",             icon: "/images/go.png",            initials: "GO",   hoverColor: "group-hover:bg-blue-400/10 group-hover:text-blue-300 group-hover:border-blue-400/30",       defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "Node.js",        icon: "/images/nodejs.png",        initials: "NODE", hoverColor: "group-hover:bg-green-500/10 group-hover:text-green-400 group-hover:border-green-500/30",   defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "ReactJs",        icon: "/images/reactjs.png",       initials: "RJS",  hoverColor: "group-hover:bg-blue-500/15 group-hover:text-blue-400 group-hover:border-blue-500/30",      defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "PostgreSQL",     icon: "/images/postgresql.png",    initials: "PSQL", hoverColor: "group-hover:bg-blue-500/15 group-hover:text-blue-400 group-hover:border-blue-500/30",      defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "Elastic Search", icon: "/images/elasticsearch.png", initials: "ELK",  hoverColor: "group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/30",      defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "MongoDB",        icon: "/images/mongodb.png",       initials: "MDB",  hoverColor: "group-hover:bg-green-600/10 group-hover:text-green-500 group-hover:border-green-600/30",   defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "Redis",          icon: "/images/redis.png",         initials: "RDS",  hoverColor: "group-hover:bg-red-500/15 group-hover:text-red-400 group-hover:border-red-500/30",         defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "RabbitMQ",       icon: "/images/rabbitmq.png",      initials: "RMQ",  hoverColor: "group-hover:bg-orange-500/15 group-hover:text-orange-400 group-hover:border-orange-500/30",defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "Docker",         icon: "/images/docker.png",        initials: "DKR",  hoverColor: "group-hover:bg-sky-500/15 group-hover:text-sky-400 group-hover:border-sky-500/30",         defaultColor: "bg-white/5 text-white/40 border-white/10" },
  { name: "Azure",          icon: "/images/azure.png",         initials: "AZ",   hoverColor: "group-hover:bg-blue-500/15 group-hover:text-blue-400 group-hover:border-blue-500/30",      defaultColor: "bg-white/5 text-white/40 border-white/10" },
]
function buildInvertedTriangleRows(items: TechItem[]): TechItem[][] {
  const total = items.length

  let maxPerRow = 1
  while (true) {
    const sum = (maxPerRow * (maxPerRow + 1)) / 2
    if (sum >= total) break
    maxPerRow++
  }

  const sizes: number[] = []
  for (let s = maxPerRow; s >= 1; s--) {
    sizes.push(s)
  }

  while (sizes.reduce((a, b) => a + b, 0) > total) {
    sizes.pop()
  }

  const assigned = sizes.reduce((a, b) => a + b, 0)
  if (assigned < total) {
    sizes.push(total - assigned)
  }

  let i = 0
  return sizes.map((size) => items.slice(i, (i += size)))
}

function TechCard({ tech }: { tech: TechItem }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group relative flex flex-col items-center justify-center w-23.75 h-23.75 sm:w-27.5 sm:h-27.5 border border-white/15 bg-white/5 backdrop-blur-lg rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-105 hover:bg-white/12 hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.2)] z-10">
      <div className="relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 overflow-hidden mb-2">
        {!imageError ? (
          <Image
            src={tech.icon}
            alt={`${tech.name} Icon`}
            width={44}
            height={44}
            className="object-contain p-0.5 filter grayscale opacity-50 contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center border font-mono text-xs font-bold rounded-xl transition-all duration-300 ${tech.defaultColor} ${tech.hoverColor}`}>
            {tech.initials}
          </div>
        )}
      </div>
      <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-zinc-300 transition-colors duration-300 group-hover:text-white">
        {tech.name}
      </span>
    </div>
  )
}

export function TechStack() {
  const rows = buildInvertedTriangleRows(allTech)

  return (
    <section id="skills" className="w-full py-20 md:py-28 font-sans text-white relative overflow-hidden flex flex-col items-center justify-center bg-[#0a0a0a]">

      {/* Skewed Background Grid */}
      <div className="absolute inset-[-50%] z-0 origin-center rotate-15 scale-150 pointer-events-none">
        <div
          className="w-full h-full opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 w-full z-10 relative">

        {/* Section Heading */}
        <div className="mb-14 md:mb-20 text-center max-w-md mx-auto relative z-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-md">
            Tech Stack
          </h2>
          <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
            A list of core technologies I use to build reliable and optimized systems.
          </p>
        </div>

        {/* Glow Effect */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-150 h-75 md:h-100 bg-white/30 blur-[100px] rounded-full pointer-events-none z-0" />

        {/* Inverted Triangle Grid */}
        <div className="relative flex flex-col gap-4 items-center justify-center max-w-5xl mx-auto z-10">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-3 w-full">
              {row.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}