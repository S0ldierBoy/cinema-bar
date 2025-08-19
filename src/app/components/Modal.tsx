import { useState, useEffect } from 'react';

const Modal = ({ onClose, movie }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // небольшая задержка, чтобы сработала анимация
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 150); // дождаться анимации
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center z-50">
      <div
        className={`bg-neutral-900 text-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md md:max-w-lg lg:max-w-xl relative
        transform transition-all duration-300
        ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        {/* Заголовок */}
        <h1 className="text-xl font-semibold mb-4">{movie.name}</h1>

        {/* Контент */}
        <p className="text-gray-300 mb-6">Описание</p>

        {/* Кнопки */}
        <div className="flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            Закрыть
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
