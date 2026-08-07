import { Header } from './components/layouts';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Journey } from './components/journey';
import { Technologies } from './components/technologies';
import { Projects } from './components/projects';

export default function Home() {
  return (
    <div className="min-h-screen p-2">

      <Header />

      <Hero />
      <About />
      <Journey />
      <Technologies />
      <Projects />
    </div>
  );
}
