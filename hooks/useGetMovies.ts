export function useGetMovies() {
  const APP_MOVIES_API_KEY = process.env.NEXT_PUBLIC_APP_MOVIES_API_KEY;

  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${APP_MOVIES_API_KEY}`
  ).then((res) => res.json());
}
