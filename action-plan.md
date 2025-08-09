# William Frank's Portfolio - Action Plan

## Executive Summary

This action plan provides a step-by-step roadmap to build and deploy a professional, static data science portfolio. The plan prioritizes a streamlined, zero-cost deployment using modern frontend technologies.

## Phase 1: Frontend Development (Static Site)

### 1.1 Initial Setup & Project Structure

- [x] Create project directory structure for a static Next.js site
- [x] Initialize Git repository with a proper .gitignore
- [x] Set up Node.js 18+ environment
- [x] Create a static data source for projects

**Status: COMPLETED** ✅

- Project structure: `/portfolio/frontend` directory created.
- Git repository: Initialized.
- Node.js: v22.17.0 (meets 18+ requirement).
- Frontend: Next.js 15.4.5 with TypeScript, Tailwind CSS, and a complete static page structure.
- Pages: Home, Projects, About, Contact, Research, Jupyter Notebook - all implemented with a dark theme.

---

### 1.2 Frontend Development Setup

- [x] Initialize Next.js 14 project with TypeScript and Tailwind CSS
- [x] Configure dark theme color palette from the design guide
- [x] Set up project folder structure:
  ```
  portfolio/
   ├── frontend/
   │   ├── app/
   │   │   ├── page.tsx (Home)
   │   │   ├── projects/page.tsx
   │   │   ├── research/page.tsx
   │   │   ├── about/page.tsx
   │   │   ├── contact/page.tsx
   │   │   └── jupyter-notebook/page.tsx
   │   ├── components/
   │   ├── styles/
   │   └── public/
  ```

### 1.3 Core Components Development

- [x] Create reusable UI components (Button, Card, CodeBlock)
- [x] Implement layout components (Header, Navigation, Footer)
- [x] Build project showcase components (ProjectCard, ProjectGrid)
- [x] Create data visualization components

### 1.4 Content & Data Setup

- [x] Create static project data within the frontend
- [x] Prepare 2-3 sample data science projects with descriptions
- [x] Implement Jupyter Notebook viewer with proper styling

### 1.5 Local Testing & Optimization

- [x] Test frontend on localhost:3000
- [x] Test responsive design on different screen sizes

## Phase 2: Deployment

### 2.1 Deployment Configuration

- [ ] Configure Next.js for static site export (`output: 'export'`)
- [ ] Set up a GitHub Actions workflow for automated deployment to GitHub Pages or Vercel.

### 2.2 Final Testing

- [ ] Deploy to a hosting provider (Vercel, Netlify, or GitHub Pages).
- [ ] Test the live site.

## Immediate Next Steps (This Week)

### Day 1: Refactor to Static
1. Remove all backend, database, and Docker-related code and files.
2. Update all documentation to reflect the static-only architecture.
3. Configure Next.js for static export.

### Day 2: Deployment
1. Create a new GitHub Actions workflow for deploying a static site.
2. Configure hosting provider (e.g., Vercel) for the static site.
3. Deploy and verify the live site.

## Zero-Cost Budget Confirmation

| Component | Cost | Status |
| --- | --- | --- |
| Hosting (Vercel/GitHub Pages) | $0/month | Ready to configure |
| **Total** | **$0** | **Confirmed** |

## Architecture Overview

```mermaid
graph TD
    subgraph "Development Phase"
        A[Local Development] --> B[Local Testing]
    end

    subgraph "Deployment Phase"
        B --> C[GitHub Actions CI/CD]
        C --> D[Static Site Hosting (Vercel)]
        D --> E[Production Ready]
    end

    subgraph "Zero-Cost Stack"
        F[Next.js Static Site]
    end
```

---

**Next Action**: Configure Next.js for static export and create the deployment workflow.
