"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto xl:max-w-6xl shadow max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 shad"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="space-y-4 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p>
              My journey into software development started with a simple curiosity, I wanted to understand how the apps I loved actually worked. That curiosity quickly grew into a passion for creating mobile and web experiences that feels useful, and genuinely enjoyable to use.
            </p>
            <p>
              Over time, I’ve focused on frontend and mobile development, working mainly with React, Next and React Native to build interfaces that are fast, intuitive, and visually polished.
            </p>
            <p>
              I enjoy bringing ideas to life, from designing smooth, user-friendly interfaces to building scalable solutions that perform in the real world. With practical experience in Firebase and mid knowledge of Node.js, I’m able to connect the frontend and backend to deliver complete, well-structured applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
