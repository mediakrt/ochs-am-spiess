import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
