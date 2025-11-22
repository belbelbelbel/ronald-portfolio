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
    <div className="relative shadow h-full px-2 sm:px-1 pt-4 sm:pt-6 mb-4 sm:mb-6 hover:scale-[1.01] transition-transform duration-300 flex flex-col glass-strong rounded-2xl overflow-hidden">
      <div className="relative h-58 sm:h-56 lg:h-72 overflow-hidden rounded-lg flex-shrink-0 mx-2 sm:mx-4">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          priority={true}
          className="object-cover transition-transform duration-300 hover:scale-101"
        />
      </div>
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground text-center">{project.title}</h3>
        <div className="flex-grow flex items-start justify-center min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]">
         <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm text-center line-clamp-4">{project.description}</p>
       </div>
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center flex-shrink-0">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-1 flex-shrink-0">
          <Button
            size="sm"
            className="gap-2 w-full text-xs relative z-20 h-8"
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
