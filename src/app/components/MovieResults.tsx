import MovieCard from './MovieCard.tsx';

const MovieResults = ({ data }) => {
  const defaultInfo = 'нет данных';

  if (!data || !Array.isArray(data.docs)) {
    return null;
  }

  return (
    <ul className="card-container">
      {data?.docs?.map((movie) => (
        <li key={movie.id}>
          <MovieCard
            name={movie.name ?? movie.alternativeName ?? defaultInfo}
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

