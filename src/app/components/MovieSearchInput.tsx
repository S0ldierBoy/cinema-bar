import { useState } from 'react';

const MovieSearchInput = ({ onSearch }) => {
  const [movName, setMovName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movName.trim()) return;
    onSearch(movName);
    setMovName('');
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Введите название фильма:</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <input
          type="text"
          value={movName}
          onChange={(e) => setMovName(e.target.value)}
          placeholder="Название фильма"
          className="border px-3 py-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Поиск
        </button>
      </form>
    </div>
  );

};

export default MovieSearchInput;

