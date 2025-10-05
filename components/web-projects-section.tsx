"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "GOTE",
    description: "Gote is a modern online marketplace I built to bridge buyers and sellers. It features a clean marketing site and a functional dashboard for sellers, powered by Firebase and Next.js. The focus was on crafting a smooth, real-world user experience with sleek visuals and responsive UI",
    image: "/porfoliioimg2.png",
    tech: ["Next.js", "Tailwind", "Firebase"],
    liveUrl: "https://gote-marketplace.vercel.app/",
    githubUrl: "https://github.com/belbelbelbel/gote-marketplace",
  },
  {
    title: "NovaBoard",
    description:
      "NovaBoard is a concept SaaS project that visualizes real-world market analytics in a sleek, modern dashboard. I built it to demonstrate how data visualization, Firebase integration, and modern UI patterns can work together in a professional SaaS environment. It includes a marketing-style landing page, login flow, and animated insights dashboard.",
    image: "/potfolioimg3.png",
    tech: ["React", "Firebase", "Stripe"],
    liveUrl: "https://naijashine.example.com",
    githubUrl: "https://github.com/ronaldbelonwu/naijashine",
  },
  {
    title: "Monobudget Clone",
    description:
      "LeaveTrack is a company-focused leave management web app designed to simplify employee time-off processes. I built it using Node.js for the backend and Firebase for authentication and data management.The system lets admins approve, decline, or review leave requests while employees can easily apply for time off and monitor their leave status",
    image: "/potfolioimg4.png",
    tech: ["React", "Node.js", "Chart.js"],
    liveUrl: "https://monobudget.example.com",
    githubUrl: "https://github.com/ronaldbelonwu/monobudget",
  },
]

export function WebProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Web Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-strong rounded-2xl overflow-hidden shadow hover:shadow transition-all"
            >
              <div className="relative h-58 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="gap-2 flex-1" onClick={() => window.open(project.liveUrl, "_blank")}>
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 flex-1 glass bg-transparent"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
