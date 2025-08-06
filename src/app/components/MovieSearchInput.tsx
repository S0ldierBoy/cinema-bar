import { useState } from 'react';
import { Search } from 'lucide-react';

const MovieSearchInput = ({ onSearch }) => {
  const [movName, setMovName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movName.trim()) return;
    onSearch({ query: movName });
    setMovName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movName}
        onChange={(e) => setMovName(e.target.value)}
        placeholder="  Введите название фильма"
      />
      <button type="submit" className="form-btn">
        <Search size={'16px'} color={'red'} />
      </button>
    </form>

  );
};

export default MovieSearchInput;

