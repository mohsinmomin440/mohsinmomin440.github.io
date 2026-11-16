import backend from "../assets/backend-eJbiv30d.png";
import creator from "../assets/creator-Kxn6XPAS.png";
import mobile from "../assets/mobile-nsCxKNJ2.png";
import web from "../assets/web-2Xs7v1YF.png";
import remAioImg from "../assets/rem-aio.webp";
import studyMateImg from "../assets/studymate-ai.webp";
import financeTrackerImg from "../assets/finance-tracker.webp";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Discord Bot Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Open Source Developer",
    icon: creator,
  },
  {
    title: "Creative Developer",
    icon: backend,
  },
];

export const technologies = [
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "Node.js",
  },
  {
    name: "Discord.js",
  },
  {
    name: "Python",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Three.js",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Git / GitHub",
  },
  {
    name: "Docker",
  },
  {
    name: "HTML 5",
  },
  {
    name: "CSS 3",
  },
  {
    name: "Figma",
  },
];

export const experiences = [
  {
    title: "Discord Bot Development",
    company_name: "Automation & Concurrency",
    icon: mobile,
    iconBg: "#383E56",
    date: "Primary Specialization",
    points: [
      "Engineering resilient Discord automation architectures using Discord.js v14 and Node.js.",
      "Developing high-performance voice gateways and audio streaming playback queues.",
      "Designing responsive slash command hierarchies, interactive components, and permission systems.",
      "Collaborating with CODEx Development community on scalable bot infrastructure.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Frontend & Full-Stack Systems",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Modern Platforms",
    points: [
      "Crafting modern, reactive user interfaces with React, Next.js, and Tailwind CSS.",
      "Building seamless REST API endpoints, state synchronization, and database layers using MongoDB.",
      "Ensuring high performance, semantic accessibility, and cross-device responsiveness.",
    ],
  },
  {
    title: "Open Source Development",
    company_name: "GitHub Ecosystem & Community",
    icon: creator,
    iconBg: "#383E56",
    date: "Tooling & Collaboration",
    points: [
      "Publishing modular utility packages, boilerplates, and developer tools on GitHub (@mohsinmomin440).",
      "Contributing to developer discussions and open-source Discord bot repositories.",
      "Mentoring and sharing knowledge inside the CODEx Development community.",
    ],
  },
  {
    title: "Creative 3D Development",
    company_name: "Spatial & WebGL",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Interactive Engineering",
    points: [
      "Creating immersive 3D web experiences using Three.js and React Three Fiber.",
      "Implementing real-time 3D lighting, procedural geometries, and physics-based orbital controls.",
      "Optimizing GLTF/GLB models and render pipelines for 60fps performance across desktop and mobile.",
    ],
  },
];

export const projects = [
  {
    name: "REM-AIO",
    description:
      "All-in-one advanced Discord bot built with discord.py 2.x, featuring a custom bot client, dynamic extension loading, asynchronous architecture, and automated server moderation.",
    tags: [
      {
        name: "discord.py",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "asyncio",
        color: "pink-text-gradient",
      },
    ],
    image: remAioImg,
    source_code_link: "https://github.com/mohsinmomin440/REM-AIO",
  },
  {
    name: "studymate-ai",
    description:
      "AI-Powered Study Planner & Exam Preparation App built with Flutter and Firebase, featuring smart scheduling, task management, progress analytics, and AI-powered learning tools.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: studyMateImg,
    source_code_link: "https://github.com/mohsinmomin440/studymate-ai",
  },
  {
    name: "finance-tracker",
    description:
      "A modern personal finance tracker with expense tracking, monthly budgets, and insightful charts. Built with React, Vite, Tailwind CSS, and an aesthetic glassmorphism UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: financeTrackerImg,
    source_code_link: "https://github.com/mohsinmomin440/finance-tracker",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/mohsinmomin440",
  discord: "https://discord.gg/codexdevs",
  email: "mohsinmomin440@gmail.com",
};
