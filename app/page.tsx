import { 
  Header, Hero, About, Journey, Technologies, Experiences, Projects, Education, Contact, Footer 
} from './components/sections'

export default function Home() {
  return (
    <div className="min-h-screen p-2">
      <Header />

      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Technologies />
      <Journey />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
