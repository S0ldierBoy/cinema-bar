import { useState } from 'react';
import MovieSearchInput from '../components/MovieSearchInput.tsx';
import MovieResult from '../components/MovieResults.tsx';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <MovieSearchInput onSearch={setSearchTerm} />
      <MovieResult searchTerm={searchTerm} />
    </div>);
};

export default MainPage;