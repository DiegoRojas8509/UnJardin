import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Catalog />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
