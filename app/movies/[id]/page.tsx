import { useGetSingleMovie } from "@/hooks/useGetSingleMovie";
import { Movie as SingleMovie } from "@/interfaces/general";
import { IMAGE_PATH } from "@/app/constants";
import Image from "next/image";

export default async function Movie({ params }: any) {
  const { id } = params;
  const movie: SingleMovie = await useGetSingleMovie(id);

  return (
    <article>
      <h1>{movie.title}</h1>
      <h2>{movie.overview}</h2>
      <Image
        src={IMAGE_PATH + movie.poster_path}
        alt={movie.title}
        width={600}
        height={600}
      />
    </article>
  );
}
