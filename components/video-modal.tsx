"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  videoType: "youtube" | "mp4"
  projectTitle: string
  audioUrl?: string
}

export function VideoModal({ isOpen, onClose, videoUrl, videoType, projectTitle, audioUrl }: VideoModalProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      // stop audio when modal closes
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
    return () => {
      document.body.style.overflow = "unset"
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleVideoPlay = () => {
    if (videoType === "mp4" && audioUrl && audioRef.current) {
      audioRef.current
        .play()
        .catch(() => {
          // autoplay might be blocked; ignore
        })
    }
  }

  const handleVideoPause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

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
            role="dialog"
            aria-modal="true"
            aria-label={`${projectTitle} demo video`}
          >
            <div className="relative w-full max-w-5xl glass-strong rounded-2xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
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

              {/* Video container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-black"
              >
                {videoType === "youtube" ? (
                  <iframe
                    src={videoUrl}
                    title={projectTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    src={videoUrl}
                    controls
                    className="w-full h-full"
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoPause}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </motion.div>

              {audioUrl && videoType === "mp4" && (
                <audio ref={audioRef} src={audioUrl} loop className="hidden" />
              )}

              {/* Description */}
              <p className="text-center text-muted-foreground mt-4">Watch the full demo of {projectTitle}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
