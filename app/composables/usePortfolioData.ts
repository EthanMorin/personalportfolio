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
      title: "ShopEase - Modern E-commerce Showcase",
      description:
        "A responsive demo store built with React, TypeScript, and Tailwind CSS. It features smooth product browsing, an interactive cart with real-time updates, and a mock checkout flow that highlights secure form handling and fast performance across devices—all in a production-style design with no real purchases.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      image:
        "https://cdn.discordapp.com/attachments/1419238894381039648/1419254459279609948/image.png?ex=68d11737&is=68cfc5b7&hm=7888f8ef9ee71f85e34b7a1ac030d561d633c48531a2122e11c6cb62d7e8e38c&",
      github: "https://github.com/EthanMorin/shopease",
      live: "https://shopease.ethanmorin.dev/",
    },
    {
      title: "Atlas Flow – Trello-inspired Task Board",
      description:
        "Modern kanban board with React 18, TypeScript, and Zustand state management. Features drag-and-drop card management, inline editing, multiple color themes, and glassmorphism UI design. Built with Vite for fast development and includes dark/light mode support with accessible components.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      image:
        "https://cdn.discordapp.com/attachments/1419238894381039648/1419238912525598720/image.png?ex=68d108bc&is=68cfb73c&hm=f8860f6c6a805dc60751825bd9bdd2c6b50b2d1bb81dd92fa63a275b7eaba176&",
      github: "https://github.com/EthanMorin/Atlas-Todo",
      live: "https://atlas-todo.ethanmorin.dev/",
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
