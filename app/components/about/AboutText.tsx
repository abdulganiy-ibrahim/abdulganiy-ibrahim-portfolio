import AboutCard from "./AboutCard";

export default function AboutText() {
  return (
    <>
      <p className="text-sm text-primary font-semibold">About me</p>

      <div className="space-y-4 mt-2">
        <h1 className="text-4xl xl:text-5xl font-bold font-heading">I Build Backends I'd Trust With Real Data</h1>

        <p className="text-sm xl:text-lg text-gray-600">
          I got into development through the frontend: HTML, CSS, React. But what pulled me in deeper was the backend: how data gets structured, who's allowed to touch what, and why one schema decision saves you six months later. On Sellora, that meant designing multi-tenancy from the ground up rather than bolting it on, so every store, product, and order stayed scoped correctly and one business's data never leaked into another's.
          <br></br>
          I'm still early in my career, but I don't treat that as an excuse to skip the hard parts. I'd rather spend an extra day getting authorization right than ship something that "works" until it doesn't.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        <AboutCard />
      </div>
    
    </>
  )
}