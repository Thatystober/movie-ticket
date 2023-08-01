"use client";
import { Movie } from '@/components/Movie';
import ImageMovie from "../assets/movie.png";
export default function Home() {
  return (
    <div className='container mx-auto grid grid-cols-3 gap-8'>
      <Movie src={ImageMovie} title="Homem Aranha" type="Ação" duration="144 min" formats={["LEG", "DUB"]} rank={"10"} />
      <Movie src={ImageMovie} title="Homem Aranha" type="Ação" duration="144 min" formats={["LEG", "3D"]} rank={"10"}/>
    </div>
  )
}
