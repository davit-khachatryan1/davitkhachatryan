const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export const metadata = {
  title: "Skills | Davit Khachatryan",
  description:
    "Technical skills and expertise of Davit Khachatryan. Front-end development with React, Next.js, TypeScript, Web3, State Management (Redux, Zustand), and modern web technologies.",
  keywords: [
    "Davit Khachatryan skills",
    "React skills",
    "Next.js skills",
    "TypeScript skills",
    "Web3 skills",
    "front-end developer skills",
    "JavaScript skills",
  ],
  openGraph: {
    title: "Skills | Davit Khachatryan - Front-end Developer",
    description:
      "Technical skills in React, Next.js, TypeScript, Web3, and modern web development technologies.",
    url: `${siteUrl}/skills`,
    type: "website",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsLayout({ children }) {
  return <>{children}</>;
}
