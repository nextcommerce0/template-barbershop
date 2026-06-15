import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import CTA from "./sections/CTA";
import Location from "./sections/Location";
import Gallery from "./sections/Gallery";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <CTA />
      <Location />
      <Footer />
    </div>
  );
}
