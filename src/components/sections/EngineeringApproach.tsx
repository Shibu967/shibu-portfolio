// EngineeringApproach.tsx — Highlights backend engineering philosophy and practices.
//
// Content is drawn strictly from resume highlights:
// - DB Optimization (N+1, Eager Loading)
// - API & Security (Sanctum, Spatie, RBAC)
// - Asynchronous processing (Laravel Jobs, Queues)
// - Automation & Data Pipelines (Python, ETL, Pandas, Scraping)

import { motion } from 'framer-motion'
import { Database, Lock, Zap, Workflow } from 'lucide-react'

const headerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const approaches = [
  {
    icon: Database,
    title: 'Performance & Database Optimisation',
    description: 'I prioritize efficient data retrieval. My approach involves resolving N+1 query bottlenecks, implementing strategic eager loading, and utilising server-side DataTables with AJAX for large datasets. In previous projects, this methodology achieved documented load-time reductions of up to 35%.',
  },
  {
    icon: Lock,
    title: 'API Design & Security',
    description: 'Building robust, secure RESTful APIs is my core focus. I design systems with strict Role-Based Access Control (RBAC) using Laravel Sanctum and Spatie Permission. This ensures granular security across multi-tier applications, from Super Admins and Managers to Telecallers and external dealers.',
  },
  {
    icon: Zap,
    title: 'Asynchronous Processing',
    description: 'For operations that scale, I rely on queue-based architectures. By leveraging Laravel Jobs and queues, I decouple heavy tasks — such as processing 1000+ daily push notifications via OneSignal or handling complex CRM transitions — ensuring the primary API response remains fast and reliable.',
  },
  {
    icon: Workflow,
    title: 'Python ETL & Data Automation',
    description: 'Beyond PHP, I build Python ETL pipelines (Pandas, zipfile, os) to extract, clean, and transform large-scale unstructured records. I also automate web data extraction (BeautifulSoup, Selenium) to seamlessly integrate external datasets into primary CRM databases.',
  },
]

function EngineeringApproach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="py-20 px-4">
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
            How I Build
          </p>
          <h2
            id="approach-heading"
            className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]"
          >
            Engineering Approach
          </h2>
        </motion.div>

        {/* Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="p-8 rounded-2xl bg-[#0f172a] border border-[#1e293b] flex flex-col gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={cardVariant}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-2">
                  <Icon size={24} className="text-[#8b5cf6]" />
                </div>
                <h3 className="text-xl font-bold text-[#f1f5f9]">
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] leading-relaxed text-base">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default EngineeringApproach
