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
    <div>
      <h1>Результат поиска</h1>
      <div className="card-container">
        {data.docs.map((movie) => (
          <MovieCard
            key={movie.id}
            name={movie.name || movie.alternativeName}
            year={movie.year}
            poster={movie.poster.previewUrl || movie.poster.url}
            rating={movie.rating.imdb || 0}
          />
        ))}
      </div>
    </div>
  );


};

export default MovieResults;

