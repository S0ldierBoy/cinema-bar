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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMovie, setModalMovie] = useState({});

  useMovieSearchToasts({ isFetching, error, isEmpty });

  const onOpen = (movie) => {
    setIsModalOpen(true);
    setModalMovie(movie);
  };

  return (
    <>
      {isFetching && <Loader />}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} movie={modalMovie} />
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
