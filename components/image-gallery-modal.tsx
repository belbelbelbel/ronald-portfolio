"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ImageGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  images: {
    url: string
    caption: string
  }[]
  projectTitle: string
}

export function ImageGalleryModal({ isOpen, onClose, images, projectTitle }: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "Escape") onClose()
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, currentIndex])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div className="relative w-full max-w-6xl glass-strong rounded-2xl p-6 md:p-8 shadow-2xl">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 rounded-full glass hover:bg-destructive/20"
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-balance">{projectTitle}</h3>

              {/* Image container */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-muted mb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[currentIndex].url || "/placeholder.svg"}
                      alt={images[currentIndex].caption}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full glass hover:bg-primary/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full glass hover:bg-primary/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>

              {/* Caption and counter */}
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">{images[currentIndex].caption}</p>
                <p className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>

              {/* Thumbnail navigation */}
              <div className="flex gap-2 justify-center mt-6 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                      index === currentIndex ? "ring-2 ring-primary scale-110" : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image src={image.url || "/placeholder.svg"} alt={image.caption} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
