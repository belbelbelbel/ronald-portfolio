"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCarouselProps {
  children: React.ReactNode[]
  className?: string
  itemsVisible?: number
}

export function ProjectCarousel({ children, className = "", itemsVisible = 3 }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasNavigated, setHasNavigated] = useState(false)
  const totalItems = children.length
  const showNavigation = totalItems > itemsVisible

  useEffect(() => {
    // Reset hasNavigated when currentIndex changes (except on initial load)
    if (currentIndex !== 0) {
      setHasNavigated(true)
    }
  }, [currentIndex])

  const goToPrevious = () => {
    setHasNavigated(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
  }

  const goToNext = () => {
    setHasNavigated(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
  }

  const goToItem = (index: number) => {
    setHasNavigated(true)
    setCurrentIndex(index)
  }

  // Get the currently visible items
  const getVisibleItems = () => {
    if (!showNavigation) {
      // Show all items if no navigation needed
      return children
    }
    
    const items = []
    for (let i = 0; i < itemsVisible; i++) {
      const index = (currentIndex + i) % totalItems
      items.push(children[index])
    }
    return items
  }

  const visibleItems = getVisibleItems()

  return (
    <div className={`relative ${className}`}>
      {/* Navigation Arrows - Only show if more than itemsVisible items */}
      {showNavigation && (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-12 lg:-left-20 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background/90 transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-12 lg:-right-20 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background/90 transition-all duration-200"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
            </Button>
          </div>
        </>
      )}
      <div className="relative overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={false}
          animate={{ x: 0 }}
          transition={
            hasNavigated && showNavigation
              ? {
                  type: "spring",
                  stiffness: 300,
                  damping: 40,
                }
              : { duration: 0 }
          }
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center px-2 sm:px-4"
        >
          {visibleItems.map((child, index) => (
            <motion.div
              key={showNavigation ? `${currentIndex}-${index}` : index}
              initial={hasNavigated && showNavigation ? { x: index === 0 ? 100  : (index === 0 ? -50 : 0), transition:{ duration: 1 } } : false}
              animate={{ x: 0}}
              transition={
                hasNavigated && showNavigation
                  ? {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }
                  : { duration: 0 }
              }
              className="w-full max-w-sm"
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {showNavigation && (
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToItem(index)}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                index >= currentIndex && index < currentIndex + itemsVisible
                  ? "bg-primary scale-110"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      )}


      {/* {showNavigation && (
        <div className="absolute top-4 right-4 z-10">
          <div className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border text-sm font-medium">
            {Math.min(currentIndex + 1, totalItems)}-{Math.min(currentIndex + itemsVisible, totalItems)} / {totalItems}
          </div>
        </div>
      )} */}
    </div>
  )
}