import noImage from '@/assets/no-image.png';
const DEFAULT_INFO = 'нет данных';

const getMovieDisplayData = (movie) => {
  const isMovieSeries = (movie) => {
    return movie?.isSeries === true
      ? 'сериал'
      : movie?.isSeries === false
        ? 'фильм'
        : DEFAULT_INFO;
  };

  return {
    movieId: movie?.id ?? 0,
    posterLarge: movie?.poster?.url ?? noImage,
    posterSmall: movie?.poster?.previewUrl ?? noImage,
    displayName: movie?.name ?? movie?.alternativeName ?? DEFAULT_INFO,
    displayYear: movie?.year ?? DEFAULT_INFO,
    displayRating: movie?.rating?.imdb ?? DEFAULT_INFO,
    displayCountries: movie?.countries?.[0].name ?? DEFAULT_INFO,
    displayIsSeries: isMovieSeries(movie),
    displayDescription: movie?.description ?? DEFAULT_INFO,
  };
};

export default getMovieDisplayData;
