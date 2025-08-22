import { useState, useEffect } from 'react';
import getMovieDisplayData from '@/app/utils/getMovieDisplayData.ts';
import MovieDescription from '@/app/components/MovieDescription.tsx';

const Modal = ({ onClose, movie }) => {
  const [show, setShow] = useState(false);
  const { movieId } = getMovieDisplayData(movie);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 150);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [show]);

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center z-1001">
      <div
        className={`bg-neutral-900 text-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md md:max-w-lg lg:max-w-xl relative
        transform transition-all duration-300
        ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <div className="flex flex-col justify-end gap-3">
          <MovieDescription movie={movie} />
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            Закрыть
          </button>
          <a
            className="inline-block px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition text-center"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.kinopoisk.ru/film/${movieId}`}
          >
            Больше информации
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
