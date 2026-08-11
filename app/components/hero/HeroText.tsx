import HeroCta from './HeroCta';

export default function HeroText() {
  return (
    <>
      <div className="w-50 mb-4 flex items-center justify-center gap-2 shadow-emerald rounded-full p-2">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        <p className='text-sm'>
          Abdulganiy Ibrahim
        </p>
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold font-heading">
          Building scalable web applications with clean code and & <span className="text-primary">great user experiences</span>
        </h1>
        <p className="mt-4 text-sm xl:text-lg text-gray-600">
          I don't build software just to make it work. I build to understand why it works. Every project deepens my understanding of architecture, APIs, databases, and thoughtful user experiences.
        </p>
      </div>

      <div className='mt-6'>
        <HeroCta />
      </div>
      
    </>
  )
}