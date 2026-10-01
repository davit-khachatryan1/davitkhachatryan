import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.scss";
import { certificationsData } from "../utils/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export const viewport = {
  themeColor: "#111418",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Davit Khachatryan | Frontend Engineer & Applied AI Engineer",
    template: "%s | Davit Khachatryan",
  },
  description:
    "Davit Khachatryan - Frontend Engineer and Applied AI Engineer with 5+ years designing and owning production frontends in TypeScript and JavaScript, and building LLM integrations, AI agents and MCP-based workflows. Claude Certified Architect - Foundations.",
  keywords: [
    "Davit Khachatryan",
    "frontend engineer",
    "JavaScript engineer",
    "TypeScript",
    "applied AI engineer",
    "AI engineer",
    "AI agents",
    "LLM integrations",
    "Model Context Protocol",
    "MCP",
    "Claude Agent SDK",
    "Claude Certified Architect",
    "frontend architecture",
    "fintech dashboards",
    "Yerevan",
    "Armenia",
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
    title: "Davit Khachatryan | Frontend Engineer & Applied AI Engineer",
    description:
      "Frontend Engineer & Applied AI Engineer: scalable TypeScript frontends, LLM integrations, AI agents and MCP-based workflows. Claude Certified Architect - Foundations.",
    siteName: "Davit Khachatryan",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/images/ar-profile-transformed.png`,
        width: 1200,
        height: 630,
        alt: "Davit Khachatryan - Frontend Engineer & Applied AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davit Khachatryan | Frontend Engineer & Applied AI Engineer",
    description:
      "Frontend Engineer & Applied AI Engineer: scalable TypeScript frontends, LLM integrations, AI agents and MCP-based workflows. Claude Certified Architect - Foundations.",
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
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
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
    jobTitle: "Frontend Engineer & Applied AI Engineer",
    description:
      "Frontend Engineer and Applied AI Engineer with 5+ years designing and owning production frontends, building LLM integrations, AI agents and MCP-based workflows.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yerevan",
      addressCountry: "AM",
    },
    knowsAbout: [
      "Frontend Architecture",
      "TypeScript",
      "JavaScript",
      "React",
      "LLM Integrations",
      "AI Agents",
      "Model Context Protocol",
      "Claude Agent SDK",
      "Node.js",
      "Fintech",
    ],
    knowsLanguage: ["English", "Armenian", "Russian"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Yerevan State University",
    },
    hasCredential: certificationsData.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      recognizedBy: { "@type": "Organization", name: cert.issuer },
      ...(cert.url && { url: cert.url }),
    })),
    sameAs: [
      "https://github.com/davit-khachatryan1",
      "https://www.linkedin.com/in/davitkhachatryan11/",
    ],
    image: `${siteUrl}/images/ar-profile-transformed.png`,
  };

  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {gaId && (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script strategy="lazyOnload" id="ga-init">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
