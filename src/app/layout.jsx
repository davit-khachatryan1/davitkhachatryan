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
    "Front-end developer specializing in modern web apps, Web3, and product-driven UI. Explore Davit's portfolio, projects, and experience.",
  keywords: [
    "Davit Khachatryan",
    "front-end developer",
    "web developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Web3",
    "portfolio",
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
    url: "/",
    title: "Davit Khachatryan | Front-end Developer",
    description:
      "Modern web apps, Web3, and product-driven UI. View Davit's projects, skills, and experience.",
    siteName: "Davit Khachatryan",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Davit Khachatryan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davit Khachatryan | Front-end Developer",
    description:
      "Modern web apps, Web3, and product-driven UI. View Davit's projects, skills, and experience.",
    images: ["/images/profile.png"],
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
    sameAs: [
      "https://github.com/davit-khachatryan1",
      "https://www.linkedin.com/in/davitkhachatryan11/",
    ],
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
