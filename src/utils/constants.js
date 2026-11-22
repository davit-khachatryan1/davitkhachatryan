import { FaAws, FaEnvelope, FaGithub, FaLinkedin, FaSlack, FaTelegramPlane } from "react-icons/fa";
import {
  SiAngular,
  SiClaude,
  SiCss,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiHubspot,
  SiJavascript,
  SiJest,
  SiModelcontextprotocol,
  SiN8N,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTelegram,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiZapier,
} from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { HiOutlineChartBar, HiOutlineLightningBolt, HiOutlineTemplate } from "react-icons/hi";
import { TbApi } from "react-icons/tb";

export const links = [
  { text: "Home", id: "home" },
  { text: "About Me", id: "about" },
  { text: "What I Do", id: "services" },
  { text: "Resume", id: "resume" },
  { text: "Skills", id: "skills" },
  { text: "Portfolio", id: "portfolio" },
  { text: "Testimonial", id: "testimonial" },
  { text: "Contact", id: "contact" },
];

export const profile = {
  name: "Davit Khachatryan",
  role: "Frontend Engineer & Applied AI Engineer",
  email: "khachatryandavit55@gmail.com",
  location: "Yerevan, Armenia",
  languages: ["English (Professional)", "Armenian (Native)", "Russian (Fluent)"],
  cv: "/files/Davit-Khachatryan-CV.pdf",
  typedRoles: [
    "Frontend Engineer.",
    "JavaScript Engineer.",
    "Applied AI Engineer.",
    "AI Agents & LLM Integrations.",
  ],
  heroChips: ["TypeScript", "JavaScript", "AI Agents", "MCP"],
  certificationChip: "Claude Certified Architect",
};

export const statsData = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 7, suffix: "", label: "Certifications" },
  { value: 4, suffix: "", label: "Industries (AI · Web3 · Fintech · Publishing)" },
];

export const servicesData = [
  {
    title: "Frontend Architecture",
    icon: HiOutlineTemplate,
    description:
      "Owning production frontends end to end: folder structure, state management, API service layers, hook conventions and component systems.",
  },
  {
    title: "LLM Integrations",
    icon: SiClaude,
    description:
      "Connecting products to large language models and turning them into reliable, production-ready features.",
  },
  {
    title: "AI Agents & MCP Workflows",
    icon: BsRobot,
    description:
      "Developing AI agents with custom tools and implementing Model Context Protocol (MCP) based workflows in real products.",
  },
  {
    title: "Financial Dashboards & Data-heavy UIs",
    icon: HiOutlineChartBar,
    description:
      "Loan management flows, multi-step journeys, real-time analytics, transaction histories and live financial charts.",
  },
  {
    title: "Performance Optimization",
    icon: HiOutlineLightningBolt,
    description:
      "Code splitting, lazy loading and asset optimisation; for example taking a Lighthouse score from 20 to 80+ and cutting load time by 40%.",
  },
  {
    title: "APIs & Integrations",
    icon: TbApi,
    description:
      "Node.js and NestJS APIs, GraphQL and Firebase data sources, third-party services and multi-provider authentication flows.",
  },
];

export const educationData = [
  {
    title: "Bachelor in Information Security",
    place: "Yerevan State University",
    duration: "2021",
  },
  {
    title: "JavaScript Development",
    place: "Armenian Code Academy",
    duration: "2019 - 2020",
  },
];

export const certificationsData = [
  {
    name: "Claude Certified Architect — Foundations",
    issuer: "Anthropic",
    url: "https://www.credly.com/badges/aee65a94-14a9-46b3-997c-cdf74572b2e6/public_url",
    featured: true,
  },
  {
    name: "Claude Agent SDK in TypeScript",
    issuer: "CodeSignal",
    url: "https://codesignal.com/learn/certificates/clxch5akz0003lmpxmq037lbt/courses/2358",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic Academy",
    url: "https://verify.skilljar.com/c/gs6vkwmwcagz",
  },
  {
    name: "Building AI Agents with Custom Tools",
    issuer: "CodeSignal",
    url: "https://codesignal.com/learn/certificates/clxch5akz0003lmpxmq037lbt/courses/1958",
  },
  {
    name: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic Academy",
  },
  {
    name: "Prompt Engineering for Developers",
    issuer: "Coursera",
  },
];

export const volunteeringData = [
  { role: "Squad Lead", event: "Sevan Startup Summit", date: "July 2026" },
  { role: "Squad Lead", event: "Sevan Startup Summit", date: "July 2025" },
  { role: "Group Lead", event: "Sevan Startup Summit", date: "July 2024" },
];

// TODO: add real testimonials ({ name, role, quote }).
// The Testimonial section (and its nav link) is hidden while this is empty.
export const testimonialsData = [];

// Icons shown next to skill names; skills without an entry render as plain text.
export const skillIcons = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Next.js": SiNextdotjs,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Redux: SiRedux,
  "Vue.js": SiVuedotjs,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  "SCSS / Sass": SiSass,
  Vite: SiVite,
  Figma: SiFigma,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  "Express.js": SiExpress,
  GraphQL: SiGraphql,
  Firebase: SiFirebase,
  Jest: SiJest,
  "React Testing Library": SiTestinglibrary,
  "Claude Agent SDK": SiClaude,
  "Claude Code": SiClaude,
  "Model Context Protocol (MCP)": SiModelcontextprotocol,
  n8n: SiN8N,
  Zapier: SiZapier,
  "HubSpot API": SiHubspot,
  Slack: FaSlack,
  "Telegram Bot API": SiTelegram,
  Git: SiGit,
  "AWS (S3, Lambda)": FaAws,
  GCP: SiGooglecloud,
};

export const skillsGroups = [
  {
    title: "Core",
    items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML5", "CSS3", "Redux", "Zustand"],
  },
  {
    title: "AI Tooling",
    items: ["Claude Agent SDK", "Claude Code", "Model Context Protocol (MCP)", "LLM Integration"],
  },
  {
    title: "AI Automation",
    items: [
      "n8n",
      "Zapier",
      "Clay",
      "HubSpot API",
      "Slack",
      "Telegram Bot API",
      "Webhooks",
      "OAuth",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Vue.js",
      "Angular",
      "Tailwind CSS",
      "SCSS / Sass",
      "Vite",
      "Pixi.js",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "Firebase"],
  },
  {
    title: "Testing",
    items: ["Jest", "Playwright", "React Testing Library"],
  },
  {
    title: "Tools & Infra",
    items: ["Git", "AWS (S3, Lambda)", "GCP", "Agile / Scrum"],
  },
];

export const workData = [
  {
    company: "O-dev",
    designation: "Senior Software Engineer",
    duration: "08/2024 - 05/2026",
    companyImg: "odev.png",
    stacks: ["React", "Vite", "TypeScript", "Firebase", "GraphQL"],
    description: (
      <ul>
        <li>
          Designed and owned the complete frontend architecture of two production platforms —
          defining folder structure, state management patterns, API service layers, custom hook
          conventions, and component systems — enabling fast iteration and consistent quality
          across the full codebase.
        </li>
        <li>
          Built both platforms from scratch using React, Vite, and TypeScript: a financial
          liquidity platform (GVNR) and a collateralised lending platform (Diamond Hands), taking
          each from blank repository to live production.
        </li>
        <li>
          Developed complex financial dashboards and data-heavy interfaces including loan
          management flows, multi-step user journeys, real-time analytics, transaction history
          views, and live financial charts.
        </li>
        <li>
          Implemented complex third-party service integrations and multi-provider authentication
          flows, handling secure connectivity, real-time data synchronisation, and cross-service
          state management.
        </li>
        <li>
          Integrated multiple data sources including Firebase and GraphQL APIs, enabling live
          dashboard analytics and seamless frontend-backend communication.
        </li>
        <li>
          Collaborated with product, design, and backend teams, owning major features from
          architecture through deployment and ongoing production maintenance.
        </li>
      </ul>
    ),
  },
  {
    company: "Kontainer",
    designation: "Software Engineer (Contract)",
    duration: "05/2024 - 09/2024",
    companyImg: "kontainerlogo.png",
    stacks: ["Vue.js", "Nuxt 3"],
    description: (
      <ul>
        <li>
          Built CMS-backed web applications using Vue.js and Nuxt 3, developing reusable UI
          component libraries and integrating dynamic CMS content into responsive,
          production-ready interfaces.
        </li>
        <li>
          Led the frontend migration from Nuxt 1 to Nuxt 3, refactoring legacy components,
          modernising outdated patterns, and resolving compatibility issues throughout the
          upgrade.
        </li>
        <li>
          Optimised frontend performance through code splitting, lazy loading, and asset
          optimisation, increasing the Lighthouse score from 20 to 80+ and reducing page load
          time by 40%.
        </li>
      </ul>
    ),
  },
  {
    company: "Optimum Partners",
    designation: "Software Engineer",
    duration: "02/2024 - 06/2024",
    companyImg: "optimum_partners.jpeg",
    stacks: ["Angular", "TypeScript", "Material UI", "HTML5", "SCSS", "REST APIs"],
    description: (
      <ul>
        <li>
          Contributed to Forbes&apos; enterprise editorial CMS — a high-traffic production
          system — using Angular, TypeScript, Material UI, HTML5, SCSS, and REST APIs,
          delivering reusable components and scalable frontend modules for editorial and
          publishing teams.
        </li>
        <li>
          Refactored and optimised legacy frontend features, resolving complex UI issues and
          ensuring consistent performance across all modern browsers and devices.
        </li>
        <li>
          Collaborated with US-based stakeholders and cross-functional Agile teams across
          product, design, backend, and QA, participating in sprint ceremonies, demos, and
          production delivery.
        </li>
      </ul>
    ),
  },
  {
    company: "Solicy",
    designation: "Full Stack Developer",
    duration: "09/2021 - 02/2024",
    companyImg: "solicy_logo.jpeg",
    stacks: ["React", "Vue.js", "Next.js", "Node.js", "NestJS", "TypeScript", "OpenAI API", "Pixi.js"],
    description: (
      <ul>
        <li>
          Led full-stack development of scalable fintech and trading platforms, delivering
          end-to-end solutions using React, Vue.js, Next.js, Node.js, NestJS, and TypeScript.
        </li>
        <li>
          Built high-performance user interfaces for fintech and trading platforms, developing
          reusable component libraries, complex dashboards, real-time data visualisations, and
          user-focused application flows.
        </li>
        <li>
          Designed and maintained secure RESTful APIs with JWT authentication, role-based access
          control, and backend integrations for production-grade financial applications.
        </li>
        <li>
          Integrated third-party financial data APIs including OpenAI, Alpha Vantage, and Yahoo
          Finance, enabling AI-powered automation, document generation, and real-time market data
          features.
        </li>
        <li>
          Developed real-time financial data visualisation features including live asset
          tracking, interactive charts, and analytics dashboards.
        </li>
        <li>
          Built an animation-heavy interactive application using Pixi.js and canvas-based
          rendering, delivering smooth, high-performance UI elements at 60fps.
        </li>
      </ul>
    ),
  },
  {
    company: "Freelance",
    designation: "Freelance Frontend Developer",
    duration: "09/2020 - 09/2021",
    companyImg: null,
    stacks: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    description: (
      <ul>
        <li>
          Built responsive, reusable UI components for 5+ client projects, translating Figma
          mockups into production-ready code using React, JavaScript, HTML5, CSS3, Tailwind CSS,
          and Bootstrap.
        </li>
        <li>
          Implemented mobile-first responsive designs with CSS Grid and Flexbox, ensuring
          consistent cross-browser compatibility and pixel-perfect UI delivery.
        </li>
      </ul>
    ),
  },
];

export const projectsData = [
  {
    category: "AI Agents/Automations",
    title: "CRM MCP Server",
    cover: "mcp-server",
    coverAlt:
      "An AI assistant chat asking about quiet deals, calling a read-only search_deals tool and showing results, with approve and deny buttons for a write action, next to an MCP server panel listing read and write CRM tools.",
    link: null,
    source: null,
    pitch:
      "A custom MCP server that lets AI assistants like Claude safely read and update CRM data in plain language.",
    description:
      "A custom MCP server that lets AI assistants like Claude safely read and update CRM data in plain language.",
    problem: [
      "Reps jump between the CRM and AI chat, copy-pasting data by hand",
      "Giving an AI full CRM access is risky",
      "Generic connectors expose far more than a team needs",
    ],
    howItWorks: [
      "The assistant asks a question in plain language and picks the right tool: search deals, get a contact, list recent activity",
      "Read tools run straight away; write tools (log a note, update a stage) wait for the user to approve",
      "Each user signs in with their own account, so the assistant only sees what that person can see",
      "Results come back as short, structured answers the assistant can reason over",
    ],
    underTheHood: [
      "Built with the official TypeScript MCP SDK; every tool has a Zod-validated input schema",
      "Read and write tools are separated, and writes require explicit confirmation",
      "OAuth per user with least-privilege scopes; tokens are never exposed to the model",
      "Rate limiting, response trimming and clear error messages keep tool calls fast and predictable",
    ],
    stacks: ["MCP", "TypeScript", "Node.js", "Zod", "OAuth", "HubSpot API"],
    pipeline: ["AI assistant", "MCP server", "Auth & scopes", "CRM API", "Answer"],
  },
  {
    category: "AI Agents/Automations",
    title: "Job Watcher",
    cover: "job-watcher",
    coverAlt:
      "Telegram chat on a phone: a good-morning message announcing 3 strong matches, followed by a job card for an Automation Engineer role scored 9 out of 10 with cover letter, good match and not for me buttons.",
    link: null,
    source: null,
    pitch:
      "An AI job-hunting assistant on Telegram that watches company careers pages and sends only the jobs that fit you.",
    description:
      "An AI job-hunting assistant on Telegram that watches company careers pages and sends only the jobs that fit you.",
    problem: [
      "Checking 30 careers pages every morning",
      "AI job bots that break on JavaScript-heavy sites",
      "Paying for AI to re-read pages that didn't change",
    ],
    howItWorks: [
      "/follow <company>: AI finds the company's careers page (own site, Lever, Greenhouse, Workable, staff.am), checks every candidate link and saves the best one",
      "Upload a CV (PDF) and it becomes the matching profile",
      "Every morning at 08:30, new jobs are scored 0–10 per user (skills, seniority, location) with a one-line reason and sent to Telegram",
      "👍 / 👎 buttons teach it the user's taste; ✍️ writes a cover letter from the real CV and the job description",
      "One bot serves many users, with admin approval",
    ],
    underTheHood: [
      "Each page is fetched once, even if many users follow it",
      "Page fingerprinting: an unchanged page means zero AI calls",
      "Falls back to a reader service for JavaScript-rendered or blocked pages; uses JobPosting structured data when present",
      "Keyword pre-filter before AI scoring; a small, fast model keeps costs low",
      "A rotating queue keeps every run under 5 minutes; the admin gets a Telegram alert if a run fails",
    ],
    stacks: ["n8n", "Gemini", "Telegram Bot API", "n8n Data Tables", "JavaScript"],
    pipeline: ["Careers pages", "Fetch & clean", "Changed?", "AI extracts jobs", "Score per user", "Telegram"],
  },
  {
    category: "AI Agents/Automations",
    title: "Lead Reacher",
    cover: "lead-reacher",
    coverAlt:
      "Slack-style message titled Weekly picks with 5 leads: a lost-deal lead card with score 86, a why-now note, a fact-checked draft email, Contacted, Skip and Not relevant buttons, and three score bars for fit, why now and relationship.",
    link: null,
    source: null,
    pitch:
      "Turns lost deals and silent leads in HubSpot into fact-checked outreach, delivered to sales reps in Slack every week.",
    description:
      "Turns lost deals and silent leads in HubSpot into fact-checked outreach, delivered to sales reps in Slack every week.",
    problem: [
      "Lost deals and silent leads forgotten in the CRM",
      "Reps don't know when to reach back out",
      "AI-written emails that make up facts",
    ],
    howItWorks: [
      "Pulls closed-lost deals and silent leads from HubSpot",
      "Clay enrichment finds a \"why now\": new funding, a new executive, hiring for relevant roles, new tech, recent news",
      "Scores every lead on fit, why-now and relationship (warm paths, past meetings), then picks the best each week within each rep's limit",
      "Builds the message from a template; AI polishes it, and a fact-checker rejects the draft if any number, date or link changed",
      "Reps get leads in Slack with Contacted / Skip / Not relevant buttons. It never sends emails by itself.",
    ],
    underTheHood: [
      "Multi-customer: each customer connects HubSpot and Slack in one click (OAuth) and gets their own connector with an endpoint allowlist",
      "Every data read and write is scoped to a single customer",
      "Scoring logic is pure and deterministic, separated from all API calls",
      "82 automated unit tests run before anything touches real systems",
      "Hourly scheduler, daily health check and failure alerts; successful runs aren't stored, for privacy",
    ],
    stacks: ["n8n", "HubSpot API", "Clay", "Slack", "LLM", "JavaScript", "OAuth"],
    pipeline: ["HubSpot", "Clay signals", "Score & select", "Draft + fact-check", "Slack"],
  },
  {
    category: "AI Agents/Automations",
    title: "Inbound Lead Routing",
    cover: "lead-routing",
    coverAlt:
      "Four-step pipeline of Form, Clay, Score and Route cards connected by arrows, with an example lead scored Hot 82 and a Slack-style alert announcing a new hot lead.",
    link: null,
    source: null,
    pitch: "Every new form lead is enriched, scored and sent to the right place automatically, with no manual copy-paste.",
    description:
      "Every new form lead is enriched, scored and sent to the right place automatically, with no manual copy-paste.",
    problem: [
      "New leads sit in a form inbox until someone checks",
      "Reps waste time researching every lead by hand",
      "Hot leads get the same slow response as cold ones",
    ],
    howItWorks: [
      "Zap 1: a new form submission is sent to Clay for enrichment (company, role, size)",
      "Zap 2: the enriched lead is scored and routed: hot leads go to HubSpot with a Slack alert, every lead is logged in Google Sheets",
    ],
    stacks: ["Zapier", "Clay", "HubSpot", "Slack", "Google Sheets", "Webhooks"],
    pipeline: ["Form", "Clay enrichment", "Score", "HubSpot / Slack / Sheets"],
  },
  {
    category: "Web3",
    title: "GVNR",
    image: "gvnr",
    link: null,
    source: null,
    description: "GVNR's mission is to solve the problems of the current DeFi ecosystem, unlocking trillions in liquidity by empowering developers and builders to mobilize BTC and remove the barriers between blockchains.",
    stacks: ["React", "Vite", "Wagmi", "Reown", "Node.js", "LI.FI", "Zustand", "Viem", "Ethers.js", "TypeScript"],
  },
  {
    category: "Web3",
    title: "GVNR Diamond Hands",
    image: "dh",
    link: null,
    source: null,
    description: "GVNR Diamond Hands is a revolutionary native Bitcoin DeFi product designed for HODLers — investors who know time in the market beats timing the market — and never want to sell their Bitcoin.",
    stacks: ["React", "Vite", "Wagmi", "Reown", "Node.js", "LI.FI", "Zustand", "Viem", "Ethers.js", "TypeScript"],
  },
  {
    category: "Website",
    title: "Kontainer",
    image: "kontainer",
    link: "https://kontainer.com/da",
    source: null,
    description: "A comprehensive container management platform that helps businesses streamline their shipping and logistics operations. Features include real-time tracking, inventory management, and automated documentation processing.",
    stacks: ["Vue", "Nuxt 3", "Node.js", "MongoDB", "Express", "Docker", "AWS"],
  },
  {
    category: "Website",
    title: "SolIT Website",
    image: "solit",
    link: "https://solit-llc.com/",
    source: null,
    description: "Modern corporate website for SolIT LLC, showcasing their IT solutions and services. Includes service portfolios, team profiles, case studies, and contact integration for potential clients.",
    stacks: ["Next.js", "TypeScript", "Chakra UI", "Framer Motion", "Vercel"],
  },
  {
    category: "Web3",
    title: "Dequity",
    image: "dequity",
    link: "https://dequity.io/?utm_content=light",
    source: null,
    description: "Decentralized equity platform enabling tokenization of traditional assets. Built for democratizing investment opportunities through blockchain technology and smart contracts.",
    stacks: ["React", "TypeScript", "Web3.js", "Ethers.js", "Tailwind CSS"],
  },
  {
    category: "Web3",
    title: "Blocknite",
    image: "blocknite",
    link: "https://blocknite.vercel.app/",
    source: null,
    description: "Blockchain-based gaming platform combining NFT technology with interactive gaming experiences. Features include digital asset ownership, play-to-earn mechanics, and cross-game interoperability.",
    stacks: ["Next.js", "TypeScript", "Web3.js", "Tailwind CSS", "Vercel"],
  },
  {
    category: "Website",
    title: "YouMeme",
    image: "youmeme",
    link: "https://youmeme.com/",
    source: null,
    description: "Social media platform focused on meme creation and sharing. Implements AI-powered content generation, viral analytics, and community-driven content curation with monetization features.",
    stacks: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS S3", "OpenAI API", "Tailwind CSS"],
  },
  {
    category: "Website",
    title: "Passbase",
    image: "passbase",
    link: "https://parallelmarkets.com/?utm_source=passbase.com",
    source: null,
    description: "Identity verification and KYC platform for financial institutions. Provides secure, compliant user onboarding with advanced fraud detection and regulatory compliance tools.",
    stacks: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    category: "Web3",
    title: "CryptoPool",
    image: "cryptopool",
    link: "https://www.cryptopool.money/",
    source: null,
    description: "Liquidity pool platform for cryptocurrency trading and yield farming. Features automated market making, impermanent loss protection, and multi-chain support for DeFi protocols.",
    stacks: ["React", "TypeScript", "Web3.js", "Ethers.js", "Tailwind CSS"],
  },
  {
    category: "Website",
    title: "Raizers",
    image: "raizer",
    link: "https://raize-front.web.app/",
    source: null,
    description: "Crowdfunding platform connecting innovative startups with investors. Includes project discovery, investment tracking, milestone-based funding, and comprehensive analytics dashboard.",
    stacks: ["Next.js", "Node.js", "NestJS", "Firebase", "Stripe API", "Chart.js", "MongoDB"],
  },
];


export const socialMediaLinks = [
  { label: "GitHub", href: "https://github.com/davit-khachatryan1", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davitkhachatryan11/", icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: "Telegram", href: "https://t.me/DavitKhachatryan", icon: FaTelegramPlane },
];
