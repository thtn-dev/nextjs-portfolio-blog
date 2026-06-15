import {
  ArrowRight,
  Flame,
  Globe,
  Mail,
  Terminal,
  MessageSquare,
  Database,
  Server,
} from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "+3", label: "YEARS OF EXPERIENCE" },
  { value: "+5", label: "PROJECTS COMPLETED" },
  { value: "+7", label: "WORLDWIDE CLIENTS" },
]

const projectCards = [
  {
    bgColor: "bg-amber-600",
    textColor: "text-white",
    icon: Server,
    title: "SCALABLE API,\nSYSTEM ARCHITECTURE",
    hoverTransform: "hover:-rotate-2 hover:scale-105",
  },
  {
    bgColor: "bg-green-600",
    textColor: "text-black",
    icon: Database,
    title: "ASP.NET, POSTGRES,\nREDIS, DOCKER",
    hoverTransform: "hover:rotate-2 hover:scale-105",
  },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050505] px-6 font-sans text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5D43]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-18 md:grid-cols-[2fr_3fr]">
        {/* LEFT SIDE */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(255,93,67,0.12)]">

            {/* Image */}
            <div className="group relative mb-8 aspect-4/5 overflow-hidden rounded-3xl bg-zinc-100">
              <Image
                src="/images/profile.jpg"
                alt="Trung Nam"
                loading="eager"
                width={400}
                height={500}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
            </div>

            {/* Name */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-3xl font-black tracking-tight text-black">
                Tang Ho Trung Nam
              </h2>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
                <Flame
                  className="h-5 w-5 text-[#FF5D43]"
                  fill="#FF5D43"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
              A Software Engineer who has developed scalable and reliable backend systems.
            </p>

            {/* Icons */}
            <div className="mt-8 flex gap-5 text-zinc-400">
              <Globe className="h-5 w-5 cursor-pointer hover:text-[#FF5D43] transition-colors" />
              <Terminal className="h-5 w-5 cursor-pointer hover:text-[#FF5D43] transition-colors" />
              <Mail className="h-5 w-5 cursor-pointer hover:text-[#FF5D43] transition-colors" />
              <MessageSquare className="h-5 w-5 cursor-pointer hover:text-[#FF5D43] transition-colors" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">

          {/* Heading */}
          <div>
            <h1 className="bg-linear-to-r from-white to-zinc-400 bg-clip-text pb-2 text-5xl font-black tracking-tight text-transparent md:text-7xl">
              SOFTWARE
            </h1>

            <h1 className="text-5xl font-black tracking-tight text-zinc-700 md:text-7xl">
              ENGINEER
            </h1>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-xl">
            Passionate about building scalable and efficient backend systems.
            Specialized in designing APIs, optimizing databases, and developing
            reliable server-side applications.
          </p>

          {/* Stats */}
          <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-6">

            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl font-black md:text-5xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-[10px] font-bold tracking-widest text-zinc-500 uppercase md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

          {/* Cards */}
          <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">

            {projectCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} ${card.textColor} ${card.hoverTransform}
                  group flex aspect-3/2 flex-col justify-between rounded-3xl p-7 shadow-lg transition-all duration-300`}
              >

                <div className="flex flex-col gap-5">
                  <card.icon className="h-9 w-9 opacity-80" />

                  <p className="text-base font-bold leading-snug whitespace-pre-line md:text-lg">
                    {card.title}
                  </p>
                </div>

                <div className="flex justify-end">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-current transition-colors duration-300
                    ${
                      card.textColor === "text-black"
                        ? "hover:bg-black hover:text-[#C6FF4D]"
                        : "hover:bg-white hover:text-[#FF5D43]"
                    }`}
                  >
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}