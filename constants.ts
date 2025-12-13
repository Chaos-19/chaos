import { Project, Experience, Skill } from "./types";
import btImage from "./assets/bt.jpg";
import imageImage from "./assets/image.png";
import ngpadd from "./assets/ngpadd.png";

export const PORTFOLIO_DATA = {
  name: "Kalkidan Getachew",
  role: "Mid Full Stack Engineer",
  bio: "I design and build practical software systems that solve real-world problems. My focus is on crafting reliable full-stack and mobile applications, understanding systems under the hood, and delivering solutions that are maintainable, scalable, and user-centered.",
  location: "Addis Ababa , Ethiopia",
  email: "kalgetachew375@gmail.com",
  social: {
    github: "https://github.com/Chaos-19",
    telegram: "https://t.me/chaos_blogs",
    linkedin: "https://linkedin.com",
  },
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "BT Creative Raffle App",
    description:
      "A lottery-style raffle system built for BT Creative. Users participate in raffles through a React Native mobile app, while administrators manage draws, participants, and results using XGS and a dedicated admin dashboard.",
    tags: ["React Native", "Raffle System", "Admin Dashboard", "Express Api"],
    link: "https://github.com/btcreative/RaffleApp",
    github: "https://github.com/btcreative/RaffleApp",
    image: btImage,
  },
  {
    id: 2,
    title: "Telegram Face Finder Bot",
    description:
      "A Telegram group bot that indexes all images shared in a group and allows users to search for faces. Given a single image, the bot scans previously indexed images, finds matching faces, and returns all related images directly via private chat.",
    tags: ["Telegram Bot", "Python", "Face Recognition", "DeepFace"],
    link: "https://t.me/search_reverse_bot",
    github: "https://t.me/search_reverse_bot",
    image: imageImage,
  },
  {
    id: 3,
    title: "Becho Gadget",
    description:
      "A Becho electronics e-commerce application developed as a final year graduation project. Built with Flutter for cross-platform support, using Firebase for authentication, product management, and an admin dashboard.",
    tags: ["Flutter", "Firebase", "E-Commerce", "Graduation Project"],
    link: "https://github.com/Chaos-19/e-commerce",
    github: "https://github.com/Chaos-19/e-commerce",
    image: imageImage,
  },
  {
    id: 4,
    title: "NgPad Android Learning App",
    description:
      "A native Android learning application inspired by NgPad, built using Kotlin and Java. Features structured courses, nested lessons, and an expandable UI architecture designed for scalable educational content.",
    tags: ["Android", "Kotlin", "Java", "Education App"],
    link: "https://github.com/Chaos-19/NgPad_Android_clone",
    github: "https://github.com/Chaos-19/NgPad_Android_clone",
    image: ngpadd,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Gafat Aerospace Development Center (GADC)",
    period: "2022 — 2025",
    description:
      "Worked as part of the software engineering team at GADC. Contributed to the development of a map-based application capable of distance calculation and location visualization. Initiated the development of an internal project management system to support planning, tracking, and coordination of engineering activities within the center.",
  },
  {
    id: 2,
    role: "Full Stack Software Engineer",
    company: "BT Creative (Event Hosting Company)",
    period: "2025",
    description:
      "Worked as a full stack engineer for a three-month contract. Designed and implemented a lottery-style raffle system , including user participation flows, admin dashboards, and system logic to manage draws and results.",
  },
  {
    id: 3,
    role: "Software Implementation Assistant",
    company: "Cluster PLC",
    period: "2025 — prenst",
    description:
      "Assisted in the rollout and implementation of enterprise software systems for government-affiliated organizations. Supported issue identification, reporting, and coordination during deployment phases, contributing to smoother system adoption and operational stability.",
  },
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Gemini API", category: "AI" },
  /*
  { name: "AWS", category: "Tools" },
  { name: "LangChain", category: "AI" },
  */
];

export const SYSTEM_INSTRUCTION = `
You are Kalkidan professional AI portfolio assistant.
Your goal is to answer questions about Kalkidan experience, skills, and projects in a helpful, professional, yet friendly tone.

CONTEXT:
Kalkidan is a Senior Full Stack Engineer based in SF with expertise in React, Node, and AI.

GUIDELINES:
- Be concise. Visitors want quick answers.
- Highlight specific achievements (numbers, metrics) when asked about experience.
- If asked about contact info, provide the email.
- Do not output widget tokens anymore; simply answer the user's question in text.
- If you don't know something, say "I don't have that specific detail, but Kalkidan can tell you more directly via email."
`;
