// DSASection.tsx — Data Structures & Algorithms Progress
//
// Reads strictly from src/data/dsa.ts.
// UI is fully data-driven. Updating dsa.ts automatically updates this component.
// No gamification, no artificial progress bars, just clean technical presentation.

import { motion } from 'framer-motion'
import { getDSASummary } from '../../data/dsa'
import { Code2, Terminal, CheckCircle2, Target } from 'lucide-react'

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function DSASection() {
  const summary = getDSASummary()
  
  if (!summary) return null

  return (
    <section id="dsa" aria-labelledby="dsa-heading" className="py-20 px-4 bg-[#0a0f1c]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
        >
          <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Terminal size={14} />
            Continuous Learning
          </p>
          <h2
            id="dsa-heading"
            className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]"
          >
            60-Day DSA Challenge
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto text-lg leading-relaxed">
            Strengthening core computer science fundamentals. Focused on PHP algorithmic problem solving, time/space complexity analysis, and scalable design patterns.
          </p>
        </motion.div>

        {/* Data-Driven Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
        >
          {/* Status Card: Current Topic */}
          <div className="md:col-span-2 p-6 rounded-xl bg-[#0f172a] border border-[#1e293b]">
            <h3 className="text-sm font-semibold text-[#f1f5f9] mb-4 flex items-center gap-2 uppercase tracking-wider">
              <Target size={16} className="text-[#8b5cf6]" />
              Current Focus
            </h3>
            
            {summary.currentTopic ? (
              <div>
                <p className="font-mono text-xs text-[#c4b5fd] mb-2">
                  DAY {summary.currentTopic.day} OF {summary.totalDays}
                </p>
                <p className="text-2xl font-bold text-[#f1f5f9] leading-tight">
                  {summary.currentTopic.topic}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-[#94a3b8] uppercase tracking-wider font-medium">In Progress</span>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-2xl font-bold text-[#f1f5f9] leading-tight">
                  Challenge Completed
                </p>
              </div>
            )}
          </div>

          {/* Stats Card: Problems Solved */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-[#1e293b] flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-[#f1f5f9] mb-4 flex items-center gap-2 uppercase tracking-wider">
              <Code2 size={16} className="text-[#8b5cf6]" />
              Problems Solved
            </h3>
            <p className="text-5xl font-bold text-[#f1f5f9] font-mono mb-2">
              {summary.totalProblemsSolved}
            </p>
            <p className="text-sm text-[#94a3b8]">Across Array, String, and Pattern contexts</p>
          </div>

          {/* Stats Card: Progress */}
          <div className="md:col-span-3 p-6 rounded-xl bg-[#0f172a] border border-[#1e293b] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-[#8b5cf6]" />
              <div>
                <p className="font-bold text-[#f1f5f9]">Journey Progress</p>
                <p className="text-sm text-[#94a3b8]">{summary.completedDays} days completed out of {summary.totalDays}</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-[#f1f5f9] font-mono">
              {summary.progressPercent}%
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default DSASection
