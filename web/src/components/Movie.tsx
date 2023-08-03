import Image from 'next/image'
import Link from 'next/link'
import { Formats, FormatsProps } from './Formats'
import { Rank } from './Rank'

import { useEffect, useState } from 'react';
import { api } from '../lib/axios';

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
  };
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
  day
}: MovieProps ){

  const [movieData, setMovieData] = useState<MovieProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get(`/api/movie`, {
        params: {
          id: id,
          image: image,
          title: title,
          type: type,
          duration: duration,
          rank: rank,
          description: description,
          cast: cast,
          director: director,
          formats: formats,
          day: day
        },
      })
      .then((response) => {
        setMovieData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching movie data');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movieData) {
    return null; // Return null or some placeholder for no data
  }

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