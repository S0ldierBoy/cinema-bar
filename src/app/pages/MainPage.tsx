import MovieSearchInput from '@/app/components/MovieSearchInput.tsx';
import MovieResult from '@/app/components/MovieResults.tsx';
import Loader from '@/app/features/Loader.jsx';
import { useLazySearchMoviesQuery } from '@/api/moviesApi.ts';
import useMovieSearchToasts from '@/app/hooks/useMovieSearchToasts.ts';
import { useState } from 'react';
import Modal from '@/app/components/Modal.tsx';

const MainPage = () => {
  const [trigger, { data, isFetching, error }] = useLazySearchMoviesQuery();
  const isEmpty = data?.docs.length === 0;

  const [isModalOpen, setIsModalOpen] = useState(false); // контроль открытия
  const [selectedMovie, setSelectedModalMovie] = useState(null); //  фильм в state

  useMovieSearchToasts({ isFetching, error, isEmpty });

  const onOpen = (movie) => {
    // открываем модалку и запоминаем выбранный фильм
    setIsModalOpen(true);
    setSelectedModalMovie(movie);
  };

  return (
    <>
      {isFetching && <Loader />}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} movie={selectedMovie} />
      )}
      <section>
        <MovieSearchInput
          isFetching={isFetching}
          onSearch={(name: string) => trigger({ query: name })}
        />
      </section>
      <section>
        <MovieResult onOpen={onOpen} data={data} />
      </section>
    </>
  );
};

export default MainPage;
