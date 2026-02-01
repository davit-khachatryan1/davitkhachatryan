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
  },
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumeLayout({ children }) {
  return <>{children}</>;
}
