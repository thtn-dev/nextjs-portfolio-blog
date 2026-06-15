"use client"

import { useForm } from "react-hook-form"
import { Badge } from "lucide-react"

type FormData = {
  name: string
  email: string
  project: string
}

const SocialButton = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
  <a href="#" className="group relative overflow-hidden flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-200 text-zinc-900 hover:bg-white transition-colors" aria-label={label}>
    <Icon className="absolute w-5 h-5 transition-all duration-300 group-hover:translate-y-full group-hover:rotate-[360deg] group-hover:opacity-0" />
    <Icon className="absolute w-5 h-5 -translate-y-full -rotate-[360deg] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100" />
  </a>
)

export function ContactSection() {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    alert("Thành công!")
    reset()
  }

  return (
    <section id="contact" className="w-full py-24 bg-[#000000] text-white flex justify-center font-sans">
      <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left side */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-6xl font-bold tracking-tight mb-4 text-white">Let&apos;s talk.</h2>
            <p className="text-zinc-400 text-lg max-w-sm">
              Have a project or need help? Fill out the form, and we&apos;ll get back to you soon.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            <SocialButton icon={Badge} label="X (Twitter)" />
            <SocialButton icon={Badge} label="Instagram" />
            <SocialButton icon={Badge} label="LinkedIn" />
            <SocialButton icon={Badge} label="YouTube" />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-[#111111] p-8 rounded-2xl border border-[#222222]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#0a0a0a] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                {...register("name", { required: true })}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#0a0a0a] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                {...register("email", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="project" className="text-sm font-medium text-zinc-400">Your Project</label>
              <textarea
                id="project"
                placeholder="Tell us about your project"
                rows={4}
                className="w-full bg-[#0a0a0a] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                {...register("project", { required: true })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-zinc-100 text-black font-semibold rounded-xl px-4 py-3 mt-2 hover:bg-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
