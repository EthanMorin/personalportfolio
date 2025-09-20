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
        "Full-stack e-commerce solution with Vue.js frontend, Node.js backend, and PostgreSQL database. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe API"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.",
      technologies: ["React", "Socket.io", "MongoDB", "Express.js"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "API Analytics Dashboard",
      description:
        "Comprehensive analytics dashboard for monitoring API performance, usage metrics, and error tracking with real-time data visualization.",
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
        "",
    },
    {
      title: "Software Engineer (Internship)",
      company: "Organized Chaos Design",
      period: "Jan 2025 - Jul 2025",
      description:
        "",
    },
    {
      title: "Full Stack Engineer (Internship)",
      company: "Red Rock Real Estate LLC",
      period: "Sep 2024 - Jan 2025",
      description:
        "",
    },
    {
      title: "frontend developer (Internship)",
      company: "SunDree Medical Spa",
      period: "Mar 2022 - Feb 2023",
      description:
        "",
    },
  ];

  return {
    skills,
    projects,
    experience,
  };
};
