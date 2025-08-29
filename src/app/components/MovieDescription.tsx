import getMovieDisplayData from '@/app/utils/getMovieDisplayData.ts';

const MovieDescription = ({ movie }) => {
  const {
    displayDescription,
    displayName,
    displayIsSeries,
    displayCountries,
    movieLength,
  } = getMovieDisplayData(movie);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl font-semibold">{displayName}</h1>

      <p className="text-gray-300">{displayDescription}</p>

      <div className="flex flex-row justify-around w-full border-t border-t-gray-700 pt-4">
        <p className="text-gray-300">Тип: {displayIsSeries}</p>
        <p className="text-gray-300">Страна: {displayCountries}</p>
        <p className="text-gray-300">Длительность: {movieLength} мин</p>
      </div>
    </div>
  );
};

export default MovieDescription;
