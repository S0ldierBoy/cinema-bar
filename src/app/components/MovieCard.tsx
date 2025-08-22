import { CalendarClock, Star, FolderPen } from 'lucide-react';
import getMovieDisplayData from '@/app/utils/getMovieDisplayData';

const MovieCard = ({ movie, onOpen }) => {
  const { posterLarge, posterSmall, displayName, displayYear, displayRating } =
    getMovieDisplayData(movie);

  return (
    <article className="movie-card">
      <picture>
        <source media="(min-width: 429px)" srcSet={posterLarge} />
        <source media="(max-width: 428px)" srcSet={posterSmall} />
        <img src={posterSmall} alt={displayName} loading="lazy" />
      </picture>

      <div className="movie-info">
        <h2 className="movie-title">
          <FolderPen size={16} color={'red'} />
          <span>{displayName}</span>
        </h2>
        <p className="movie-info-line">
          <CalendarClock size={16} color={'red'} />
          {displayYear}
        </p>
        <p className="movie-info-line">
          <Star size={16} color={'red'} />
          {displayRating}
        </p>
      </div>
      <div className="movie-buttons">
        <button
          onClick={() => onOpen(movie)}
          type="button"
          className="movie-card-btn"
        >
          Подробнее
        </button>
        <button type="button" className="movie-card-btn">
          Сохранить
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
