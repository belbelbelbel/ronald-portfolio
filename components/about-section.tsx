"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto xl:max-w-5xl shadow max-w-4xl">
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
              My journey into software development began with a curiosity about how apps work and a desire to create
              meaningful digital experiences. Over the years, I've honed my skills in frontend and mobile development,
              specializing in React and React Native ecosystems.
            </p>
            <p>
              I'm passionate about building intuitive, performant applications that solve real-world problems. Whether
              it's crafting pixel-perfect user interfaces or architecting scalable mobile solutions, I bring attention
              to detail and a user-first mindset to every project.
            </p>
            <p>
              With expertise in Firebase and Node.js, I bridge the gap between frontend and backend, creating full-stack
              solutions that are both beautiful and functional. I thrive in collaborative environments and love turning
              complex challenges into elegant, accessible experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
