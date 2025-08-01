import MovieCard from './MovieCard.tsx';


const MovieResults = ({ movies, hasNoResults }) => {
  if (!movies || hasNoResults) return null;

  const defaultInfo = 'нет данных';

  return (
    <ul className="card-container">
      {movies?.map((movie) => (
        <li key={movie.id}>
          <MovieCard
            name={movie.name || movie.alternativeName}
            year={movie.year || defaultInfo}
            poster={movie.poster}
            rating={movie.rating.imdb || defaultInfo}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieResults;

