import { Header } from './components/layouts';
import { Hero } from './components/hero';
import { About } from './components/about';

export default function Home() {
  return (
    <div className="min-h-screen p-2">

      <Header />

      <Hero />
      <About />
    </div>
  );
}
