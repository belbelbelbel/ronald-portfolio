"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ImageGalleryModal } from "./image-gallery-modal"
import { ProjectCarousel } from "@/components/ui/project-carousel"
import { webProjects } from "@/lib/project-data"

export function WebProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<(typeof webProjects)[0] | null>(null)

  const ProjectCard = ({ project }: { project: typeof webProjects[0] }) => (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      animate={isInView ? { opacity: 1, x: 0, transition: { duration: 0.5 } } : {}}
      whileHover={{ y: -5, rotateY: 0 }}
      className="glass-strong rounded-2xl overflow-hidden shadow hover:shadow transition-all w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          priority={true}
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground text-center">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-center">{project.description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <Button
            size="sm"
            className="gap-2 w-full"
            variant="default"
            onClick={() => setSelectedProject(project)}
          >
            <Images className="w-4 h-4" />
            View Screens
          </Button>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="gap-2 flex-1 glass bg-transparent"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
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
      </div>
    </motion.div>
  )

  return (
    <>
      <section id="projects" className="py-24 px-6" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Web Projects
          </motion.h2>

          <ProjectCarousel className="min-h-[600px]" itemsVisible={3}>
            {webProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </ProjectCarousel>
        </div>
      </section>

      <ImageGalleryModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        images={selectedProject?.screens || []}
        projectTitle={selectedProject?.title || ""}
      />
    </>
  )
}
