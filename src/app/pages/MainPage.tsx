import { useState } from 'react';
import MovieSearchInput from '../components/MovieSearchInput.tsx';
import MovieResult from '../components/MovieResults.tsx';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <section>
        <MovieSearchInput onSearch={setSearchTerm} />
      </section>
      <section>
        <MovieResult searchTerm={searchTerm} />
      </section>
    </>
  );
};

export default MainPage;