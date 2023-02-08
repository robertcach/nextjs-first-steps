import { useGetSingleMovie } from "@/hooks/useGetSingleMovie";

export default async function Movie({ params }: any) {
  const { id } = params;
  const movie = await useGetSingleMovie(id);

  return (
    <article>
      <h1>{movie.title}</h1>
      <h2>{movie.overview}</h2>
    </article>
  );
}
