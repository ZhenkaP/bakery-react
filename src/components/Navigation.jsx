import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between w-full lg:block">
      <ul
        style={{ fontFamily: "Roboto, sans-serif" }}
        className=" gap-4 flex justify-center text-sm lg:text-xl font-bold uppercase list-none lg:gap-[100px] text-stone-800"
      >
        <li>
          <a href="#about" className="transition-colors hover:text-accent-red">
            О нас
          </a>
        </li>
        <li>
          <a href="#menu" className="transition-colors hover:text-accent-red">
            меню
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            className="transition-colors hover:text-accent-red"
          >
            контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
