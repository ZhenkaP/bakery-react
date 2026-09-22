import { useEffect, useState } from "react";

function MenuItem({ title, image, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Закрытие по клавише Esc и блокировка скролла
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  return (
    <>
      {/*Карточка товара*/}
      <div
        onClick={() => setIsOpen(true)}
        className="relative flex justify-center w-full max-w-[290px] h-32 sm:h-48 lg:h-64 mx-auto overflow-hidden rounded-md shadow-md cursor-pointer group"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
        />

        <button
          type="button"
          className="absolute z-10 p-2 text-xs transition-colors rounded-md shadow-sm sm:text-sm text-stone-800 bg-white/80 top-3 right-3 font-pacifico hover:bg-white"
        >
          Посмотреть
        </button>

        {/* Затемнение при наведении */}
        <div className="absolute inset-0 transition-opacity duration-200 pointer-events-none bg-black/0 group-hover:bg-black/30" />
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <div
        onClick={() => setIsOpen(false)} // Закрытие по клику на фон
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
        >
            <div
            onClick={(e) => e.stopPropagation()} // Предотвращает закрытие при клике внутри окна
            className="flex flex-col w-full max-w-md lg:max-w-xl max-h-[80vh] p-6 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Заголовок */}
            <h3 className="pb-3 text-2xl border-b lg:text-3xl font-pacifico text-stone-800 border-stone-200">
              {title}
            </h3>
            {/* Список товаров */}
            <div className="flex-grow py-4 overflow-y-auto">
                <ul className="space-y-3 text-lg font-pacifico sm:text-2xl text-stone-700">
                    {items.map((item, id) => (
                        <li key = {id}
                        className="pb-2 border-b border-stone-100 last:border-none">
                    {item}
                  </li>
                    ))}
                        </ul> 
            </div>
            {/* Кнопка закрытия */}
            <div className="flex justify-end pt-3 border-t border-stone-200">
              <button
              type ="button"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 text-sm transition-colors rounded-md font-roboto bg-stone-200 text-stone-800 hover:bg-stone-300 active:scale-95"
              >
                Закрыть
              </button>
          </div>
          </div>
          </div>
      )}
    </>
  );
}

export default MenuItem;
