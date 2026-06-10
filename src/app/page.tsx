import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import About from "./sections/About";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <About />
      <CTA/>
      <FAQ/>
      <Footer />
    </div>
  );
}
