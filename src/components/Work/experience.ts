export interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  highlights: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: 4,
    period: "Sep 2025 – Present",
    role: "Odoo Freelance Intern",
    company: "Sellside SpA",
    highlights: [
      "Develop and maintain custom Odoo modules using Python and ORM framework",
      "Work on modular addon architecture for eCommerce, CRM, inventory, and automation",
      "Integrate external services: marketplaces, logistics, payment gateways, and AI solutions",
    ],
    tags: ["Python", "Odoo", "ORM", "Git", "Agile"],
  },
  {
    id: 3,
    period: "Feb 2025 – Jun 2025",
    role: "Full Stack Developer Intern",
    company: "Import-Quivenza LTA",
    highlights: [
      "Built the complete backend (8 REST endpoints) with FastAPI and PostgreSQL, including JWT auth and authorization middleware",
      "Developed a predictive stock dashboard MVP (5 products) using Next.js and TypeScript, delivered in 4 months under Agile (Kanban)",
      "Documented APIs with Swagger (OpenAPI) and automated deployments with Docker and CI/CD pipelines",
    ],
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "CI/CD", "JWT"],
  },
  {
    id: 2,
    period: "Jan 2026 – Present",
    role: "Cloud Integration Developer",
    company: "Self-Employed",
    highlights: [
      "Configured cloud authentication using AWS Amplify for modern frontend applications",
      "Integrated Amazon Cognito for user registration, login, and email verification flows",
    ],
    tags: ["AWS Amplify", "Cognito", "Cloud Auth"],
  },
  {
    id: 1,
    period: "May 2024 – Ago 2024",
    role: "Mobile Developer",
    company: "Universidad Fuerzas Armadas – ESPE",
    highlights: [
      "Implemented CI/CD pipeline with GitHub Actions to automate Flutter app deployment",
      "Configured automated workflows for compilation and distribution via Firebase App Distribution",
      "Managed confidential credentials using encrypted repository secrets",
    ],
    tags: ["Flutter", "GitHub Actions", "CI/CD", "Firebase"],
  },
];
