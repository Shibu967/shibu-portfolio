// Layout.tsx — global page wrapper.
// Every page renders inside this: Navbar → content → Footer.
// Keeping this as a thin wrapper prevents duplication across pages.

import type { ReactNode } from 'react'
import Navbar from '../navigation/Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-[#f1f5f9]">
      <Navbar />
      {/*
        pt-16 offsets the fixed navbar (h-16) so page content
        is never hidden behind it.
      */}
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
