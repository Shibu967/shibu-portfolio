import type { Experience } from '../types'

// -------------------------------------------------------
// Professional experience data.
// Source: Shibu_Kumari_PHP_Laravel_Developer.pdf (resume)
// All content is taken verbatim or closely paraphrased
// from the resume. Nothing invented.
// -------------------------------------------------------

export const experiences: Experience[] = [
  {
    company: 'Kode Creators Pvt. Ltd.',
    role: 'PHP Laravel Developer',
    duration: 'May 2026 – Present',
    location: 'Vadodara, Gujarat',
    responsibilities: [
      'Onboarded onto an existing production-based project, performing in-depth code review, resolving production bugs, and implementing feature changes as per business requirements.',
      'Analysed and optimised existing RESTful APIs to improve response time and reduce redundant queries.',
      'Worked on a Pharmacy Management module covering feature development and bug fixes.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'RESTful APIs',
      'MySQL',
    ],
  },
  {
    company: 'Luxurya Cars Pvt. Ltd.',
    role: 'Software Developer (Full Stack)',
    duration: 'Jul 2024 – Apr 2026',
    location: 'Ahmedabad, Gujarat',
    responsibilities: [
      'Built and maintained a scalable CRM system managing the complete lead-to-auction lifecycle, including campaign integrations, telecaller workflows, evaluation tracking, auction scheduling, and deal management.',
      'Designed secure RESTful APIs with role-based access control and multi-stage workflow management for car inspection and evaluation modules.',
      'Developed auction platform backend using Laravel Sanctum authentication, KYC approval workflows, dealer access control, and advanced listing filters.',
      'Implemented real-time bid synchronisation using Firebase and optimised database queries to improve performance and response time.',
      'Designed queue-based notification architecture using Laravel Jobs and OneSignal API to handle 1000+ push notifications daily efficiently.',
      'Automated auction lifecycle management including QC verification, scheduled transitions, price configuration, and reporting dashboards.',
      'Led backend production deployments, performance monitoring, and enforced security best practices including validation, access control, and query optimisation.',
      'Leveraged ChatGPT and AI tools through Prompt Engineering to streamline query optimisation, accelerate debugging workflows, and automate API documentation generation.',
      'Engineered a Python ETL pipeline to process large-scale records from unstructured ZIP archives with nested multi-format files using pandas, zipfile, and os; automated data extraction, applied requirement-driven cleaning and transformation, and exported structured outputs to CSV and database.',
      'Automated web data extraction using Python (BeautifulSoup, Requests, Selenium); parsed and structured scraped data for seamless integration into internal CRM and database.',
    ],
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Firebase',
      'Laravel Sanctum',
      'Laravel Jobs',
      'OneSignal API',
      'RESTful APIs',
      'RBAC',
      'Python',
      'Pandas',
      'BeautifulSoup',
      'Selenium',
      'Redis',
      'Docker',
    ],
  },
  {
    company: 'Sapphire Software Solutions',
    role: 'PHP Laravel Developer',
    duration: 'Oct 2023 – Jun 2024',
    location: 'Ahmedabad, Gujarat',
    responsibilities: [
      'Developed a Lead Management System from scratch with role-based access control using Spatie Permission (Super Admin, Manager, Telecaller).',
      'Implemented automated equal lead distribution among telecallers with dynamic status and remark tracking, managing 500+ leads efficiently.',
      'Built Super Admin dashboard with performance analytics (daily calls, appointments, earnings) and date-wise filtering using charts.',
      'Optimised database performance by resolving N+1 query issues, implementing eager loading, and building server-side DataTables with AJAX — reducing load time by 35%.',
      'Implemented automated duplicate lead detection using scheduled Cron Jobs, improving data consistency and operational accuracy.',
      'Resolved 20+ production-level bugs and implemented new feature enhancements across multiple projects, improving system stability and user experience.',
    ],
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Spatie Permission',
      'RBAC',
      'Cron Jobs',
      'Eager Loading',
      'AJAX',
      'jQuery',
      'Bootstrap',
    ],
  },
  {
    company: 'Elsner Technologies Pvt. Ltd.',
    role: 'PHP Developer Intern',
    duration: 'Jan 2023 – Aug 2023',
    location: 'Ahmedabad, Gujarat',
    responsibilities: [
      'Completed Core & Advanced PHP training with hands-on practice projects, implementing multiple features independently.',
      'Built 5+ dynamic web modules using AJAX, jQuery, and Bootstrap for enhanced user interactivity.',
      'Contributed to a live Pimcore CMS project, working on real-world content management system features in a production environment.',
    ],
    technologies: [
      'PHP',
      'AJAX',
      'jQuery',
      'Bootstrap',
      'Pimcore CMS',
    ],
  },
]
