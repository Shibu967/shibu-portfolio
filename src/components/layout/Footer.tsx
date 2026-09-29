// Footer.tsx — simple site footer.
// Shows name, role, social links, and copyright.
// All values sourced from profile data — nothing hardcoded.

import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1e293b] bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top row: name + social icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Name & role */}
          <div className="text-center sm:text-left">
            <p className="text-[#f1f5f9] font-semibold">{profile.name}</p>
            <p className="text-[#94a3b8] text-sm mt-0.5">{profile.role}</p>
          </div>

          {/* Social links */}
          <nav aria-label="Social links">
            <ul className="flex items-center gap-5" role="list">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
                  aria-label={`Send email to ${profile.email}`}
                >
                  <Mail size={18} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-[#1e293b] text-center">
          <p className="text-[#475569] text-xs">
            © {currentYear} {profile.name} · Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
