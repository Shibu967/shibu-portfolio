// App.tsx — root component.
// Phase 12: Added Contact section.

import { useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import SnapshotSection from './components/sections/SnapshotSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import EngineeringApproach from './components/sections/EngineeringApproach'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import DSASection from './components/sections/DSASection'
import GitHubSection from './components/sections/GitHubSection'
import ContactSection from './components/sections/ContactSection'
import CaseStudy from './components/sections/CaseStudy'

function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/')

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.replace('#', '') || '/')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Render Case Study if the route matches
  if (route.startsWith('/projects/')) {
    // Expected route format: /projects/:id
    const projectId = route.replace('/projects/', '')
    return (
      <Layout>
        <CaseStudy projectId={projectId} />
      </Layout>
    )
  }

  // Render main portfolio
  return (
    <Layout>
      <HeroSection />
      
      {/* 
        A subtle divider between Hero and the content below.
        Keeps sections visually distinct without heavy borders.
      */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1e293b] to-transparent opacity-50" />
      </div>

      <SnapshotSection />
      <AboutSection />
      
      {/* Subtle divider before Skills */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1e293b] to-transparent opacity-30" />
      </div>
      
      <SkillsSection />
      
      <EngineeringApproach />

      {/* Experience has its own subtle background color in the component, no divider needed */}
      <ExperienceSection />
      
      <ProjectsSection />
      
      <DSASection />
      
      {/* GitHub section */}
      <GitHubSection />
      
      {/* Contact section */}
      <ContactSection />
      
      {/* Phase 13+: Final Polish */}
    </Layout>
  )
}

export default App
