// ContactSection.tsx — Professional contact section
//
// Reads strictly from src/data/profile.ts.
// Uses direct mailto and external links without a backend API or form.

import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { Mail, MapPin, Linkedin, Send } from 'lucide-react'

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 px-4 bg-[#0a0f1c]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
        >
          <p className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Send size={14} />
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]"
          >
            Let's Build Together
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto text-lg leading-relaxed">
            I am actively looking for new opportunities as a PHP Laravel Developer. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
        >
          {/* Primary Action: Email */}
          {profile.email && (
            <motion.a
              href={`mailto:${profile.email}`}
              variants={itemVariant}
              className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/20 transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} className="text-[#c4b5fd]" />
              </div>
              <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">Send an Email</h3>
              <p className="text-[#c4b5fd] font-mono text-sm sm:text-base">{profile.email}</p>
            </motion.a>
          )}

          {/* Social: LinkedIn */}
          {profile.linkedin && (
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariant}
              className="p-6 rounded-xl bg-[#0f172a] border border-[#1e293b] hover:border-[#334155] hover:bg-[#1e293b] transition-all flex flex-col items-center text-center group"
            >
              <div className="mb-4 text-[#94a3b8] group-hover:text-[#0a66c2] transition-colors">
                <Linkedin size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-1">LinkedIn</h3>
              <p className="text-[#64748b] text-sm">Connect professionally</p>
            </motion.a>
          )}

          {/* Location */}
          {profile.location && (
            <motion.div
              variants={itemVariant}
              className="p-6 rounded-xl bg-[#0f172a] border border-[#1e293b] flex flex-col items-center text-center"
            >
              <div className="mb-4 text-[#94a3b8]">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-1">Location</h3>
              <p className="text-[#64748b] text-sm">{profile.location}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
