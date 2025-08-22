const MovieDescription = ({ movie }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-4">{movie.name}</h1>
      <p className="text-gray-300 mb-6">{movie.description}</p>
    </div>
  );
};
export default MovieDescription;
