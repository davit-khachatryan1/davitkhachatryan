import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

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
  return <ClientRootLayout>{children}</ClientRootLayout>
}
