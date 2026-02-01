const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export const metadata = {
  title: "Projects | Davit Khachatryan",
  description:
    "Explore Davit Khachatryan's portfolio of web applications and projects. Built with React, Next.js, Node.js, Web3 technologies, and modern frameworks. View live demos and source code.",
  keywords: [
    "Davit Khachatryan projects",
    "React projects",
    "Next.js projects",
    "Web3 projects",
    "portfolio projects",
    "web development projects",
    "front-end projects",
  ],
  openGraph: {
    title: "Projects | Davit Khachatryan - Front-end Developer",
    description:
      "Explore web applications and projects built with React, Next.js, Web3, and modern frameworks.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({ children }) {
  return <>{children}</>;
}
