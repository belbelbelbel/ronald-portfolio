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
      className="flex flex-col items-center w-full"
    >
      {/* Phone mockup */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.05, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-56 sm:w-64 h-[380px] sm:h-[440px] glass-strong rounded-[1rem] p-3 shadow-md">
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-background">
            <Image src={app.image || "/placeholder.svg"} alt={app.title} fill priority={true} className="object-cover" />
          </div>
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-background rounded-b-2xl" />
        </div>
        {/* Floating icon */}
        <motion.div
          className="absolute -top-4 -right-4 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Smartphone className="w-7 h-7 text-primary-foreground" />
        </motion.div>
      </motion.div>

      {/* App details */}
      <div className="glass-strong rounded-2xl p-6 w-full shadow space-y-4">
        <h3 className="text-xl font-bold text-foreground text-center">{app.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-center text-sm">{app.description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {app.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <Button className="w-full gap-2 text-sm" onClick={() => setSelectedApp(app)}>
          <Play className="w-4 h-4" />
          Watch Demo
        </Button>
        <Button
          className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90 cursor-pointer text-sm"
          variant="outline"
          onClick={() => window.open(app.githubUrl, "_blank")}
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </Button>
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

          <ProjectCarousel className="min-h-[700px]" itemsVisible={3}>
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
