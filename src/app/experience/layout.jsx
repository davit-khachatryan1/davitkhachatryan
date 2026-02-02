const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export const metadata = {
  title: "Experience | Davit Khachatryan",
  description:
    "Professional experience of Davit Khachatryan. 5+ years as a Front-end Developer working on Web3 projects, fintech applications, and modern web platforms. Experience at ODev Tech, Optimum Partners, Solicy, and Upwork.",
  keywords: [
    "Davit Khachatryan experience",
    "front-end developer experience",
    "Web3 developer experience",
    "React developer experience",
    "software engineer experience",
    "developer work history",
  ],
  openGraph: {
    title: "Experience | Davit Khachatryan - Front-end Developer",
    description:
      "5+ years of professional experience as a Front-end Developer specializing in Web3, React, and modern web applications.",
    url: `${siteUrl}/experience`,
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
    title: "Experience | Davit Khachatryan - Front-end Developer",
    description:
      "5+ years of professional experience as a Front-end Developer specializing in Web3, React, and modern web applications.",
    images: [`${siteUrl}/images/ar-profile-transformed.png`],
  },
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperienceLayout({ children }) {
  return <>{children}</>;
}
