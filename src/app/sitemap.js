const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davitkhachatryan.vercel.app";

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/skills", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
    { path: "/experience", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resume", priority: 0.7, changeFrequency: "monthly" },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
