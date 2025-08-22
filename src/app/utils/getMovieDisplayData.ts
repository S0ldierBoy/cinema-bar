import noImage from '@/assets/no-image.png';
const DEFAULT_INFO = 'нет данных';

const getMovieDisplayData = (movie) => {
  return {
    movieId: movie?.id ?? 0,
    posterLarge: movie?.poster?.url ?? noImage,
    posterSmall: movie?.poster?.previewUrl ?? noImage,
    displayName: movie?.name ?? movie?.alternativeName ?? DEFAULT_INFO,
    displayYear: movie?.year ?? DEFAULT_INFO,
    displayRating: movie?.rating?.imdb ?? DEFAULT_INFO,
    displayCountries: movie?.countries?.name ?? DEFAULT_INFO,
    displayType: movie?.type ?? DEFAULT_INFO,
  };
};

export default getMovieDisplayData;
