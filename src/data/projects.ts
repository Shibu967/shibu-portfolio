import type { Project } from '../types'

// -------------------------------------------------------
// Featured projects data.
// Source: Shibu_Kumari_PHP_Laravel_Developer.pdf (resume)
// Descriptions are high-level. No proprietary code,
// credentials, private URLs, or confidential client data.
// All metrics are directly from the resume.
// -------------------------------------------------------

export const projects: Project[] = [
  {
    id: 'automotive-crm',
    title: 'Automotive CRM & Auction Platform',
    summary:
      'A scalable CRM system managing the complete lead-to-auction lifecycle for an automotive business — from campaign integrations and telecaller workflows to evaluation tracking, auction scheduling, and deal management.',
    problem:
      'The business needed a unified backend to handle the entire vehicle acquisition funnel: capturing leads from multiple campaigns, routing them through telecaller teams, tracking car evaluations, managing auction workflows, and closing deals — all with granular role-based access.',
    solution:
      'Built a Laravel-based CRM and auction platform with multi-stage workflow management, real-time bid synchronisation via Firebase, queue-based push notifications, and KYC/dealer access control.',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Laravel Sanctum',
      'Firebase',
      'Laravel Jobs',
      'OneSignal API',
      'RESTful APIs',
      'RBAC',
      'Redis',
      'Docker',
    ],
    highlights: [
      'Multi-stage workflow management for lead intake, car inspection, evaluation, and auction scheduling',
      'Laravel Sanctum authentication with KYC approval workflows and dealer access control',
      'Real-time bid synchronisation using Firebase',
      'Queue-based notification architecture (Laravel Jobs + OneSignal API) handling 1000+ push notifications daily',
      'Automated auction lifecycle management: QC verification, scheduled transitions, price configuration',
      'Secure RESTful APIs with RBAC for admin, manager, telecaller, and dealer roles',
      'Python ETL pipeline processing large-scale records from unstructured ZIP archives using Pandas',
      'Automated web scraping with BeautifulSoup, Requests, and Selenium for CRM data integration',
    ],
    status: 'production',
    caseStudyRoute: '/projects/automotive-crm',
  },
  {
    id: 'lead-management',
    title: 'Lead Management System',
    summary:
      'A Lead Management System built from scratch with role-based access control, automated lead distribution, and a Super Admin analytics dashboard — managing 500+ leads efficiently.',
    problem:
      'Sales leads were being manually distributed among telecallers with no automation, causing unequal workloads, duplicate entries, and unreliable performance reporting.',
    solution:
      'Built a Laravel application with Spatie Permission RBAC (Super Admin, Manager, Telecaller), automated equal lead distribution, Cron Job-based duplicate detection, and server-side DataTables with AJAX.',
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
    highlights: [
      'Built from scratch — full architecture designed and implemented independently',
      'RBAC with Spatie Permission: Super Admin, Manager, and Telecaller roles',
      'Automated equal lead distribution with dynamic status and remark tracking',
      'Managed 500+ leads efficiently with minimal manual intervention',
      'Super Admin dashboard with daily call, appointment, and earnings analytics with date-wise filtering',
      'Resolved N+1 query issues with eager loading — 35% load time reduction (documented)',
      'Server-side DataTables with AJAX for large dataset rendering',
      'Automated duplicate lead detection via scheduled Cron Jobs',
      'Resolved 20+ production-level bugs across multiple projects',
    ],
    status: 'production',
    caseStudyRoute: '/projects/lead-management',
  },
  {
    id: 'python-etl',
    title: 'Python ETL Pipeline & Web Scraping Automation',
    summary:
      'A Python ETL pipeline to process large-scale records from unstructured ZIP archives, paired with a web scraping automation system for CRM data integration.',
    problem:
      'Large volumes of data arrived in unstructured ZIP archives with nested multi-format files. Additionally, relevant web data needed to be extracted and structured for the internal CRM — both processes were done manually.',
    solution:
      'Engineered a Python ETL pipeline using Pandas, zipfile, and os for automated extraction, cleaning, and transformation — exporting structured outputs to CSV and database. Built a separate web scraper using BeautifulSoup, Requests, and Selenium.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'BeautifulSoup',
      'Requests',
      'Selenium',
      'MySQL',
    ],
    highlights: [
      'Automated extraction of large-scale records from unstructured ZIP archives with nested multi-format files',
      'Requirement-driven data cleaning and transformation using Pandas',
      'Structured output export to CSV and database',
      'Automated web scraping with BeautifulSoup and Selenium for CRM integration',
      'Eliminated manual daily data preparation work',
    ],
    status: 'production',
    caseStudyRoute: '/projects/python-etl',
  },
]
