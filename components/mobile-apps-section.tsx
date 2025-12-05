"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Smartphone, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { mobileApps } from "@/lib/project-data"
import { VideoModal } from "./video-modal"
import { ProjectCarousel } from "@/components/ui/project-carousel"

export function MobileAppsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "100px" })
  const [selectedApp, setSelectedApp] = useState<(typeof mobileApps)[0] | null>(null)

  const AppCard = ({ app }: { app: typeof mobileApps[0] }) => (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="flex flex-col items-center w-full h-full gap-4 sm:gap-5"
    >
      {/* Image card (like web layout) */}
      <div className="relative w-full rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-muted/40 via-background to-muted/10 shadow-xl border border-primary/10">
        <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-xl overflow-hidden bg-background">
          <Image
            src={app.image || "/placeholder.svg"}
            alt={app.title}
            fill
            priority={true}
            className="object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* App details card */}
      <div className="relative w-full glass-strong rounded-2xl p-4 sm:p-5 shadow space-y-3 sm:space-y-4 flex flex-col flex-grow border border-border/50">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground text-center">{app.title}</h3>
        <div className="flex-grow flex items-start justify-center min-h-[70px] sm:min-h-[80px] lg:min-h-[90px]">
          <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm text-center">
            {app.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center flex-shrink-0 pt-1">
          {app.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-3 pt-2 flex-shrink-0">
          <Button className="w-1/2 gap-2 text-xs sm:text-sm h-9 relative z-10" onClick={() => setSelectedApp(app)}>
            <Play className="w-3 h-3" />
            Watch Demo
          </Button>
          <Button
            className="w-1/2 gap-2 bg-foreground text-background hover:bg-foreground/90 hover:text-background cursor-pointer text-xs sm:text-sm h-9 relative z-10"
            variant="outline"
            onClick={() => window.open(app.githubUrl, "_blank")}
          >
            <Github className="w-3 h-3" />
            View on GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
      <section id="mobile-apps" className="py-24 px-6 bg-muted/30" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Mobile Apps
          </motion.h2>

          <ProjectCarousel className="min-h-[550px]" itemsVisible={3}>
            {mobileApps.map((app) => (
              <AppCard key={app.title} app={app} />
            ))}
          </ProjectCarousel>
        </div>
      </section>

      <VideoModal
        isOpen={!!selectedApp}
        onClose={() => setSelectedApp(null)}
        videoUrl={selectedApp?.demoVideo.url || ""}
        videoType={selectedApp?.demoVideo.type || "youtube"}
        projectTitle={selectedApp?.title || ""}
      />
    </>
  )
}
