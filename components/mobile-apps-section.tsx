"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const mobileApps = [
  {
    title: "Collaborative Expense Tracker",
    description:
      "A React Native app for tracking shared expenses with friends and family, featuring real-time sync and split calculations.",
    image: "/expense-tracker-mobile-app.jpg",
    tech: ["React Native", "Firebase", "Expo"],
    githubUrl: "https://github.com/ronaldbelonwu/expense-tracker",
  },
  {
    title: "Lazio",
    description:
      "A social networking app with Firebase authentication and real-time messaging, built with Expo for cross-platform deployment.",
    image: "/social-media-mobile-app.jpg",
    tech: ["React Native", "Firebase Auth", "Expo"],
    githubUrl: "https://github.com/ronaldbelonwu/lazio",
  },
  {
    title: "QuickWash",
    description:
      "A service booking application for laundry services with scheduling, payment integration, and order tracking.",
    image: "/service-booking-mobile-app.jpg",
    tech: ["React Native", "Node.js", "Stripe"],
    githubUrl: "https://github.com/ronaldbelonwu/quickwash",
  },
]

export function MobileAppsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mobile-apps" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Mobile Apps
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {mobileApps.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Phone mockup */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-64 h-[500px] glass-strong rounded-[3rem] p-3 shadow">
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-background">
                    <Image src={app.image || "/placeholder.svg"} alt={app.title} fill className="object-cover" />
                  </div>
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl" />
                </div>
                {/* Floating icon */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Smartphone className="w-8 h-8 text-primary-foreground" />
                </motion.div>
              </motion.div>

              {/* App details */}
              <div className="glass-strong rounded-2xl p-6 w-full shadow space-y-4">
                <h3 className="text-2xl font-bold text-foreground text-center">{app.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{app.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {app.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  className="w-full gap-2 bg-transparent"
                  variant="outline"
                  onClick={() => window.open(app.githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
