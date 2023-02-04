"use client";
import { useGetMovies } from "@/hooks/useGetMovies";
import Link from "next/link";

export default function Movies() {
  const { data } = useGetMovies();

  return (
    <>
      <h1 className="text-xl font-bold ">Aquí mostramos las películas</h1>
      <ul>
        {data?.results?.map((movie: any, index: number) => (
          <li key={index}>
            <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
