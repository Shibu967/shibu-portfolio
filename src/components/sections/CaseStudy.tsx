// CaseStudy.tsx — Displays a high-level case study for a project.
//
// Reads from src/data/projects.ts. 
// Presents a clean, technical view of the project's context, solution, and highlights.
// Ensures no proprietary info is exposed (only uses provided high-level data).

import { motion } from 'framer-motion'
import { ArrowLeft, Server, Activity, Briefcase, CheckCircle2 } from 'lucide-react'
import { projects } from '../../data/projects'
import { useEffect } from 'react'

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

interface CaseStudyProps {
  projectId: string
}

function CaseStudy({ projectId }: CaseStudyProps) {
  // Scroll to top when loading the case study
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="py-32 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4">Project Not Found</h2>
        <a href="#/" className="text-[#8b5cf6] hover:text-[#c4b5fd] inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Return to Portfolio
        </a>
      </div>
    )
  }

  return (
    <motion.article 
      className="py-12 sm:py-20 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation / Back */}
        <motion.div variants={itemVariant} className="mb-12">
          <a 
            href="#/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] transition-colors bg-[#0f172a] border border-[#1e293b] px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </a>
        </motion.div>

        {/* Header */}
        <motion.div variants={itemVariant} className="mb-12 border-b border-[#1e293b] pb-10">
          <div className="flex items-center gap-3 mb-4">
            <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase">
              Case Study
            </p>
            {project.status === 'production' && (
              <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                <Activity size={12} className="animate-pulse" />
                Production
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#f1f5f9] leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#94a3b8] leading-relaxed">
            {project.summary}
          </p>
        </motion.div>

        {/* Grid for Tech Stack & Context */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Main Content (Context & Solution) */}
          <motion.div variants={itemVariant} className="md:col-span-8 space-y-10">
            {project.problem && (
              <section>
                <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-[#8b5cf6]" />
                  Business Context & Problem
                </h2>
                <p className="text-[#94a3b8] leading-relaxed text-lg">
                  {project.problem}
                </p>
              </section>
            )}

            {project.solution && (
              <section>
                <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4 flex items-center gap-2">
                  <Server size={20} className="text-[#8b5cf6]" />
                  Technical Solution
                </h2>
                <p className="text-[#94a3b8] leading-relaxed text-lg">
                  {project.solution}
                </p>
              </section>
            )}
          </motion.div>

          {/* Sidebar (Technologies) */}
          <motion.div variants={itemVariant} className="md:col-span-4">
            <div className="p-6 rounded-xl bg-[#0f172a] border border-[#1e293b] sticky top-24">
              <h3 className="text-sm font-semibold text-[#f1f5f9] mb-4 uppercase tracking-wider">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1.5 text-xs font-mono font-medium text-[#c4b5fd] bg-[#8b5cf6]/10 rounded border border-[#8b5cf6]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Engineering Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <motion.div variants={itemVariant} className="mb-12">
            <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#8b5cf6]" />
              Engineering Highlights
            </h2>
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 sm:p-8">
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-[#94a3b8] text-lg leading-relaxed">
                    <span className="mr-3 text-[#8b5cf6] mt-1.5 text-sm font-bold">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Bottom Navigation */}
        <motion.div variants={itemVariant} className="pt-10 border-t border-[#1e293b] text-center">
          <a 
            href="#/" 
            className="inline-flex items-center gap-2 text-[#8b5cf6] hover:text-[#c4b5fd] font-medium transition-colors"
          >
            <ArrowLeft size={16} /> Return to Portfolio
          </a>
        </motion.div>

      </div>
    </motion.article>
  )
}

export default CaseStudy
