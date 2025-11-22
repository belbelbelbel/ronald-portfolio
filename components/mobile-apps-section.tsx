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
      className="flex flex-col items-center w-full h-full relative"
    >
      {/* Phone mockup */}
      <motion.div
        className="relative mb-4 flex-shrink-0"
        whileHover={{ scale: 1.02, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-64 sm:w-72 md:w-80 h-[380px] sm:h-[440px] md:h-[400px] rounded-[1.5rem] p-3 shadow-2xl overflow-hidden bg-gradient-to-br from-muted/40 via-background to-muted/30 dark:from-muted/30 dark:via-background dark:to-muted/20 border-2 border-primary/20 dark:border-primary/30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
              backgroundPosition: '0 0',
              opacity: '0.2'
            }}
          />
          {/* Secondary larger dots */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              backgroundPosition: '9px 9px',
              opacity: '0.1'
            }}
          />
          {/* Dark mode pattern */}
          <div 
            className="absolute inset-0 dark:block hidden"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
              backgroundPosition: '0 0'
            }}
          />

          
          {/* Phone frame */}
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden ">
            <Image src={app.image || "/placeholder.svg"} alt={app.title} fill priority={true} className="object-cover" />
          </div>
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
        </div>
        {/* Floating icon */}
        <motion.div
          className="absolute -top-0 -right-3 w-10 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg z-20"
          // animate={{
          //   y: [0, -10, 0],
          // }}
          // transition={{
          //   duration: 2,
          //   repeat: Number.POSITIVE_INFINITY,
          //   ease: "easeInOut",
          // }}
        >
          <Smartphone className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </motion.div>

      <div className="relative rounded-2xl p-4 w-full shadow-xl space-y-3  flex flex-col flex-grow glass-strong border border-border/50">
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-foreground text-center flex-shrink-0 mb-2">{app.title}</h3>
          <div className="flex-grow flex items-start justify-center min-h-[50px]">
            <p className="text-muted-foreground leading-relaxed text-center text-xs sm:text-sm">{app.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5  justify-center flex-shrink-0 pt-8 pb-2">
            {app.tech.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-xl border-0 border-primary/20 backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2 flex-shrink-0 mt-2">
            <Button className="w-full gap-2 text-xs h-8 relative z-10" onClick={() => setSelectedApp(app)}>
              <Play className="w-3 h-3" />
              Watch Demo
            </Button>
            <Button
              className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90 hover:text-background cursor-pointer text-xs h-8 relative z-10"
              variant="outline"
              onClick={() => window.open(app.githubUrl, "_blank")}
            >
              <Github className="w-3 h-3" />
              View on GitHub
            </Button>
          </div>
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
