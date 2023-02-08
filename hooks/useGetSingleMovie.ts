export function useGetSingleMovie(id: string) {
  const APP_MOVIES_API_KEY = process.env.NEXT_PUBLIC_APP_MOVIES_API_KEY;

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${APP_MOVIES_API_KEY}&language=en-US`
  ).then((res) => res.json());
}
