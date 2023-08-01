import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Formats } from './Formats'
import { Rank } from './Rank'

interface MovieProps{
  title: string,
  type: string,
  src: StaticImageData,
  duration: string,

  formats: string[],
  rank: string,
}
export function Movie({title, type, src, duration, formats, rank}: MovieProps){
  return(
    <div className='py-8 px-4 border-gray-800 border-2 rounded-md flex gap-8 align-top'>
      <Image src={src} 
        alt="Movie Image"
        width={150}
        height={48}
        priority
      />

      <div className='w-full flex justify-between flex-col'>
        <div>
          <p className='text-2xl font-bold'>{title}</p>
          <p className='text-sm'>{type}</p>
          <div className='flex flex-row gap-1'>
            <Formats valueFormat={formats}/>
            <Rank valueRank={rank}/>
          </div>
        </div>
        <p className='text-gray-400'>{duration}</p>
        <div className='text-center'>
          <Link href="#" className='text-lg py-2 bg-gray-800 rounded-md block w-full'>Sessões</Link>
        </div>
      </div>

    </div>
  )
}