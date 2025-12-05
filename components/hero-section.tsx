"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, Download, Rocket, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Ronald-Chiagozie-FlowCV-Resume-20251014.pdf"
    link.download = "/Ronald-Chiagozie-FlowCV-Resume-20251014.pdf"
    link.click()
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6"
    >
      <div className="container max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center md:text-left"
          >
            <div className="space-y-3">
              <motion.h1
                className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm Ronald Chiagozie
              </motion.h1>
            </div>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Fullstack & Mobile Engineer
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build modern web and mobile apps using React, Next.js, React Native, and Firebase, from clean UIs to production‑ready architecture.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow w-full sm:w-auto"
                >
                  {/* <Rocket className="w-4 h-4" /> */}
                  <Code className="w-4 h-4" />
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadCV}
                  className="gap-2 glass hover:glass-strong transition-all bg-transparent w-full sm:w-auto"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/belbelbelbel",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ronald-chiagozie-b6801628a/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:gronaldchia@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full hover:glass-strong transition-all hover:scale-110"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 glass-strong rounded-3xl shadow-2xl overflow-hidden">
                <Image src="/potfolioimg.jpeg" alt="Ronald Belonwu" fill className="object-cover" priority />
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
