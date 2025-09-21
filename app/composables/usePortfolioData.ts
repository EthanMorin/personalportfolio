export const usePortfolioData = () => {
  const skills = {
    frontend: [
      "Vue.js",
      "React",
      "Tailwind CSS",
      "Nuxt.js",
      "Next.js",
      "Laravel",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    backend: [
      "Golang",
      "Node.js",
      "Java",
      "Dotnet",
      "PHP",
      "Python",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Oracle",
      "SQL Server",
      "SQLite",
    ],
    tools: [
      "GitHub",
      "Docker",
      "Cloudflare",
      "AWS",
      "Google Cloud Platform",
      "Azure",
      "Vercel",
      "Netlify",
      "Figma",
      "VS Code",
      "Postman",
      "Jest",
      "Cypress",
    ],
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack commerce solution with a modular Vue.js frontend, event-driven Node.js services, and PostgreSQL. Implemented composable UI architecture, analytics dashboards, and real-time inventory syncing.",
      technologies: ["React", "TypeScript", "Zustand"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/EthanMorin/Atlas-Todo",
      live: "https://atlas-todo.ethanmorin.dev/",
    },
    {
      title: "Atlas Flow – Trello-inspired Task Board",
      description:
        "Modern kanban board with React 18, TypeScript, and Zustand state management. Features drag-and-drop card management, inline editing, multiple color themes, and glassmorphism UI design. Built with Vite for fast development and includes dark/light mode support with accessible components.",
      technologies: ["React", "TypeScript", "Zustand"],
      image:
        "https://cdn.discordapp.com/attachments/1419238894381039648/1419238912525598720/image.png?ex=68d108bc&is=68cfb73c&hm=f8860f6c6a805dc60751825bd9bdd2c6b50b2d1bb81dd92fa63a275b7eaba176&",
      github: "https://github.com/EthanMorin/Atlas-Todo",
      live: "https://atlas-todo.ethanmorin.dev/",
    },
    {
      title: "API Analytics Dashboard",
      description:
        "Observability toolkit for engineering teams combining Nuxt.js, FastAPI, and Redis streams to surface latency metrics, anomaly detection, and SLA reports.",
      technologies: ["Nuxt.js", "Python", "FastAPI", "Redis", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  const experience = [
    {
      title: "Software Engineer (Internship)",
      company: "Kairos Water",
      period: "Jul 2025 - Sep 2025",
      description:
        "Delivered an IoT monitoring dashboard that translates sensor data into actionable alerts for field teams, reducing manual checks by 40%. Built resilient data pipelines and polished UI components in Vue.",
    },
    {
      title: "Software Engineer (Internship)",
      company: "Organized Chaos Design",
      period: "Jan 2025 - Jul 2025",
      description:
        "Partnered with designers to ship immersive marketing sites and headless CMS integrations. Introduced automated accessibility testing and performance budgets that improved Lighthouse scores by 18%.",
    },
    {
      title: "Full Stack Engineer (Internship)",
      company: "Red Rock Real Estate LLC",
      period: "Sep 2024 - Jan 2025",
      description:
        "Led the rebuild of a property insights platform using Nuxt and FastAPI, implementing CI/CD workflows and end-to-end testing suites that accelerated release cadence.",
    },
    {
      title: "Frontend Developer (Internship)",
      company: "SunDree Medical Spa",
      period: "Mar 2022 - Feb 2023",
      description:
        "Designed and developed a responsive appointment portal with bespoke theming, reusable component systems, and integrated analytics to inform marketing efforts.",
    },
  ];

  return {
    skills,
    projects,
    experience,
  };
};
