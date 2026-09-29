// ProjectsSection.tsx — Featured Projects
//
// Reads strictly from src/data/projects.ts.
// Designed to highlight backend and architecture work.

import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { Server, ExternalLink, Activity } from 'lucide-react'

const headerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariant}
        >
          <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-3">
            Featured Work
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]"
          >
            Engineering Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative p-6 sm:p-8 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-[#8b5cf6]/40 transition-colors duration-300 flex flex-col h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={cardVariant}
              transition={{ delay: index * 0.1 }}
            >
              {/* Header: Title and Status */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-[#f1f5f9] group-hover:text-[#c4b5fd] transition-colors">
                  {project.title}
                </h3>
                {project.status === 'production' && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20 whitespace-nowrap">
                    <Activity size={12} className="animate-pulse" />
                    Production
                  </span>
                )}
              </div>

              {/* Summary */}
              <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* Highlights (limited to top 3 for scannability on the card) */}
              <div className="mb-8 flex-grow">
                <h4 className="text-sm font-semibold text-[#f1f5f9] mb-3 flex items-center gap-2">
                  <Server size={16} className="text-[#8b5cf6]" />
                  Engineering Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="text-[#94a3b8] text-sm flex items-start">
                      <span className="mr-2 text-[#8b5cf6] mt-1">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                  {project.highlights.length > 3 && (
                    <li className="text-[#64748b] text-sm italic ml-5">
                      + {project.highlights.length - 3} more technical achievements
                    </li>
                  )}
                </ul>
              </div>

              {/* Footer: Tech Stack and Case Study Link */}
              <div className="mt-auto pt-6 border-t border-[#1e293b] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-[#cbd5e1]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-mono text-[#64748b]">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {project.caseStudyRoute && (
                  <a href={`#${project.caseStudyRoute}`} className="flex items-center gap-2 text-sm font-medium text-[#8b5cf6] hover:text-[#c4b5fd] transition-colors">
                    <span>Read Case Study</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection
