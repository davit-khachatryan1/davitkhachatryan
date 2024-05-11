import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaVuejs,
  FaAngular,
} from "react-icons/fa";

import { DiMongodb } from "react-icons/di";

import { TbBrandReactNative } from "react-icons/tb";

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
import { GiArtificialIntelligence } from "react-icons/gi";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
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
    name: "Python",
    icon: FaPython,
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
    name: "Markdown",
    icon: BsMarkdown,
  },
];

export const workData = [
  {
    company: "Optimum Partners",
    designation: "Full-stack Developer",
    duration: "02/2024 - present",
    companyImg: "optimum_partners.jpeg",
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
            I&apos;m working on international newspaper&apos;s website and it&apos;s providing
            tools.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Solicy",
    designation: "Full-stack Developer",
    duration: "09/2022 - 02/2024",
    companyImg: "solicy_logo.jpeg",
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
    designation: "Full-stack Developer",
    duration: "05/2019 - present",
    companyImg: "upwork.png",
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
            Some big projects I&apos;ve worked on are the front-end parts of the Web3
            project designed for revolutionizing the real estate investment
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
  },
  {
    type: "WEB-APP",
    title: "SolIT Website",
    image: "solit",
    link: "https://solit-llc.com/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Dequity",
    image: "dequity",
    link: "https://dequity.io/?utm_content=light",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Blocknite",
    image: "blocknite",
    link: "https://blocknite.vercel.app/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "YouMeme",
    image: "youmeme",
    link: "https://youmeme.com/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Passbase",
    image: "passbase",
    link: "https://parallelmarkets.com/?utm_source=passbase.com",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "CryptoPool",
    image: "cryptopool",
    link: "https://www.cryptopool.money/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Raizers",
    image: "raizer",
    link: "https://raize-front.web.app/",
    source: null,
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
