import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";
import Script from "next/script";

export const metadata = {
  title: "Davit Khachatryan | Software Engineer",
  description:
  "Welcome to Davit's Software Engineering Portfolio. Explore a diverse range of projects and see how I can bring your ideas to life. Let's connect and discuss your next venture!",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "best portfolio",
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sr">
      <body
        style={{
          backgroundColor: "#142341",
        }}
      >
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
