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
         className="relative shadow h-auto px-2 sm:px-1 pt-4 sm:pt-6 mb-4 sm:mb-6"
        whileHover={{ scale: 1.01, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          priority={true}
          className="object-cover transition-transform duration-300 hover:scale-101"
        />
      </div>
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground text-center">{project.title}</h3>
        <div className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] flex items-start justify-center">
         <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm text-center line-clamp-4">{project.description}</p>
       </div>
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <Button
            size="sm"
            className="gap-2 w-full text-xs sm:text-sm"
            variant="default"
            onClick={() => setSelectedProject(project)}
          >
            <Images className="w-3 h-3 sm:w-4 sm:h-4" />
            View Screens
          </Button>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              size="sm"
              variant="outline"
              className="gap-2 flex-1 cursor-pointer glass bg-transparent relative z-10 text-xs sm:text-sm"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              Live Site
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="gap-2 flex-1 cursor-pointer glass bg-transparent relative z-10 text-xs sm:text-sm"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
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

          <ProjectCarousel className="min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]" itemsVisible={3}>
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
