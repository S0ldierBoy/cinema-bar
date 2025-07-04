import { useSearchMoviesQuery } from '../../api/moviesApi.ts';

const MovieResults = ({ searchTerm }) => {

  const { data } = useSearchMoviesQuery({ query: searchTerm }, { skip: !searchTerm });

  return (
    <div>
      <h1>Результаты поиска</h1>
      <div>
        {data?.docs?.length > 0
          ? data.docs.map(({ id, name }) => (
            <p key={id}>name is: {name}</p>
          ))
          : <p>Нет результатов</p>
        }
      </div>
    </div>
  );

};

export default MovieResults;

