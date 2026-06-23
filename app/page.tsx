import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import Services from './components/Services';
import Partners from './components/Partners';
import About from './components/About';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import FunFactor from './components/FunFactor';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Features />
      <Services />
      <Partners />
      <About />
      <Testimonials />
      <WhyChooseUs />
      <Gallery />
      <FunFactor />
      <Contact />
    </main>
  );
}
