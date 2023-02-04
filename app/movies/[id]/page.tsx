"use client";
import { useGetSingleMovie } from "@/hooks/useGetSingleMovie";

export default function Movie({ params }: any) {
  const { id } = params;
  const movie = useGetSingleMovie(id);

  return (
    <article>
      <h1>{movie.data?.title}</h1>
      <h2>{movie.data?.overview}</h2>
    </article>
  );
}
