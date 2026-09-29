# Shibu Kumari – Portfolio

A clean, professional, and data-driven personal portfolio built to showcase engineering experience, featured projects, and technical skills. 

This repository contains the source code for a responsive, single-page application that dynamically renders portfolio sections strictly from typed data sources.

## About

**Shibu Kumari**
PHP Laravel Developer

PHP Laravel Developer with 3+ years of experience building scalable web applications, including CRM, Auction, and Lead Management systems. Specializing in REST APIs, database optimization, and backend architecture. Delivered 5+ live production applications.

## Tech Stack

This project is built using a modern frontend stack:
- **React 18** – Core UI library
- **TypeScript** – Static typing and type-safe data structures
- **Vite** – Fast build tool and development server
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Framer Motion** – Subtle, performant entrance animations
- **Lucide React** – Clean, consistent SVG icon set

## Portfolio Sections

The application is structured into the following key sections:
- **Hero**: Professional introduction and primary call-to-actions.
- **Engineering Snapshot**: High-level overview of core competencies and engineering metrics.
- **About**: Professional summary focused on backend development and architectural approach.
- **Skills**: Categorized technical skills (Backend, Database, Frontend, Automation, DevOps).
- **Engineering Approach**: Methodologies for API design, database optimization, and security.
- **Experience**: Timeline of professional roles and key engineering responsibilities.
- **Featured Projects**: Highlights of major engineering work including CRM and auction platforms.
- **Project Case Studies**: Detailed drill-downs into specific project architectures, challenges, and outcomes.
- **DSA Progress**: Data-driven tracker of a 60-day Data Structures and Algorithms challenge.
- **GitHub**: Clean CTA directing to open-source contributions.
- **Contact**: Accessible professional contact links (Email, LinkedIn).

## Key Features

- **Data-Driven Content**: All portfolio text, projects, and metrics are strictly isolated in `src/data/`. Updating the data files automatically updates the entire UI without touching component logic.
- **Hash-Based Routing**: Custom lightweight routing (e.g., `#/projects/project-id`) for navigating between the main portfolio and detailed case studies without heavy routing dependencies.
- **Responsive Design**: Carefully crafted Tailwind classes ensure the application looks perfect on mobile, tablet, and desktop viewports.
- **Recruiter-Friendly**: Prioritizes readability, clean typography, and concise technical highlights over excessive animations or Gamification.
- **Dynamic DSA Tracking**: The DSA section calculates and renders progress purely based on raw data inputs, maintaining an honest, gimmick-free presentation.

## Project Structure

The codebase is organized to keep data distinct from presentation:
- `src/data/` - The single source of truth for the portfolio. Contains `.ts` files for profile info, skills, projects, experience, and DSA progress.
- `src/components/sections/` - React components corresponding to each major piece of the UI.
- `src/components/layout/` - Wrapper components like the navigation bar and footer.
- `src/types/` - TypeScript interfaces defining the shape of the data structures.
- `src/App.tsx` - The root component managing layout assembly and hash-based routing.

## Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the Vite development server:
```bash
npm run dev
```

### Production Build
Type-check and create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

## Deployment
This project uses standard Vite configuration and hash-based routing, making it natively compatible and production-ready out-of-the-box for static hosting platforms like Vercel, Netlify, or GitHub Pages.

## Author
**Shibu Kumari**
- [GitHub](https://github.com/Shibu967)
- [LinkedIn](https://linkedin.com/in/shibu-kumari-81b0b7231)
- Email: kumarishibu967@gmail.com
