import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useMovieSearchToasts = ({ isFetching, error, isEmpty }) => {
  useEffect(() => {
    if (isFetching) return;

    if (isEmpty) {
      toast('Не найдено', {
        type: 'info',
        theme: 'dark',
      });
    }
    if (error)
      toast('Ошибка сети', {
        type: 'error',
        theme: 'dark',
      });
  }, [error, isEmpty, isFetching]);
};

export default useMovieSearchToasts;
