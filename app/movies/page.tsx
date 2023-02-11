import { useGetMovies } from "@/hooks/useGetMovies";
import { MovieResponse } from "@/interfaces/general";
import Link from "next/link";

export default async function Movies() {
  const getMovies: MovieResponse = await useGetMovies();
  const { results: movies } = getMovies;

  return (
    <>
      <h1 className="text-xl font-bold ">Aquí mostramos las películas</h1>
      <ul>
        {movies?.map((movie: any, index: number) => (
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
