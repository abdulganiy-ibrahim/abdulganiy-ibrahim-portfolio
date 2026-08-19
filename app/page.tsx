import { 
  Header, Hero, About, Journey, Technologies, Projects, Contact, Footer 
} from './components/sections'

export default function Home() {
  return (
    <div className="min-h-screen p-2">

      <Header />
      
      <main className='pt-24'>
        <Hero />
        <About />
        <Journey />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
