"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { WebProjectsSection } from "@/components/web-projects-section"
import { MobileAppsSection } from "@/components/mobile-apps-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WebProjectsSection />
      <MobileAppsSection /> 
      <ContactSection />
    </main>
  )
}
