export type Language = "en" | "es";

export interface WorkItem {
  period: string;
  role: string;
  company: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

export interface Translations {
  nav: {
    work: string;
    skills: string;
    projects: string;
    about: string;
    contact: string;
    cv: string;
    language: string;
  };
  loading: string[];
  hero: {
    tagline: string;
    subtitle: string;
  };
  terminal: {
    title: string;
    command: string;
    keys: {
      endpoints: string;
      mvp: string;
      languages: string;
      cloudAuth: string;
      status: string;
    };
    values: {
      fourMonths: string;
      cognito: string;
      openToWork: string;
    };
  };
  work: {
    title: string;
    items: WorkItem[];
  };
  skills: {
    title: string;
    groups: string[];
  };
  projects: {
    title: string;
    live: string;
    github: string;
    items: ProjectItem[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  contact: {
    title: string;
    text: string;
    email: string;
    linkedin: string;
    github: string;
    cv: string;
    cvDownload: string;
  };
  resume: {
    title: string;
    prev: string;
    next: string;
    pageInfo: (page: number, total: number) => string;
    loading: string;
    download: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      work: "Work",
      skills: "Skills",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cv: "CV",
      language: "Change language",
    },
    loading: ["Loading profile...", "Fetching endpoints...", "Ready."],
    hero: {
      tagline: "Full Stack Developer \u2022 Backend focused \u2022 Odoo specialist",
      subtitle:
        "I build REST APIs, predictive dashboards, and modular ERP systems. Software Engineering graduate turned builder.",
    },
    terminal: {
      title: "profile \u2014 zsh",
      command: "franklin@portfolio --profile",
      keys: {
        endpoints: "endpoints_built:",
        mvp: "mvp_delivery:",
        languages: "languages:",
        cloudAuth: "cloud_auth:",
        status: "status:",
      },
      values: {
        fourMonths: '"4 months"',
        cognito: '"AWS Cognito"',
        openToWork: '"open to work"',
      },
    },
    work: {
      title: "Experience",
      items: [
        {
          period: "Sep 2025 \u2013 Present",
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
          period: "Feb 2025 \u2013 Jun 2025",
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
          period: "Jan 2026 \u2013 Present",
          role: "Cloud Integration Developer",
          company: "Self-Employed",
          highlights: [
            "Configured cloud authentication using AWS Amplify for modern frontend applications",
            "Integrated Amazon Cognito for user registration, login, and email verification flows",
          ],
          tags: ["AWS Amplify", "Cognito", "Cloud Auth"],
        },
        {
          period: "May 2024 \u2013 Ago 2024",
          role: "Mobile Developer",
          company: "Universidad Fuerzas Armadas \u2013 ESPE",
          highlights: [
            "Implemented CI/CD pipeline with GitHub Actions to automate Flutter app deployment",
            "Configured automated workflows for compilation and distribution via Firebase App Distribution",
            "Managed confidential credentials using encrypted repository secrets",
          ],
          tags: ["Flutter", "GitHub Actions", "CI/CD", "Firebase"],
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: ["Languages", "Backend & Frameworks", "DevOps & Cloud", "Databases & Tools"],
    },
    projects: {
      title: "Projects",
      live: "Live site \u2197",
      github: "GitHub \u2197",
      items: [
        {
          name: "Buksy CRM",
          description:
            "AI-powered CRM platform, contributing to frontend development and cloud integration for the modern sales workflow.",
          tags: ["AI", "CRM", "Cloud"],
          liveUrl: "https://crm.getbuksy.com/",
          repoUrl: "https://github.com/buksyai-stack/BuksyCRM",
        },
        {
          name: "Proyecto SpringBoot",
          description:
            "REST CRUD API built with Java and Spring Boot, implementing persistent entities and structured backend logic.",
          tags: ["Java", "Spring Boot", "CRUD"],
          repoUrl: "https://github.com/joel12sa/ProyectoSpringBoot",
        },
        {
          name: "Prowess Mentor\u00edas",
          description:
            "Web build for the mentorship module at Prowess, supporting the mentoring workflow for students and mentors.",
          tags: ["JavaScript", "Web"],
          repoUrl: "https://github.com/Modulo-Mentorias-Prowess/web_build_prowess_mentorias",
        },
        {
          name: "Alertika",
          description:
            "Emergency safety app in Flutter: panic, fire, and theft alerts with GPS location sharing, guardian linking, and group chat backed by Firebase.",
          tags: ["Flutter", "Dart", "Firebase", "Geolocator"],
          repoUrl: "https://github.com/saintajs/Alertika-",
        },
        {
          name: "No-Country S11-25 Equipo 51",
          description:
            "Pet health management platform: NestJS + Prisma API for health records, nutrition, pets, and reminders, with a React 19 and Tailwind frontend.",
          tags: ["NestJS", "Prisma", "React", "TypeScript", "Tailwind"],
          repoUrl: "https://github.com/No-Country-simulation/S11-25-Equipo-51-WebApp",
        },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "I'm a Software Engineering graduate from Universidad de las Fuerzas Armadas \u2013 ESPE, passionate about building backend systems, predictive dashboards, and modular ERP solutions. I focus on clean architecture, well-documented APIs, and delivery that actually ships.",
        "Currently working with Odoo at Sellside SpA and exploring cloud auth with AWS Amplify. I also lead finance at AIESEC Ecuador (ESPE), where I manage budgets, reports, and financial indicators for the local committee.",
        "I speak Spanish natively and am actively improving my English (B1 \u2192 next level).",
      ],
    },
    contact: {
      title: "Contact",
      text: "I'm open to freelance, internship, and full-time opportunities. Reach out and let's build something.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "CV",
      cvDownload: "Download PDF \u2193",
    },
    resume: {
      title: "CV",
      prev: "\u2190 Prev",
      next: "Next \u2192",
      pageInfo: (page, total) => `Page ${page} of ${total}`,
      loading: "Loading PDF...",
      download: "Download PDF \u2193",
    },
  },
  es: {
    nav: {
      work: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      about: "Sobre m\u00ed",
      contact: "Contacto",
      cv: "CV",
      language: "Cambiar idioma",
    },
    loading: ["Cargando perfil...", "Obteniendo endpoints...", "Listo."],
    hero: {
      tagline:
        "Desarrollador Full Stack \u2022 Enfoque en backend \u2022 Especialista en Odoo",
      subtitle:
        "Construyo APIs REST, dashboards predictivos y sistemas ERP modulares. Egresado de Ingenier\u00eda de Software convertido en creador.",
    },
    terminal: {
      title: "profile \u2014 zsh",
      command: "franklin@portfolio --profile",
      keys: {
        endpoints: "endpoints_creados:",
        mvp: "entrega_mvp:",
        languages: "lenguajes:",
        cloudAuth: "auth_cloud:",
        status: "estado:",
      },
      values: {
        fourMonths: '"4 meses"',
        cognito: '"AWS Cognito"',
        openToWork: '"disponible"',
      },
    },
    work: {
      title: "Experiencia",
      items: [
        {
          period: "Sep 2025 \u2013 Presente",
          role: "Pasante Freelance Odoo",
          company: "Sellside SpA",
          highlights: [
            "Desarrollo y mantenimiento de m\u00f3dulos personalizados en Odoo usando Python y el framework ORM",
            "Trabajo en arquitectura modular basada en addons para eCommerce, CRM, inventario y automatizaci\u00f3n",
            "Integro servicios externos: marketplaces, log\u00edstica, pasarelas de pago y soluciones de IA",
          ],
          tags: ["Python", "Odoo", "ORM", "Git", "Agile"],
        },
        {
          period: "Feb 2025 \u2013 Jun 2025",
          role: "Pasante Desarrollador Full Stack",
          company: "Import-Quivenza LTA",
          highlights: [
            "Constru\u00ed el backend completo (8 endpoints REST) con FastAPI y PostgreSQL, incluyendo autenticaci\u00f3n JWT y middleware de autorizaci\u00f3n",
            "Desarroll\u00e9 el MVP de un dashboard predictivo de stock (5 productos) con Next.js y TypeScript, entregado en 4 meses bajo metodolog\u00eda Agile (Kanban)",
            "Document\u00e9 APIs con Swagger (OpenAPI) y automatiz\u00e9 despliegues con Docker y pipelines CI/CD",
          ],
          tags: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "CI/CD", "JWT"],
        },
        {
          period: "Ene 2026 \u2013 Presente",
          role: "Desarrollador de Integraci\u00f3n Cloud",
          company: "Aut\u00f3nomo",
          highlights: [
            "Configur\u00e9 autenticaci\u00f3n cloud con AWS Amplify para aplicaciones frontend modernas",
            "Integr\u00e9 Amazon Cognito para registro, login y verificaci\u00f3n de usuarios por email",
          ],
          tags: ["AWS Amplify", "Cognito", "Cloud Auth"],
        },
        {
          period: "May 2024 \u2013 Ago 2024",
          role: "Desarrollador M\u00f3vil",
          company: "Universidad Fuerzas Armadas \u2013 ESPE",
          highlights: [
            "Implement\u00e9 un pipeline CI/CD con GitHub Actions para automatizar el despliegue de apps Flutter",
            "Configur\u00e9 workflows automatizados para compilaci\u00f3n y distribuci\u00f3n v\u00eda Firebase App Distribution",
            "Gestion\u00e9 credenciales confidenciales usando secretos de repositorio cifrados",
          ],
          tags: ["Flutter", "GitHub Actions", "CI/CD", "Firebase"],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      groups: [
        "Lenguajes",
        "Backend y Frameworks",
        "DevOps y Cloud",
        "Bases de datos y Herramientas",
      ],
    },
    projects: {
      title: "Proyectos",
      live: "Sitio en vivo \u2197",
      github: "GitHub \u2197",
      items: [
        {
          name: "Buksy CRM",
          description:
            "Plataforma CRM impulsada por IA, aportando al desarrollo frontend y la integraci\u00f3n cloud del flujo de ventas moderno.",
          tags: ["AI", "CRM", "Cloud"],
          liveUrl: "https://crm.getbuksy.com/",
          repoUrl: "https://github.com/buksyai-stack/BuksyCRM",
        },
        {
          name: "Proyecto SpringBoot",
          description:
            "API REST CRUD construida con Java y Spring Boot, implementando entidades persistentes y l\u00f3gica de backend estructurada.",
          tags: ["Java", "Spring Boot", "CRUD"],
          repoUrl: "https://github.com/joel12sa/ProyectoSpringBoot",
        },
        {
          name: "Prowess Mentor\u00edas",
          description:
            "Desarrollo web del m\u00f3dulo de mentor\u00edas en Prowess, soportando el flujo de mentor\u00eda para estudiantes y mentores.",
          tags: ["JavaScript", "Web"],
          repoUrl: "https://github.com/Modulo-Mentorias-Prowess/web_build_prowess_mentorias",
        },
        {
          name: "Alertika",
          description:
            "App de seguridad de emergencia en Flutter: alertas de p\u00e1nico, incendio y robo con compartici\u00f3n de ubicaci\u00f3n GPS, v\u00ednculo con guardianes y chat grupal respaldado por Firebase.",
          tags: ["Flutter", "Dart", "Firebase", "Geolocator"],
          repoUrl: "https://github.com/saintajs/Alertika-",
        },
        {
          name: "No-Country S11-25 Equipo 51",
          description:
            "Plataforma de salud para mascotas: API NestJS + Prisma para historiales de salud, nutrici\u00f3n, mascotas y recordatorios, con frontend en React 19 y Tailwind.",
          tags: ["NestJS", "Prisma", "React", "TypeScript", "Tailwind"],
          repoUrl: "https://github.com/No-Country-simulation/S11-25-Equipo-51-WebApp",
        },
      ],
    },
    about: {
      title: "Sobre m\u00ed",
      paragraphs: [
        "Soy egresado de Ingenier\u00eda de Software de la Universidad de las Fuerzas Armadas \u2013 ESPE, apasionado por construir sistemas backend, dashboards predictivos y soluciones ERP modulares. Me enfoco en arquitectura limpia, APIs bien documentadas y entregas que realmente llegan a producci\u00f3n.",
        "Actualmente trabajo con Odoo en Sellside SpA y exploro autenticaci\u00f3n cloud con AWS Amplify. Tambi\u00e9n lidero finanzas en AIESEC Ecuador (ESPE), gestionando presupuestos, reportes e indicadores financieros del comit\u00e9 local.",
        "Hablo espa\u00f1ol nativamente y estoy mejorando activamente mi ingl\u00e9s (B1 \u2192 siguiente nivel).",
      ],
    },
    contact: {
      title: "Contacto",
      text: "Estoy abierto a oportunidades freelance, pasant\u00edas y tiempo completo. Cont\u00e1ctame y construyamos algo.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "CV",
      cvDownload: "Descargar PDF \u2193",
    },
    resume: {
      title: "CV",
      prev: "\u2190 Anterior",
      next: "Siguiente \u2192",
      pageInfo: (page, total) => `P\u00e1gina ${page} de ${total}`,
      loading: "Cargando PDF...",
      download: "Descargar PDF \u2193",
    },
  },
};
