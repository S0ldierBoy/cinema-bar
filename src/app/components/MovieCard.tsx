import { CalendarClock, Star, FolderPen } from 'lucide-react';

const MovieCard = ({ name, year, rating, poster }) => {

  console.log(poster)
  return (
    <article className="movie-card">

      <picture>
        <source
          media="(min-width: 429px)"
          srcSet={poster.previewUrl} />
        <source
          media="(max-width: 428px)"
          srcSet={poster.url} />
      </picture>
      <img src={poster} alt={name} className="movie-poster" />


      <div className="movie-info">
        <h2 className="movie-title">
          <FolderPen size={16} color={'red'} />
          <span>{name}</span>
        </h2>
        <p className="movie-info-line">
          <CalendarClock size={16} color={'red'} />{year}
        </p>
        <p className="movie-info-line">
          <Star size={16} color={'red'} />{rating}
        </p>
      </div>
      <div className="movie-buttons">
        <button type="button" className="movie-card-btn">Подробнее</button>
        <button type="button" className="movie-card-btn">Сохранить</button>
      </div>
    </article>

  );
};

export default MovieCard;