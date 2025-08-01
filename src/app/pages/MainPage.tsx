import { useState } from 'react';
import useMoviesSearch from '@/app/hooks/useMoviesSearch.ts';
import MovieSearchInput from '@/app/components/MovieSearchInput.tsx';
import MovieResult from '@/app/components/MovieResults.tsx';
import Loader from '@/app/features/Loader.jsx';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error, movies, hasNoResults, isError, isFetching } = useMoviesSearch(searchTerm);

  return (
    <>
      <section>
        <MovieSearchInput onSearch={setSearchTerm} />
      </section>
      {isFetching && <Loader />}
      <section>
        <MovieResult movies={movies} hasNoResults={hasNoResults} />
      </section>
    </>
  );
};

export default MainPage;
