// GitHubSection.tsx — Links to open source / GitHub profile.
//
// Reads strictly from src/data/profile.ts.
// Does not invent GitHub statistics, follower counts, or commit counts.
// Provides a clean, professional CTA to view code.

import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { Github, ExternalLink, GitBranch, TerminalSquare } from 'lucide-react'

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function GitHubSection() {
  if (!profile.github) return null

  // Extract username from URL for a cleaner display, safely handling trailing slashes
  const githubUsername = profile.github.replace(/\/$/, '').split('/').pop() || 'GitHub'

  return (
    <section id="github" aria-labelledby="github-heading" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="p-8 sm:p-12 rounded-2xl bg-[#0f172a] border border-[#1e293b] flex flex-col items-center text-center relative overflow-hidden group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
        >
          {/* Subtle background graphic */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500">
            <Github size={200} />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-6 mx-auto">
              <Github size={32} className="text-[#8b5cf6]" />
            </div>
            
            <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-3">
              Open Source
            </p>
            <h2
              id="github-heading"
              className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4"
            >
              Explore My Code
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-xl mx-auto mb-10">
              I actively maintain and contribute to repositories on GitHub. View my latest project commits, algorithmic problem-solving in PHP, and open-source contributions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f1f5f9] hover:bg-white text-[#0f172a] font-semibold rounded-lg transition-colors"
              >
                <Github size={18} />
                <span>@{githubUsername}</span>
                <ExternalLink size={16} className="ml-1 opacity-70" />
              </a>
              
              {/* Decorative data points that don't fabricate stats */}
              <div className="flex items-center gap-6 text-sm font-medium text-[#64748b]">
                <div className="flex items-center gap-2">
                  <GitBranch size={16} />
                  <span>Public Repositories</span>
                </div>
                <div className="flex items-center gap-2">
                  <TerminalSquare size={16} />
                  <span>Code Contributions</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubSection
