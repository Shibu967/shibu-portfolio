import type { SkillCategory } from '../types'

// -------------------------------------------------------
// Skills data — grouped into meaningful categories.
// Source: Shibu_Kumari_PHP_Laravel_Developer.pdf (resume)
// No fake percentage bars. Skills listed as documented.
// -------------------------------------------------------

export const skillCategories: SkillCategory[] = [
  {
    label: 'Backend',
    skills: [
      'PHP',
      'Laravel 10–11',
      'Eloquent ORM',
      'RESTful APIs',
      'Laravel Sanctum',
      'Laravel Passport',
      'RBAC',
      'Queue System',
      'Laravel Jobs',
      'Laravel Events & Listeners',
      'Cron Jobs',
      'Middleware',
      'Policies',
      'API Security',
      'Caching',
      'Spatie Permission',
    ],
  },
  {
    label: 'Architecture',
    skills: [
      'MVC Pattern',
      'OOP',
      'SOLID Principles',
      'Repository Pattern',
      'Service Layer Pattern',
    ],
  },
  {
    label: 'Database',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Query Optimisation',
      'Indexing',
      'Database Design',
      'Eager Loading',
      'N+1 Optimisation',
    ],
  },
  {
    label: 'Real-time',
    skills: [
      'Firebase',
      'OneSignal API',
      'Laravel Broadcasting',
    ],
  },
  {
    label: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'jQuery',
      'AJAX',
    ],
  },
  {
    label: 'Python',
    skills: [
      'Python Scripting',
      'ETL Pipelines',
      'Web Scraping',
      'Pandas',
      'NumPy',
      'BeautifulSoup',
      'Selenium',
    ],
  },
  {
    label: 'DevOps & Cloud',
    skills: [
      'Docker',
      'Redis',
      'AWS',
      'Azure',
      'CI/CD Pipelines',
    ],
  },
  {
    label: 'Testing',
    skills: [
      'Unit Testing',
      'Integration Testing',
    ],
  },
  {
    label: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Composer',
    ],
  },
  {
    label: 'AI-assisted Engineering',
    skills: [
      'ChatGPT',
      'Claude AI',
      'Cursor IDE',
      'GitHub Copilot',
      'Prompt Engineering',
      'AI-assisted Debugging',
      'AI-powered Code Review',
    ],
  },
  {
    label: 'CS Fundamentals',
    skills: [
      'Data Structures',
      'Algorithms',
      'Problem Solving',
      'Time & Space Complexity',
    ],
  },
]
