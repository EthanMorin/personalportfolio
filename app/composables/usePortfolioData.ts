export const usePortfolioData = () => {
  const skills = {
    frontend: [
      "Vue.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Nuxt.js",
      "Next.js",
      "Laravel",
    ],
    backend: [
      "Golang",
      "Node.js",
      "PHP",
      "Python",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    tools: [
      "Git",
      "GitHub",
      "Cloudflare",
      "AWS",
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
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe API"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task platform featuring kanban boards, granular permissions, and optimistic UI updates powered by WebSockets.",
      technologies: ["React", "Socket.io", "MongoDB", "Express.js"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
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
