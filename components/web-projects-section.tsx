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
    <div className="flex flex-col items-center w-full h-full gap-4 sm:gap-5">
      {/* Image / mockup card */}
      <div className="relative w-full rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-muted/40 via-background to-muted/10 shadow-xl border border-primary/10">
        <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-xl overflow-hidden bg-background">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            priority={true}
            className="object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Details card */}
      <div className="relative w-full glass-strong rounded-2xl p-4 sm:p-5 shadow space-y-3 sm:space-y-4 flex flex-col flex-grow border border-border/50">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground text-center">{project.title}</h3>
        <div className="flex-grow flex items-start justify-center min-h-[70px] sm:min-h-[80px] lg:min-h-[90px]">
          <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm text-center line-clamp-4">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center flex-shrink-0 pt-1">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 pt-2 flex-shrink-0">
          <Button
            size="sm"
            className="gap-2 w-full text-xs sm:text-sm relative z-20 h-9"
            variant="default"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(project);
            }}
            style={{ pointerEvents: "auto" }}
          >
            <Images className="w-3 h-3" />
            View Screens
          </Button>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-8 px-3 text-xs font-medium transition-colors border border-input bg-transparent hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer glass relative z-20"
            >
              <ExternalLink className="w-3 h-3" />
              Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-8 px-3 text-xs font-medium transition-colors border border-input bg-transparent hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer glass relative z-20"
            >
              <Github className="w-3 h-3" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <section id="projects" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Web Projects
          </motion.h2>

          <ProjectCarousel className="min-h-[550px]" itemsVisible={3}>
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
