const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/skills", priority: 0.8 },
    { path: "/projects", priority: 0.8 },
    { path: "/experience", priority: 0.8 },
    { path: "/resume", priority: 0.6 },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
