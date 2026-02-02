const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export const metadata = {
  title: "Resume | Davit Khachatryan",
  description:
    "Download Davit Khachatryan's resume/CV. Front-end Developer with 5+ years of experience in React, Next.js, TypeScript, Web3, and modern web development.",
  keywords: [
    "Davit Khachatryan resume",
    "Davit Khachatryan CV",
    "front-end developer resume",
    "React developer resume",
    "developer CV",
  ],
  openGraph: {
    title: "Resume | Davit Khachatryan - Front-end Developer",
    description:
      "Download resume/CV of Davit Khachatryan, Front-end Developer with 5+ years of experience.",
    url: `${siteUrl}/resume`,
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
    title: "Resume | Davit Khachatryan - Front-end Developer",
    description:
      "Download resume/CV of Davit Khachatryan, Front-end Developer with 5+ years of experience.",
    images: [`${siteUrl}/images/ar-profile-transformed.png`],
  },
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumeLayout({ children }) {
  return <>{children}</>;
}
