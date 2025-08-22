import getMovieDisplayData from '@/app/utils/getMovieDisplayData.ts';
import { Building2 } from 'lucide-react';

const MovieDescription = ({ movie }) => {
  const { displayDescription, displayName, displayIsSeries, displayCountries } =
    getMovieDisplayData(movie);
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-4">{displayName}</h1>
      <p className="text-gray-300 mb-6">{displayDescription}</p>
      <p className="text-gray-300 mb-6">{displayIsSeries}</p>
      <p className="text-gray-300 mb-6">{displayCountries}</p>
    </div>
  );
};
export default MovieDescription;
