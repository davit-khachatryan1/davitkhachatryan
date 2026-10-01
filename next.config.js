const sectionRedirects = {
  "/about": "about",
  "/skills": "resume",
  "/experience": "resume",
  "/resume": "resume",
  "/projects": "portfolio",
  "/contact": "contact",
};

/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      ...Object.entries(sectionRedirects).map(([source, id]) => ({
        source,
        destination: `/#${id}`,
        permanent: true,
      })),
      {
        source: "/files/About-Davit.pdf",
        destination: "/files/Davit-Khachatryan-CV.pdf",
        permanent: true,
      },
    ];
  },
};
