import Image from "next/image"

export default function ProjectCardImage({imageUrl}: {imageUrl: string}) {
return (
  <>
    <Image 
      src={imageUrl}
      alt='project image'
      width={100}
      height={70}
      className="rounded-xl w-full h-vh object-fill"
    />
  </>
)
}