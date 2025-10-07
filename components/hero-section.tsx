"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const handleDownloadCV = () => {
    // Trigger CV download
    const link = document.createElement("a")
    link.href = "/ronald-belonwu-cv.pdf"
    link.download = "Ronald-Belonwu-CV.pdf"
    link.click()
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center  justify-center pt-20 px-0">
      <div className="container max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Ronald Belonwu{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Fullstack & Mobile Engineer
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build modern web and mobile experiences using React.js,Next.js, React Native, and Firebase.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Rocket className="w-4 h-4" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadCV}
                className="gap-2 glass hover:glass-strong transition-all bg-transparent"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
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
              className="relative w-80 h-80 md:w-96 md:h-96"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 glass-strong rounded-3xl shadow-2xl overflow-hidden">
                <Image src="/software-engineer-portrait.png" alt="Ronald Belonwu" fill className="object-cover" priority />
              </div>
              {/* Floating decoration */}
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
