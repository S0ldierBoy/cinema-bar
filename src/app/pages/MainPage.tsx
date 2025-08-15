import MovieSearchInput from '@/app/components/MovieSearchInput.tsx';
import MovieResult from '@/app/components/MovieResults.tsx';
import Loader from '@/app/features/Loader.jsx';
import { useLazySearchMoviesQuery } from '@/api/moviesApi.ts';
import useMovieSearchToasts from '@/app/hooks/useMovieSearchToasts.ts';

const MainPage = () => {
  const [trigger, { data, isFetching, error }] = useLazySearchMoviesQuery();
  const isEmpty = data?.docs.length === 0;

  useMovieSearchToasts({ isFetching, error, isEmpty });

  return (
    <>
      {isFetching && <Loader />}
      <section>
        <MovieSearchInput
          isFetching={isFetching}
          onSearch={(name: string) => trigger({ query: name })}
        />
      </section>
      <section>
        <MovieResult data={data} />
      </section>
    </>
  );
};

export default MainPage;
