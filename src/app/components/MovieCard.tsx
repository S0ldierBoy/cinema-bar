import { CalendarClock, Star, FolderPen } from 'lucide-react';
import noImage from '@/assets/no-image.png';

const MovieCard = ({ name, year, rating, poster }) => {
  const hasPoster = poster.url || poster.previewUrl;

  return (
    <article className="movie-card">
      <picture>
        {hasPoster && (
          <>
            <source media="(min-width: 429px)" srcSet={poster.previewUrl} />
            <source media="(max-width: 428px)" srcSet={poster.url} />
          </>
        )}
        <img
          src={hasPoster ? poster.url : noImage}
          alt={name || 'Постер'}
          loading="lazy"
        />
      </picture>

      <div className="movie-info">
        <h2 className="movie-title">
          <FolderPen size={16} color={'red'} />
          <span>{name}</span>
        </h2>
        <p className="movie-info-line">
          <CalendarClock size={16} color={'red'} />
          {year}
        </p>
        <p className="movie-info-line">
          <Star size={16} color={'red'} />
          {rating}
        </p>
      </div>
      <div className="movie-buttons">
        <button type="button" className="movie-card-btn">
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
