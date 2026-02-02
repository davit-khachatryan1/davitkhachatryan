import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaVuejs,
  FaAngular,
  FaEnvelope,
  FaTelegramPlane
} from "react-icons/fa";

import { DiMongodb } from "react-icons/di";

import { TbBrandReactNative } from "react-icons/tb";

import {
  SiNuxtdotjs,
  SiWagmi,
  SiWeb3Dotjs,
  SiEthers,
  SiSolana,
  SiEthereum,
  SiHiveBlockchain,
} from "react-icons/si";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiPostman, SiGnubash, SiNextdotjs } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { BsCodeSlash, BsRobot, BsGit, BsMarkdown } from "react-icons/bs";
import { GiArtificialIntelligence, GiSoccerBall, GiTennisRacket, GiChessKing, GiGamepad } from "react-icons/gi";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Blockchain",
    icon: SiHiveBlockchain,
  },
  {
    interest: "AI",
    icon: GiArtificialIntelligence,
  },
  {
    interest: "Football",
    icon: GiSoccerBall,
  },
  {
    interest: "Tennis",
    icon: GiTennisRacket,
  },
  {
    interest: "Intellectual Games",
    icon: GiChessKing,
  },
  {
    interest: "Video Games",
    icon: GiGamepad,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "VueJS",
    icon: FaVuejs,
  },
  {
    name: "Nuxt",
    icon: SiNuxtdotjs,
  },
  {
    name: "Angular",
    icon: FaAngular,
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "MongoDB",
    icon: DiMongodb,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Web3.js",
    icon: SiWeb3Dotjs,
  },
  {
    name: "Ethers.js",
    icon: SiEthers,
  },
  {
    name: "Wagmi",
    icon: SiWagmi,
  },
  {
    name: "Ethereum",
    icon: SiEthereum,
  },
  {
    name: "Solana",
    icon: SiSolana,
  },
];

export const skillsGroups = [
  {
    title: "Front-End Foundations",
    caption: "Semantic UI, modern styling, and reliable component patterns.",
    items: ["HTML5", "CSS3", "Javascript", "Typescript", "SASS", "SCSS", "Less", "Tailwind", "Bootstrap"],
  },
  {
    title: "AI & AI Tools",
    caption: "Prompting, code copilots, and applied AI workflows.",
    items: ["ChatGPT", "Claude Code", "Grok Code", "Cursor", "Prompt Engineering"],
  },
  {
    title: "Modern Frameworks",
    caption: "Production-ready front-end architecture and frameworks.",
    items: [
      "ReactJS",
      "NextJS",
      // "React Native",
      // "VueJS",
      // "Nuxt",
      // "Angular",
    ],
  },
  {
    title: "State Management",
    caption: "Predictable state management solutions for scalable applications.",
    items: ["Redux", "Zustand"],
  },
  {
    title: "Web3 & Chain",
    caption: "Multi-chain tooling and wallet integrations.",
    items: ["Web3.js", "Ethers.js", "Wagmi", "Ethereum", "Solana"],
  },
  {
    title: "Tooling & Workflow",
    caption: "Daily tooling that keeps delivery smooth.",
    items: ["Git", "Github", "Postman", "Bash"],
  },
  {
    title: "Back-End & APIs (Less Experienced)",
    caption: "Node services with clean routing and scalable APIs.",
    items: ["NodeJs", "Express", "NestJS"],
  },
  {
    title: "Data & Storage (Less Experienced)",
    caption: "Relational and document databases for app backbones.",
    items: ["Postgres", "MongoDB"],
  },
];

export const workData = [
  {
    company: "ODev Tech",
    designation: "Front-end Web3 Developer",
    duration: "08/2024 - Present",
    companyImg: "odev.png",
    stacks: ["Wagmi", "Viem", "Ethers.js", "@solana/web3.js", "@reown/appkit", "bitcoinjs-lib", "React", "Firebase", "Vite"],
    description: (
      <>
        <ul>
          <li>
            Developed front-end interfaces and user experiences for cutting-edge DeFi platforms, 
            including GVNR—a protocol focused on unlocking trillions in liquidity by 
            empowering developers to mobilize BTC and remove barriers between blockchains.
          </li>
          <li>
            Built front-end components and UI for comprehensive BTCFi lending platform (Diamond Hands), 
            implementing user interfaces that enable users to collateralize native Bitcoin on-chain, 
            mint stablecoins backed by self-custodied Bitcoin, and manage loans with intuitive 
            wallet integration flows.
          </li>
          <li>
            Implemented client-side multi-chain Web3 integrations supporting Bitcoin, Ethereum, and Solana 
            blockchains using specialized libraries including bitcoinjs-lib, Ethers.js, Viem, 
            and Solana Web3.js, creating seamless cross-chain user experiences in the front-end.
          </li>
          <li>
            Integrated advanced wallet connectivity solutions using Reown AppKit in React applications, 
            enabling seamless multi-chain wallet support with Bitcoin, Ethereum, and Solana adapters 
            through intuitive UI components and connection flows.
          </li>
          <li>
            Developed front-end smart contract interaction layers with React hooks and components, 
            handling complex transaction flows, token management displays, and cross-chain operations 
            with comprehensive error handling and user feedback UI.
          </li>
          <li>
            Integrated AI capabilities and AI agents into front-end applications, working with various 
            AI models to enhance user experiences, automate workflows, and provide intelligent 
            features within Web3 platforms.
          </li>
          <li>
            Collaborated with cross-functional teams and stakeholders to translate business 
            requirements into scalable front-end solutions, ensuring alignment between 
            product vision and user interface implementation.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Kontainer",
    designation: "Front-end Developer",
    duration: "05/2024 - 09/2024",
    companyImg: "kontainerlogo.png",
    stacks: ["Vue", "Nuxt 3", "Node.js", "MongoDB", "Express"],
    description: (
      <>
        <ul>
          <li>
            Built reusable UI components using Vue.js and Nuxt 3 to accelerate 
            development and improve user experience.
          </li>
          <li>
            Led front-end migration from Nuxt 1 to Nuxt 3, refactoring components 
            and resolving compatibility issues during the upgrade.
          </li>
          <li>
            Monitored application performance metrics and optimized front-end code 
            to ensure fast load times and smooth user interactions.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Optimum Partners",
    designation: "Front-end Developer",
    duration: "02/2024 - 05/2024",
    companyImg: "optimum_partners.jpeg",
    stacks: ["Angular", "JavaScript", "Material UI", "Scrum", "Kanban"],
    description: (
      <>
        <ul>
          <li>
            Developed front-end interfaces and components for Forbes website, implementing 
            responsive designs and interactive features using Angular and Material UI to 
            enhance user engagement and content delivery for one of the world&apos;s leading 
            business media platforms.
          </li>
          <li>
            Built reusable UI components and implemented front-end features for international 
            newspaper websites, creating intuitive interfaces and tools that improved content 
            management and user experience.
          </li>
          <li>
            Worked with US-based clients in an international setting, collaborating with 
            geographically diverse teams and stakeholders to deliver high-quality front-end 
            solutions.
          </li>
          <li>
            Participated in client meetings and demos to demonstrate product features, gather 
            feedback, and align front-end implementations with business requirements.
          </li>
          <li>
            Collaborated with Product Owners, Scrum Masters, and team members in Agile 
            environments (Scrum/Kanban), participating in sprint planning, daily stand-ups, 
            and sprint reviews to prioritize tasks and deliver features efficiently.
          </li>
          <li>
            Troubleshot front-end issues and optimized Angular applications for performance, 
            ensuring smooth user interactions and fast load times across different devices 
            and browsers.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Solicy",
    designation: "Full-stack Developer",
    duration: "09/2021 - 02/2024",
    companyImg: "solicy_logo.jpeg",
    stacks: ["React", "Vue", "Nuxt", "JavaScript", "Next.js", "Node.js", "NestJS", "OpenAI API", "Alpha Vantage API", "Yahoo Finance API"],
    description: (
      <>
        <ul>
          <li>
            Developed full-stack Web3 applications, building both front-end interfaces 
            and back-end services for blockchain-based projects, primarily focusing on 
            DeFi platforms and token investment systems.
          </li>
          <li>
            Built and maintained RESTful APIs and server-side logic using Node.js and 
            NestJS, handling data processing, authentication, and integration with 
            blockchain networks and external services.
          </li>
          <li>
            Created responsive front-end applications using React, Vue, Nuxt, and Next.js, 
            implementing Web3 wallet integrations, smart contract interactions, and 
            real-time data visualization for cryptocurrency and token trading platforms.
          </li>
          <li>
            Integrated third-party APIs including OpenAI API for AI-powered document 
            generation, Alpha Vantage API and Yahoo Finance API for real-time financial 
            data and market analytics in Fintech applications.
          </li>
          <li>
            Developed full-stack solutions for various projects including a Fintech platform 
            for investing with tokens and coins, an AI-powered document generator, an 
            online travel agency website, and a social network platform.
          </li>
          <li>
            Implemented end-to-end features from database design to API development and 
            front-end implementation, ensuring seamless integration between client and 
            server-side components while maintaining code quality and performance.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Upwork",
    designation: "Junior Front-end Developer",
    duration: "09/2020 - 09/2021",
    companyImg: "upwork.png",
    stacks: ["React", "CSS", "HTML", "Bootstrap", "Tailwind CSS"],
    description: (
      <>
        <ul>
          <li>
            Developed reusable UI components and user interfaces using React, HTML, 
            CSS, Bootstrap, and Tailwind CSS, focusing on creating responsive and 
            visually appealing layouts for various web applications.
          </li>
          <li>
            Built simple and functional UI components including buttons, forms, 
            navigation bars, cards, and other common interface elements using React 
            and modern CSS frameworks.
          </li>
          <li>
            Implemented responsive designs ensuring applications work effectively 
            across different screen sizes and devices using CSS Grid, Flexbox, 
            and responsive utility classes.
          </li>
          <li>
            Collaborated with clients and team members to understand UI requirements, 
            translating design mockups into functional React components and ensuring 
            consistent styling across applications.
          </li>
          <li>
            Styled components using CSS, Bootstrap, and Tailwind CSS to match design 
            specifications, focusing on clean code and maintainable styling patterns.
          </li>
          <li>
            Tested and debugged UI components across different browsers and devices, 
            ensuring cross-browser compatibility and responsive design implementation.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Kontainer",
    image: "kontainer",
    link: "https://kontainer.com/da",
    source: null,
    description: "A comprehensive container management platform that helps businesses streamline their shipping and logistics operations. Features include real-time tracking, inventory management, and automated documentation processing.",
    stacks: ["Vue", "Nuxt 3", "Node.js", "MongoDB", "Express", "Docker", "AWS"],
  },
  {
    type: "WEB-APP",
    title: "SolIT Website",
    image: "solit",
    link: "https://solit-llc.com/",
    source: null,
    description: "Modern corporate website for SolIT LLC, showcasing their IT solutions and services. Includes service portfolios, team profiles, case studies, and contact integration for potential clients.",
    stacks: ["Next.js", "TypeScript", "Chakra UI", "Framer Motion", "Vercel"],
  },
  {
    type: "WEB-APP",
    title: "Dequity",
    image: "dequity",
    link: "https://dequity.io/?utm_content=light",
    source: null,
    description: "Decentralized equity platform enabling tokenization of traditional assets. Built for democratizing investment opportunities through blockchain technology and smart contracts.",
    stacks: ["React", "TypeScript", "Web3.js", "Ethers.js", "Tailwind CSS"],
  },
  {
    type: "WEB-APP",
    title: "Blocknite",
    image: "blocknite",
    link: "https://blocknite.vercel.app/",
    source: null,
    description: "Blockchain-based gaming platform combining NFT technology with interactive gaming experiences. Features include digital asset ownership, play-to-earn mechanics, and cross-game interoperability.",
    stacks: ["Next.js", "TypeScript", "Web3.js", "Tailwind CSS", "Vercel"],
  },
  {
    type: "WEB-APP",
    title: "YouMeme",
    image: "youmeme",
    link: "https://youmeme.com/",
    source: null,
    description: "Social media platform focused on meme creation and sharing. Implements AI-powered content generation, viral analytics, and community-driven content curation with monetization features.",
    stacks: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS S3", "OpenAI API", "Tailwind CSS"],
  },
  {
    type: "WEB-APP",
    title: "Passbase",
    image: "passbase",
    link: "https://parallelmarkets.com/?utm_source=passbase.com",
    source: null,
    description: "Identity verification and KYC platform for financial institutions. Provides secure, compliant user onboarding with advanced fraud detection and regulatory compliance tools.",
    stacks: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    type: "WEB-APP",
    title: "CryptoPool",
    image: "cryptopool",
    link: "https://www.cryptopool.money/",
    source: null,
    description: "Liquidity pool platform for cryptocurrency trading and yield farming. Features automated market making, impermanent loss protection, and multi-chain support for DeFi protocols.",
    stacks: ["React", "TypeScript", "Web3.js", "Ethers.js", "Tailwind CSS"],
  },
  {
    type: "WEB-APP",
    title: "Raizers",
    image: "raizer",
    link: "https://raize-front.web.app/",
    source: null,
    description: "Crowdfunding platform connecting innovative startups with investors. Includes project discovery, investment tracking, milestone-based funding, and comprehensive analytics dashboard.",
    stacks: ["Next.js", "Node.js", "NestJS", "Firebase", "Stripe API", "Chart.js", "MongoDB"],
  },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/davit-khachatryan1",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/davitkhachatryan11/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "mailto:davitkhachatryan25@gmail.com",
    icon: FaEnvelope,
    backgroundColor: "red.600",
    hoverColor: "red.500",
  },
  {
    href: "https://t.me/DavitKhachatryan",
    icon: FaTelegramPlane,
    backgroundColor: "blue.500",
    hoverColor: "blue.400",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
