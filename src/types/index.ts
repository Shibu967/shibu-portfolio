// -------------------------------------------------------
// Shared TypeScript interfaces for all portfolio data.
// Components import from here — never duplicate types.
// -------------------------------------------------------

export interface Profile {
  name: string
  role: string
  tagline: string
  location: string
  email: string
  github: string
  linkedin: string
  resumeUrl: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface Experience {
  company: string
  role: string
  duration: string
  location: string
  responsibilities: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  summary: string
  problem: string
  solution: string
  technologies: string[]
  highlights: string[]
  status: 'production' | 'personal' | 'open-source'
  /** Optional: route for the case study page e.g. /projects/automotive-crm */
  caseStudyRoute?: string
}


export type DSAStatus = 'completed' | 'current' | 'upcoming'

export interface DSATopic {
  day: number
  topic: string
  status: DSAStatus
  problemsSolved?: number
}

export interface GithubRepo {
  name: string
  description: string
  url: string
  language: string
  stars?: number
}
