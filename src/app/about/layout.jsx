const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export const metadata = {
  title: "About | Davit Khachatryan",
  description:
    "Learn about Davit Khachatryan, a Front-end Developer with 5+ years of experience. Specializing in React, Next.js, TypeScript, Web3, and AI-enhanced development. View professional background, skills, and interests.",
  keywords: [
    "Davit Khachatryan",
    "about Davit Khachatryan",
    "front-end developer",
    "React developer",
    "Web3 developer",
    "developer portfolio",
    "software engineer",
  ],
  openGraph: {
    title: "About Davit Khachatryan | Front-end Developer",
    description:
      "Front-end Developer with 5+ years of experience. Specializing in React, Next.js, TypeScript, Web3, and AI-enhanced development.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: `${siteUrl}/images/ar-profile-transformed.png`,
        width: 1200,
        height: 630,
        alt: "Davit Khachatryan - Front-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Davit Khachatryan | Front-end Developer",
    description:
      "Front-end Developer with 5+ years of experience. Specializing in React, Next.js, TypeScript, Web3, and AI-enhanced development.",
    images: [`${siteUrl}/images/ar-profile-transformed.png`],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
