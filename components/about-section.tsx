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
              I'm a fullstack and mobile engineer who enjoys turning ideas into fast, usable products. I focus on React,
              Next.js, and React Native, and I care a lot about clean UI, smooth interactions, and code that is easy to
              grow with a team.
            </p>
            <p>
              I like working closely with product teams, founders, and designers to ship features end‑to‑end, from
              validating the idea, to building the experience, to iterating from real user feedback. Right now, I'm
              looking for teams where I can own meaningful projects and help ship production‑ready web and mobile apps.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
