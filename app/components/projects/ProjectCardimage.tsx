import Image from "next/image"

export default function ProjectCardImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl">
      <Image
        src={imageUrl}
        alt="project image"
        fill
        sizes="(min-width: 1024px) 600px, 100vw"
        className="object-cover"
      />
    </div>
  )
}