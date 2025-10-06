"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ImageGalleryModal } from "./image-gallery-modal"
import { webProjects } from "@/lib/project-data"

export function WebProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<(typeof webProjects)[0] | null>(null)

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 2 }}
                className="glass-strong rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-48 overflow-hidden">
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
            ))}
          </div>
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
