"use client";
import { Movie, MovieProps } from '@/components/Movie';
import ImageMovie from "../assets/movie.png";
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
export default function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    api
      .get('/api/movie') // Assuming the API endpoint to fetch movies is /api/movies
      .then((response) => {
        setMovies(response.data); // Assuming the API returns an array of movie objects
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
    <div className='container mx-auto grid grid-cols-3 gap-8'>
      {movies.map((movie) => (
        <Movie
          key={movie.id} // Make sure to provide a unique key for each movie
          image={movie.image} // Replace with the actual movie image URL from the API response
          title={movie.title}
          type={movie.type}
          duration={movie.duration}
          rank={movie.rank}
          description={movie.description}
          cast={movie.cast}
          director={movie.director}
          formats={movie.formats}
          day={movie.day}
        />
      ))}

      {/* <Movie src={ImageMovie} title="Homem Aranha" type="Ação" duration="144 min" formats={["LEG", "DUB"]} rank={"10"} />
      <Movie src={ImageMovie} title="Homem Aranha" type="Ação" duration="144 min" formats={["LEG", "3D"]} rank={"10"}/> */}
    </div>
  )
}
