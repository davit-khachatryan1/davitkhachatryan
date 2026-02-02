import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Davit Khachatryan | Front-end Developer",
    template: "%s | Davit Khachatryan",
  },
  description:
    "Davit Khachatryan - Front-end Developer with 5+ years of experience building high-performance web applications. Specializing in React, Next.js, TypeScript, Web3, and AI-enhanced development. View portfolio, projects, and professional experience.",
  keywords: [
    "Davit Khachatryan",
    "front-end developer",
    "front end developer",
    "web developer",
    "JavaScript developer",
    "TypeScript developer",
    "React developer",
    "Next.js developer",
    "React.js developer",
    "Node.js",
    "Web3 developer",
    "blockchain developer",
    "UI developer",
    "portfolio",
    "software engineer",
    "full stack developer",
    "web3 engineer",
    "AI developer",
  ],
  authors: [{ name: "Davit Khachatryan", url: siteUrl }],
  creator: "Davit Khachatryan",
  publisher: "Davit Khachatryan",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Davit Khachatryan | Front-end Developer | Web3 & React Specialist",
    description:
      "Front-end Developer with 5+ years of experience. Specializing in React, Next.js, TypeScript, Web3, and AI-enhanced development. View portfolio, projects, and professional experience.",
    siteName: "Davit Khachatryan",
    locale: "en_US",
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
    title: "Davit Khachatryan | Front-end Developer | Web3 & React Specialist",
    description:
      "Front-end Developer with 5+ years of experience. Specializing in React, Next.js, TypeScript, Web3, and AI-enhanced development.",
    images: [`${siteUrl}/images/ar-profile-transformed.png`],
    creator: "@davitkhachatryan", // Add your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: [
    { rel: "icon", url: Favicon.src },
    { rel: "apple-touch-icon", url: Favicon.src },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Davit Khachatryan",
    url: siteUrl,
    jobTitle: "Front-end Developer",
    description: "Front-end Developer with 5+ years of experience specializing in React, Next.js, TypeScript, Web3, and AI-enhanced development",
    knowsAbout: [
      "Front-end Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web3",
      "Blockchain",
      "UI/UX Design",
      "Node.js",
      "AI Development",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Software Development",
    },
    sameAs: [
      "https://github.com/davit-khachatryan1",
      "https://www.linkedin.com/in/davitkhachatryan11/",
    ],
    image: `${siteUrl}/images/ar-profile-transformed.png`,
  };

  return (
    <html lang="en" className="sr">
      <body className="body-theme">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload" id="">
          {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `}
        </Script>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
