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
          Full stack developer building backend systems <span className="text-primary">that actually hold up</span>
        </h1>
        <p className="mt-4 text-sm xl:text-lg text-gray-600">
          I care less about whether the code runs and more about whether it survives contact with real users, proper data isolation, sane authorization, structure that doesn't collapse when a project grows. Every app I build is a chance to think like the systems underneath it.
        </p>
      </div>

      <div className='mt-6'>
        <HeroCta />
      </div>
      
    </>
  )
}