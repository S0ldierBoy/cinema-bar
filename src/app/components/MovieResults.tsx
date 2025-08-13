import MovieCard from './MovieCard.tsx';

const MovieResults = ({ data }) => {
  if (!data || !Array.isArray(data.docs) || data.docs.length === 0) {
    return null;
  }

  return (
    <ul className="card-container">
      {data?.docs?.map((movie) => (
        <li key={movie.id}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieResults;
