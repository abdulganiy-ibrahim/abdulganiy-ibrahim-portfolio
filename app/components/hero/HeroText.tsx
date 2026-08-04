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
        <h1 className="text-4xl font-bold font-heading">
          Building scalable web applications with clean code and & <span className="text-primary">great user experiences</span>
        </h1>
        <p className="mt-4 text-sm text-gray-600">
          I don't enjoy building software just because it works. I enjoy understanding why it works.
          Every project I build is an opportunity to learn something deeper, whether that's backend architecture, databases, APIs, or creating interfaces that feel thoughtful and polished. I'm constantly refining not only my code, but also the way I think about building software.
        </p>
      </div>

      <div className='mt-6'>
        <HeroCta />
      </div>
      
    </>
  )
}