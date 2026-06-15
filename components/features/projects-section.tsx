"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Drishti",
    category: "AI / LLM",
    tags: ["Python", "PyTorch", "Transformers", "FastAPI", "React", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    title: "VoteChain",
    category: "Blockchain",
    tags: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
  },
  {
    title: "Earthquake Estimator",
    category: "IoT / Hardware",
    tags: ["Arduino", "C++", "IoT Sensors", "Python", "ML", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    title: "Task Management",
    category: "Web App",
    tags: ["Next.js", "Socket.io", "Prisma", "Zustand"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80"
  }
]

const CARD_WIDTH = 500

export function ProjectsSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [vw, setVw] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth)
      setIsMobile(window.innerWidth < 768)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const xStart = vw / 2 - CARD_WIDTH / 2
  const xEnd = xStart - (projects.length - 1) * CARD_WIDTH

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const xRaw = useTransform(scrollYProgress, [0, 1], [xStart, xEnd])

  const x = useSpring(xRaw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const isEven = index % 2 === 0
    return (
      <div
        className="group relative flex-none flex flex-col justify-between"
        style={{ width: `${CARD_WIDTH}px`, height: "650px", padding: "3rem", borderRight: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className={`space-y-12 ${isEven ? "order-1" : "order-2"}`}>
          <div className="flex justify-between items-start">
            <span className="text-5xl font-bold text-white/90">{(index + 1).toString().padStart(2, "0")}</span>
            <div className="text-right">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-white/40 mt-1">{project.category}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3 text-white/90">Tools and features</h4>
            <p className="text-sm text-white/50 leading-relaxed font-light">{project.tags.join(", ")}</p>
          </div>
        </div>
        <div className={`relative w-full aspect-square ${isEven ? "order-2 mt-auto" : "order-1 mb-auto"}`}>
          <div className="w-full h-full relative overflow-hidden bg-white/5 rounded-lg">
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <section id="projects" className="bg-black text-white py-24 px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-12">
          My <span className="text-primary">Work</span>
        </h2>
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section ref={targetRef} id="projects" className="bg-black text-white relative h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="pt-24 pb-8 px-6 md:px-12 flex-none">
          <h2 className="text-5xl font-bold tracking-tight">
            My <span className="text-primary">Work</span>
          </h2>
        </div>

        <div className="flex flex-1 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-center will-change-transform">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}