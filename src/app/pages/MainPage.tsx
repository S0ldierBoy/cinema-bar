import MovieSearchInput from '@/app/components/MovieSearchInput.tsx';
import MovieResult from '@/app/components/MovieResults.tsx';
import Loader from '@/app/features/Loader.jsx';
import { useLazySearchMoviesQuery } from '@/api/moviesApi.ts';

const MainPage = () => {
  const [trigger, { data, isFetching, error }] = useLazySearchMoviesQuery();

  return (
    <>
      {isFetching && <Loader />}
      <section>
        <MovieSearchInput onSearch={(name: string) => trigger({ query: name })} />
      </section>
      <section>
        <MovieResult data={data} />
      </section>
    </>
  );
};

export default MainPage;
