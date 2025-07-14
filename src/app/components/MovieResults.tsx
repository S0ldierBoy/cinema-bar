import { useSearchMoviesQuery } from '../../api/moviesApi.ts';
import MovieCard from './MovieCard.tsx';

const MovieResults = ({ searchTerm }) => {

  const { data, isLoading, error } = useSearchMoviesQuery(
    { query: searchTerm },
    { skip: !searchTerm },
  );

  if (!searchTerm) return null;
  if (data?.docs?.length === 0) return (<p>Нет результатов</p>);
  if (isLoading) return (<p>Загрузка...</p>);
  if (error) return (<p>Ошибка</p>);

  return (
    <ul className="card-container">
      {data.docs.map((movie) => (
        <li key={movie.id}>
          <MovieCard
            name={movie.name || movie.alternativeName}
            year={movie.year}
            poster={movie.poster.url}
            rating={movie.rating.imdb || 0}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieResults;

