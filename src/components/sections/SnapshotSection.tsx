// SnapshotSection.tsx — concise professional profile in card form.
//
// All values are sourced strictly from the resume:
//   - "3+ years" / "5+ production applications" from the resume summary
//   - Laravel, REST, SQL, Python from documented experience
//
// No fake percentage bars. No invented metrics.
// Cards animate in as they scroll into view (once, no repeat).

import { motion } from 'framer-motion'
import { Briefcase, Monitor, Code2, Globe, Database, Terminal } from 'lucide-react'

// -------------------------------------------------------
// Snapshot data — each item is verified against the resume.
// Value: short identifier (number or tech label).
// Label: what the value represents.
// Detail: one-line elaboration.
// -------------------------------------------------------
const snapshotItems = [
  {
    icon:   Briefcase,
    value:  '3+',
    label:  'Years Experience',
    detail: 'Professional PHP / Laravel development',
  },
  {
    icon:   Monitor,
    value:  '5+',
    label:  'Production Applications',
    detail: 'Live systems designed and delivered end-to-end',
  },
  {
    icon:   Code2,
    value:  'Laravel',
    label:  'Core Framework',
    detail: 'REST APIs, queues, authentication, RBAC, policies',
  },
  {
    icon:   Globe,
    value:  'REST',
    label:  'API Architecture',
    detail: 'Sanctum, Passport, multi-role access control',
  },
  {
    icon:   Database,
    value:  'SQL',
    label:  'Database Optimisation',
    detail: 'Eager loading, indexing, N+1 elimination',
  },
  {
    icon:   Terminal,
    value:  'Python',
    label:  'Automation & ETL',
    detail: 'ETL pipelines, web scraping, data processing',
  },
]

// Section header fades up once when it enters the viewport.
const headerVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SnapshotSection() {
  return (
    <section
      id="snapshot"
      aria-labelledby="snapshot-heading"
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariant}
        >
          <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-3">
            Engineering Snapshot
          </p>
          <h2
            id="snapshot-heading"
            className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]"
          >
            What I bring to the table
          </h2>
        </motion.div>

        {/* Cards grid — 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {snapshotItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="p-6 rounded-xl bg-[#0f172a] border border-[#1e293b] hover:border-[#8b5cf6]/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
              >
                <div className="flex items-start gap-4">

                  {/* Icon badge */}
                  <div className="p-2.5 bg-[#8b5cf6]/10 rounded-lg flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-[#8b5cf6]" />
                  </div>

                  {/* Text content */}
                  <div>
                    <p className="text-2xl font-bold text-[#f1f5f9] font-mono leading-none mb-1">
                      {item.value}
                    </p>
                    <p className="text-sm font-semibold text-[#f1f5f9]">
                      {item.label}
                    </p>
                    <p className="text-xs text-[#94a3b8] mt-1.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default SnapshotSection
