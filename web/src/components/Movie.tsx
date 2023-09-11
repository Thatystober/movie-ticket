import Image from 'next/image'
import Link from 'next/link'
import { Formats, FormatsProps } from './Formats'
import { Rank } from './Rank'

export interface MovieProps {
  id?:number,
  image: string;
  title: string;
  type: string;
  duration: string;
  rank: string;
  description: string;
  cast: string;
  director: string;
  formats: FormatsProps['valueFormat'],
  day: {
    id: number;
    date: string;
    weekday: string;
    time: string[];
  },
  path: string
}
export function Movie({
  id,
  image,
  title, 
  type, 
  duration, 
  rank, 
  description, 
  cast, 
  director, 
  formats, 
  day,
  path
}: MovieProps ){

  return(
    <div className='py-8 px-4 border-gray-800 border-2 rounded-md flex gap-8 align-top'>
      <Image src={image} 
        alt="Movie Image"
        width={150}
        height={48}
        priority
      />

      <div className='w-full flex justify-between flex-col'>
        <div>
          <p className='text-2xl font-bold'>{title}</p>
          <p className='text-sm'>{type}</p>
          <div className='flex flex-row gap-1 flex-wrap items-start mt-4'>
            <Formats valueFormat={formats}/>
            <Rank valueRank={rank}/>
          </div>
        </div>
        <p className='text-gray-400'>{duration}</p>
        <div className='text-center'>
          <Link href={path} className='text-lg py-2 bg-gray-800 rounded-md block w-full'>Sessões</Link>
        </div>
      </div>

    </div>
  )
}