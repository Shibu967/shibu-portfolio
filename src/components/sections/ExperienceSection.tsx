// ExperienceSection.tsx — Professional Experience
//
// Reads strictly from src/data/experience.ts.
// Designed as a clean vertical timeline.

import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { Calendar, MapPin, Building2 } from 'lucide-react'

const headerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 px-4 bg-[#0a0f1c]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariant}
        >
          <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-3">
            Career Journey
          </p>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]"
          >
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#1e293b] ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className="relative pl-8 sm:pl-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={itemVariant}
            >
              {/* Timeline Node/Dot */}
              <div
                className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-[#8b5cf6] ring-4 ring-[#0a0f1c]"
                aria-hidden="true"
              />

              {/* Role Header */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#f1f5f9] mb-1">
                  {exp.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#94a3b8] font-medium">
                  <span className="flex items-center gap-1.5 text-[#e2e8f0]">
                    <Building2 size={16} className="text-[#8b5cf6]" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {exp.duration}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 mb-6">
                {exp.responsibilities.map((task, i) => (
                  <li key={i} className="text-[#94a3b8] text-base leading-relaxed flex items-start">
                    <span className="mr-3 text-[#8b5cf6] mt-1.5 text-xs">▹</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium text-[#c4b5fd] bg-[#8b5cf6]/10 rounded border border-[#8b5cf6]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ExperienceSection
