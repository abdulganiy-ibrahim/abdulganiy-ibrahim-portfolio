import { Header } from './components/layouts';
import { Hero } from './components/hero';
import { About } from './components/about';

export default function Home() {
  return (
    <div className="min-h-screen py-2 px-4">

      <Header />

      <Hero />
      <About />

    </div>
  );
}
