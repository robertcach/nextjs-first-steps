import { useGetMovies } from "@/hooks/useGetMovies";
import Link from "next/link";

export default async function Movies() {
  const movies = await useGetMovies();

  return (
    <>
      <h1 className="text-xl font-bold ">Aquí mostramos las películas</h1>
      <ul>
        {movies?.results?.map((movie: any, index: number) => (
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
