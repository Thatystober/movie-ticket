"use client";
import { Movie, MovieProps } from '@/components/Movie';
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import RootLayout from './layout';

export default function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    api
      .get('/api/movie')
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching movies');
        setLoading(false);
      });
  }, []);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  
  return (
    <RootLayout>
      <div className='container mx-auto grid grid-cols-3 gap-8'>
        {movies.map((movie) => (
          <Movie
          key={movie.id} 
          image={movie.image}
          title={movie.title}
          type={movie.type}
          duration={movie.duration}
          rank={movie.rank}
          description={movie.description}
          cast={movie.cast}
          director={movie.director}
          formats={movie.formats}
          day={movie.day}
          path={`/movies/${movie.id}`}
          />
          ))}
      </div>
    </RootLayout>
  )
}
