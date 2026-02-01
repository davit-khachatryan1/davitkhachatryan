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
    company: "Freelance",
    designation: "Front-end Web3 Developer",
    duration: "02/2024 - Present",
    companyImg: "freelance.jpeg",
    stacks: ["Wagmi", "Ethers.js", "Web3.js", "Solana Web3.js", "Solidity"],
    description: (
      <>
        <ul>
          <li>
            Helped teams build programs and systems, serving business needs.
          </li>
          <li>Implemented Web3 solutions into front-end.</li>
          <li>
            Fully covered front-end implementations from blockchain and Web3
            tools into NFT minting app.
          </li>
          <li>
            Worked closely with business stakeholders to identify requirements
            and develop solutions accordingly.
          </li>
          <li>
            Troubleshot minor problems and reported larger technical issues.
          </li>
          <li>
            Used Web3 tools such as wagmi, ethers.js, and others to integrate
            blockchain functionality. Worked with Ethereum-based solutions,
            interacting with smart contracts and handling transactions, as well
            as utilizing Solana Web3.js library for interacting with the Solana
            blockchain, enabling seamless wallet integration, transaction
            signing, and token management. Integrated various Web3 tools to
            support multi-chain interactions, enhancing blockchain
            interoperability.
          </li>
          <li>Started learning Solidity.</li>
        </ul>
      </>
    ),
  },
  {
    company: "Optimum Partners",
    designation: "Front-end Developer",
    duration: "02/2024 - 05/2024",
    companyImg: "optimum_partners.jpeg",
    stacks: [],
    description: (
      <>
        <ul>
          <li>Working with US-based clients in an international setting. ·</li>
          <li>
            Taking part in client meetings and demos to demonstrate product
            features and gain insights.
          </li>
          <li>
            Participating in sprint planning, sprint reviews, daily stand-ups,
            and other Agile rituals. ·
          </li>
          <li>
            I am collaborating with Product Owners, Scrum Masters, and team
            members to prioritize tasks and deliver features.
          </li>
          <li>
            I am working with geographically diverse teams and stakeholders.
          </li>
          <li>
            I&apos;m working on international newspaper&apos;s website and
            it&apos;s providing tools.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Solicy",
    designation: "Front-end Developer",
    duration: "09/2022 - 02/2024",
    companyImg: "solicy_logo.jpeg",
    stacks: ["JavaScript", "OpenAI API"],
    description: (
      <>
        <ul>
          <li>
            Developing and maintaining web and mobile applications using
            JavaScript, and other relevant programming languages and frameworks.
          </li>
          <li>
            Implementing responsive design and cross-browser compatibility
            ensures that applications work effectively on all devices and
            platforms.
          </li>
          <li>
            Troubleshooting and debugging frontend code to ensure it works
            properly across different devices and platforms.
          </li>
          <li>
            Some big projects I&apos;ve worked on are the back-end and front-end
            parts of the Fintech project designed for investing with tokens and
            coins, a document generator project that used the OpenAI API, an
            online travel agency&apos;s website, and a state-of-the-art social
            network platform designed to deliver joy on demand.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Upwork",
    designation: "Front-end Developer",
    duration: "05/2019 - 09/2022",
    companyImg: "upwork.png",
    stacks: ["Web3", "OpenAI API", "Alpha Vantage API", "Yahoo Finance API"],
    description: (
      <>
        <ul>
          <li>
            Involved in project plan meetings with clients, and team members to
            analyze business requirements.
          </li>
          <li>
            Building, testing, and deploying software applications and features.
          </li>
          <li>
            Some big projects I&apos;ve worked on are the front-end parts of the
            Web3 project designed for revolutionizing the real estate investment
            landscape: leveraged blockchain, cryptocurrency, and NFT
            technologies, Fintech project based on alpha vantage API and Yahoo
            finance API, working on algorithms that do calculations for best
            investment projects. Also, I created an AI Chat app based on openAI
            API, which is for education industry.
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
    stacks: ["React", "Node.js", "MongoDB", "Express", "Docker", "AWS"],
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
    stacks: ["React", "Web3.js", "Ethereum", "Solidity", "IPFS", "Hardhat"],
  },
  {
    type: "WEB-APP",
    title: "Blocknite",
    image: "blocknite",
    link: "https://blocknite.vercel.app/",
    source: null,
    description: "Blockchain-based gaming platform combining NFT technology with interactive gaming experiences. Features include digital asset ownership, play-to-earn mechanics, and cross-game interoperability.",
    stacks: ["Next.js", "Solana", "Web3.js", "Three.js", "IPFS", "Vercel"],
  },
  {
    type: "WEB-APP",
    title: "YouMeme",
    image: "youmeme",
    link: "https://youmeme.com/",
    source: null,
    description: "Social media platform focused on meme creation and sharing. Implements AI-powered content generation, viral analytics, and community-driven content curation with monetization features.",
    stacks: ["React", "Node.js", "PostgreSQL", "Redis", "AWS S3", "OpenAI API"],
  },
  {
    type: "WEB-APP",
    title: "Passbase",
    image: "passbase",
    link: "https://parallelmarkets.com/?utm_source=passbase.com",
    source: null,
    description: "Identity verification and KYC platform for financial institutions. Provides secure, compliant user onboarding with advanced fraud detection and regulatory compliance tools.",
    stacks: ["React", "Python", "Django", "PostgreSQL", "AWS", "Machine Learning"],
  },
  {
    type: "WEB-APP",
    title: "CryptoPool",
    image: "cryptopool",
    link: "https://www.cryptopool.money/",
    source: null,
    description: "Liquidity pool platform for cryptocurrency trading and yield farming. Features automated market making, impermanent loss protection, and multi-chain support for DeFi protocols.",
    stacks: ["React", "Solidity", "Web3.js", "The Graph", "IPFS", "Polygon"],
  },
  {
    type: "WEB-APP",
    title: "Raizers",
    image: "raizer",
    link: "https://raize-front.web.app/",
    source: null,
    description: "Crowdfunding platform connecting innovative startups with investors. Includes project discovery, investment tracking, milestone-based funding, and comprehensive analytics dashboard.",
    stacks: ["Vue.js", "Firebase", "Stripe API", "Chart.js", "Node.js", "MongoDB"],
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
