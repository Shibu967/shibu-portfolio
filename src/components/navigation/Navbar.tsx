// Navbar.tsx — fixed top navigation bar.
// Handles desktop nav links, mobile hamburger menu,
// and a scroll-aware background transition.
// All contact links read from profile data — nothing hardcoded.

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../../data/profile'

// Navigation links that scroll to each section.
// When sections are added in later phases, they will
// automatically appear in the nav without touching this logic.
const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'DSA',        href: '#dsa' },
  { label: 'GitHub',     href: '#github' },
  { label: 'Contact',    href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Add a subtle background once the user scrolls past the hero area.
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when a link is clicked.
  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-sm border-b border-[#1e293b]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-[#f1f5f9] font-bold hover:text-[#a78bfa] transition-colors focus-visible:outline-[#8b5cf6]"
            aria-label="Shibu Kumari — go to top"
          >
            <span className="w-8 h-8 rounded-lg bg-[#8b5cf6] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              SK
            </span>
            <span className="hidden sm:block text-base">Shibu Kumari</span>
          </a>

          {/* Desktop: nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] rounded-md hover:bg-[#1e293b] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop: Resume CTA */}
          <div className="hidden md:block">
            <a
              href={profile.resumeUrl}
              download
              className="px-4 py-2 text-sm font-medium text-[#8b5cf6] border border-[#8b5cf6] rounded-lg hover:bg-[#8b5cf6] hover:text-white transition-colors focus-visible:outline-[#8b5cf6]"
            >
              Resume
            </a>
          </div>

          {/* Mobile: hamburger button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#1e293b] transition-colors"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile: dropdown menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-[#1e293b] bg-[#0f172a]"
          >
            <ul className="flex flex-col gap-1 py-3 px-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center px-4 py-3 text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#1e293b] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <a
                href={profile.resumeUrl}
                download
                onClick={closeMenu}
                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-[#8b5cf6] border border-[#8b5cf6] rounded-lg hover:bg-[#8b5cf6] hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
