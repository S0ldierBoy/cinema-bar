import { Tv, FolderHeart } from 'lucide-react';

const Header = () => {
  return (
    <header>
      <div className="container-header-content">
        <div className="header-logo">
          <Tv size={48} color="red" />
          <h1 className="header-title">Cinema bar</h1>
        </div>
        <div className="header-actions">
          <button
            className="header-btn"
            type="button"
            onClick={() => alert('нажал кнопку')}
            aria-label="Избранное"
          >
            <FolderHeart size={24} color="red" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
