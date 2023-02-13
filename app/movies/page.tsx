import { useGetMovies } from "@/hooks/useGetMovies";
import { MovieResponse } from "@/interfaces/general";
import Link from "next/link";

export default async function Movies() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const getMovies: MovieResponse = await useGetMovies();
  const { results: movies } = getMovies;

  return (
    <>
      <h1 className="text-xl font-bold ">Aquí mostramos las películas</h1>
      <ul>
        {movies?.map((movie: any) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
