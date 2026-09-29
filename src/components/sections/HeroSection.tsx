// HeroSection.tsx — the first thing a recruiter or hiring manager sees.
//
// Design goals:
//   - Communicate who, what, and why in under 5 seconds
//   - Clean hierarchy: label → name → tagline → tech → CTAs
//   - Staggered entrance animation (Framer Motion) for a premium first impression
//   - All content sourced from data files — nothing hardcoded
//
// Framer Motion is used here because entrance animation on the
// primary view genuinely improves first impression and readability.
// The animation is subtle: simple fade + slight upward movement.

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDownToLine, ArrowRight } from 'lucide-react'
import { profile } from '../../data/profile'
import { getDSASummary } from '../../data/dsa'

// -------------------------------------------------------
// Key technologies displayed as badge pills in the hero.
// This is a curated short-list, not the full skills list.
// All are verified against the resume.
// -------------------------------------------------------
const heroTechBadges = [
  'PHP',
  'Laravel',
  'REST APIs',
  'MySQL',
  'Python',
  'Docker',
]

// -------------------------------------------------------
// Framer Motion variants — defined once, reused per item.
// -------------------------------------------------------
const fadeUpVariant = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerParent = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
}

// -------------------------------------------------------
// Component
// -------------------------------------------------------
function HeroSection() {
  const dsa = getDSASummary()

  return (
    <section
      id="home"
      aria-label="Introduction"
      // min-h fills the viewport below the fixed navbar (4rem = 64px)
      className="relative flex items-center min-h-[calc(100vh-4rem)] px-4"
    >
      {/*
        Subtle radial glow behind the content — just enough to add
        depth without becoming a distraction. Single, low-opacity gradient.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/5 blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative max-w-6xl mx-auto w-full py-20 sm:py-28">
        <motion.div
          className="max-w-3xl"
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          {/* ── 1. Role label ── */}
          <motion.p
            variants={fadeUpVariant}
            className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-5"
          >
            PHP Laravel Developer
          </motion.p>

          {/* ── 2. Name — primary heading ── */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f1f5f9] leading-tight tracking-tight mb-5"
          >
            {profile.name}
          </motion.h1>

          {/* ── 3. Professional positioning ── */}
          <motion.p
            variants={fadeUpVariant}
            className="text-lg sm:text-xl text-[#94a3b8] leading-relaxed max-w-2xl mb-8"
          >
            {profile.tagline}
          </motion.p>

          {/* ── 4. Technology badges ── */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap gap-2 mb-6"
            aria-label="Core technologies"
          >
            {heroTechBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono font-medium text-[#94a3b8] bg-[#0f172a] border border-[#1e293b] rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* ── 5. DSA active learning badge ── */}
          {dsa.currentTopic && (
            <motion.div variants={fadeUpVariant} className="mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#a78bfa] bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full">
                {/* Pulsing dot communicates "live / active" without being loud */}
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse flex-shrink-0"
                />
                DSA Day {dsa.currentTopic.day} of {dsa.totalDays} · {dsa.currentTopic.topic}
              </span>
            </motion.div>
          )}

          {/* ── 6. CTA buttons ── */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8b5cf6] text-white text-sm font-semibold rounded-lg hover:bg-[#7c3aed] transition-colors focus-visible:outline-[#8b5cf6]"
            >
              View Projects
              <ArrowRight size={15} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#94a3b8] border border-[#1e293b] rounded-lg hover:border-[#8b5cf6]/60 hover:text-[#f1f5f9] transition-colors focus-visible:outline-[#8b5cf6]"
            >
              Resume
              <ArrowDownToLine size={15} />
            </a>
          </motion.div>

          {/* ── 7. Social links ── */}
          <motion.nav
            variants={fadeUpVariant}
            aria-label="Social profiles"
          >
            <ul className="flex items-center gap-5" role="list">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#94a3b8] transition-colors group"
                  aria-label="GitHub profile — opens in new tab"
                >
                  <Github size={16} className="group-hover:text-[#f1f5f9] transition-colors" />
                  <span>GitHub</span>
                </a>
              </li>
              <li aria-hidden="true" className="text-[#1e293b] select-none">·</li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#94a3b8] transition-colors group"
                  aria-label="LinkedIn profile — opens in new tab"
                >
                  <Linkedin size={16} className="group-hover:text-[#f1f5f9] transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li aria-hidden="true" className="text-[#1e293b] select-none">·</li>
              <li>
                <span className="text-sm text-[#475569]">
                  {profile.location}
                </span>
              </li>
            </ul>
          </motion.nav>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
