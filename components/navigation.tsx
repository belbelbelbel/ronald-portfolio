"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    // Small delay to allow menu close animation before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  const hamburgerVariants = {
    open: {
      rotate: 45,
      y: 6
    },
    closed: {
      rotate: 0,
      y: 0
    }
  }

  const hamburgerMiddleVariants = {
    open: {
      opacity: 0,
      x: -20
    },
    closed: {
      opacity: 1,
      x: 0
    }
  }

  const hamburgerBottomVariants = {
    open: {
      rotate: -45,
      y: -6
    },
    closed: {
      rotate: 0,
      y: 0
    }
  }

  const mobileMenuVariants = {
    closed: {
      x: "100%"
    },
    open: {
      x: "0%"
    }
  }

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong backdrop-blur shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-6 xl:max-w-6xl xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              className="text-xl font-bold text-foreground z-60 relative"
              whileHover={{ scale: 1.05 }}
            >
              RB
            </motion.a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <motion.button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              {/* Top line */}
              <motion.span
                className="w-6 h-0.5 bg-foreground block absolute"
                variants={hamburgerVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                style={{ y: -6 }}
              />
              {/* Middle line */}
              <motion.span
                className="w-6 h-0.5 bg-foreground block absolute"
                variants={hamburgerMiddleVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
              />
              {/* Bottom line */}
              <motion.span
                className="w-6 h-0.5 bg-foreground block absolute"
                variants={hamburgerBottomVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                style={{ y: 6 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] glass-strong backdrop-blur z-50 shadow-2xl"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full pt-16 px-8">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-muted/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
                <div className="flex flex-col space-y-8">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleMobileNavClick(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-muted-foreground transition-colors py-2"
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{
                        delay: 0.1 + i * 0.1,
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
                
                {/* Footer text in mobile menu */}
                <motion.div
                  className="mt-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-sm text-muted-foreground">
                    © 2024 Ronald Belonwu
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fullstack & Mobile Engineer
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
