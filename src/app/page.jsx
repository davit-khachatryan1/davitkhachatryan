import Sidebar from "../components/Sidebar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Resume from "../components/sections/Resume";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import { links, testimonialsData } from "../utils/constants";

export default function Home() {
  const navLinks = links.filter(
    (link) => link.id !== "testimonial" || testimonialsData.length > 0
  );

  return (
    <>
      <Sidebar links={navLinks} />
      <div className="main">
        <main>
          <Hero />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
