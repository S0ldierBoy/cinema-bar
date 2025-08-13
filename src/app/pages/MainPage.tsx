import { useEffect } from 'react';
import MovieSearchInput from '@/app/components/MovieSearchInput.tsx';
import MovieResult from '@/app/components/MovieResults.tsx';
import Loader from '@/app/features/Loader.jsx';
import { useLazySearchMoviesQuery } from '@/api/moviesApi.ts';
import { toast } from 'react-toastify';

const MainPage = () => {
  const [trigger, { data, isFetching, error }] = useLazySearchMoviesQuery();

  useEffect(() => {
    if (!error) return;
    toast('Ошибка сети', {
      type: 'error',
      theme: 'dark',
    });
  }, [error]);

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
