import { CalendarClock, Star, FolderPen } from 'lucide-react';

const MovieCard =
  ({ name, year, rating, poster }) => {
    return (
      <div className="movie-card">
        <img src={poster} alt={name} className="movie-poster" />
        <div className="movie-info">
          <p className="movie-info-line">
            <FolderPen size={16} color={'red'} /><span>{name}</span>
          </p>
          <p className="movie-info-line">
            <CalendarClock size={16} color={'red'} />{year}
          </p>
          <p className="movie-info-line">
            <Star size={16} color={'red'} />{rating}
          </p>
        </div>
        <div className="movie-buttons">
          <button className="movie-card-btn">Подробнее</button>
          <button className="movie-card-btn">Сохранить</button>
        </div>
      </div>

    );
  };

export default MovieCard;

