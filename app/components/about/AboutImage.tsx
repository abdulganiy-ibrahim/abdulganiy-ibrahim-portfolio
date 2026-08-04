import Image from 'next/image';
import codingImage from '@/public/codingImage.jpg'

export default function AboutImage() {
  return (
      <Image 
        src={codingImage}
        alt='coding image'
        priority
        className='w-100 h-70 object-fit rounded-2xl shadow-card'
      />
  )
}