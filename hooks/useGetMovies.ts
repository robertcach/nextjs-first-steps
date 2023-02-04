import useSWR from "swr";
const fetcher = (url: any) => fetch(url).then((res) => res.json());

export function useGetMovies() {
  const APP_MOVIES_API_KEY = process.env.NEXT_PUBLIC_APP_MOVIES_API_KEY;

  const { data, error } = useSWR<any>(
    `https://api.themoviedb.org/3/movie/popular?api_key=${APP_MOVIES_API_KEY}`,
    fetcher
  );

  return { data, isLoading: !error && !data, isError: error };
}
