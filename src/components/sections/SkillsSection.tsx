// SkillsSection.tsx — technical skills grid.
//
// Reads from src/data/skills.ts. Groups are mapped into cards.
// Displays skills as simple text pills — no fake progress bars,
// no arbitrary proficiency scores. Clean, fast, recruiter-friendly.

import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'

// Fade-up variants for stagger animations
const headerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariant}
        >
          <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-3">
            Technical Skills
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]"
          >
            Technologies & Architecture
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.label}
              variants={cardVariant}
              className="p-6 rounded-xl bg-[#0f172a] border border-[#1e293b] hover:border-[#334155] transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-4 flex items-center gap-2">
                {/* A tiny purple accent bar for visual hierarchy */}
                <span className="w-1 h-4 rounded-full bg-[#8b5cf6]" aria-hidden="true" />
                {category.label}
              </h3>
              
              <ul className="flex flex-wrap gap-2" aria-label={`Skills for ${category.label}`}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-[#94a3b8] bg-[#020617] border border-[#1e293b] rounded-md"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default SkillsSection
