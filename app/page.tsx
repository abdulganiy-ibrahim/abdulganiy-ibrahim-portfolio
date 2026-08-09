import { Header } from './components/layouts';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Journey } from './components/journey';
import { Technologies } from './components/technologies';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { BrandLogoSvg } from './components/ui';

export default function Home() {
  return (
    <div className="min-h-screen p-2">

      <Header />

      <Hero />
      <About />
      <Journey />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
