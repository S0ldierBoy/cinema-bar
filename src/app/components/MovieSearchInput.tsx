import { useState } from 'react';
import { Search } from 'lucide-react';

const MovieSearchInput = ({ onSearch, isFetching }) => {
  const [movName, setMovName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movName.trim()) return;
    onSearch(movName);
    setMovName('');
  };

  console.log(isFetching);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movName}
        onChange={(e) => setMovName(e.target.value)}
        placeholder="  Введите название фильма"
        autoFocus
      />
      <button type="submit" className="form-btn" disabled={isFetching} aria-busy={isFetching}>
        <Search size={'16px'} color={` ${isFetching ? 'gray' : 'red'}`} />
      </button>
    </form>

  );
};

export default MovieSearchInput;

