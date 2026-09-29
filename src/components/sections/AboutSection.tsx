// AboutSection.tsx — professional background and focus.
//
// Written from the perspective of an experienced engineer.
// No generic motivational fluff. Focuses on backend strength,
// API architecture, and solving real business problems.

import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

// Standard fade-up variant for text blocks
const fadeUpVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUpVariant}
            >
              <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-3">
                About Me
              </p>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] leading-tight"
              >
                Building reliable backend systems.
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-8 lg:pl-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="space-y-6 text-[#94a3b8] text-lg leading-relaxed max-w-3xl"
            >
              <motion.p variants={fadeUpVariant}>
                I am a {profile.role} with over 3 years of professional experience building scalable, production-ready web applications. My focus is entirely on the backend: designing robust RESTful APIs, optimizing database queries, and architecting complex business logic for systems like CRMs, Auction platforms, and Lead Management applications.
              </motion.p>
              
              <motion.p variants={fadeUpVariant}>
                Throughout my career, I've successfully engineered multi-stage workflow management systems, integrated real-time data sync using Firebase, and implemented secure, role-based access control (RBAC). Beyond PHP and Laravel, I write Python for ETL pipelines and automated web scraping — structuring unstructured data for seamless integration into core databases.
              </motion.p>
              
              <motion.p variants={fadeUpVariant}>
                I care deeply about performance. Whether it's resolving N+1 query bottlenecks, implementing eager loading, or configuring queue-based notification architectures (Laravel Jobs) that process thousands of jobs daily, I build systems that don't just work — they scale gracefully.
              </motion.p>

              <motion.p variants={fadeUpVariant}>
                Currently, I am actively sharpening my core computer science fundamentals through a structured Data Structures & Algorithms challenge, focusing on space/time complexity and optimization patterns. I believe that mastering the fundamentals is the most reliable path to writing exceptional software.
              </motion.p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
