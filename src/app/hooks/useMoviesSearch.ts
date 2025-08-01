import { useSearchMoviesQuery } from '@/api/moviesApi.ts';

const useMoviesSearch = (searchTerm: string) => {

  const { data, isLoading, error, isFetching } = useSearchMoviesQuery(
    { query: searchTerm },
    { skip: !searchTerm },
  );

  const hasNoResults = !isLoading &&
    !error && Array.isArray(data?.docs)
    && data?.docs.length === 0;

  const movies = data?.docs;

  const isError = !!error;

  return { data, isLoading, error, movies, hasNoResults, isError, isFetching };
};

export default useMoviesSearch;
