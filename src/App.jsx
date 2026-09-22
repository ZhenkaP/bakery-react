import Navigation from "./components/Navigation";
import { lazy, Suspense } from "react";
import MenuItem from "./components/MenuItem";
import { MENU_DATA } from "./menuData";

const MapComponent = lazy(() => import("./components/Map"));
const OrderForm = lazy(() => import("./components/OrderForm"));

function App() {
  return (
    <div className="w-full bg-[#ffe2b0]  overflow-x-hidden">
      <header className="flex flex-row items-center justify-between px-2 py-2 sm:px-4">
        <img
          src="/img/logo-bulochka.png"
          alt="Логотип булочной"
          className="max-w-[90px] sm:max-w-[120px] w-full h-auto lg:max-w-[180px] object-contain"
        />

        <div className="w-auto pr-4">
          <Navigation />
        </div>
      </header>

      <section className="relative w-full h-[30vh] sm:h-[40vh] lg:h-[60vh] overflow-hidden">
        <img
          src="/img/hero.webp"
          alt="Свежая выпечка в булочной"
          className="object-cover w-full h-full"
          fetchPriority="high"
        />
      </section>
      {/* Icons Section */}
      <section className="px-4 py-8">
        <ul className="flex flex-wrap justify-center gap-6 list-none sm:gap-12 lg:gap-[76px]">
          {[1, 2, 3].map((num) => (
            <li key={num}>
              <img
                src={`/img/${num}icon.svg`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-20 h-20 sm:w-32 sm:h-32 lg:w-[290px] lg:h-[290px]"
              />
            </li>
          ))}
        </ul>
      </section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 lg:py-4">
        <h1
          id="about"
          className="pb-4 text-xl text-center lg:pb-6 text-stone-800 font-roboto sm:text-4xl lg:text-6xl"
        >
          Выпечка - это{" "}
          <span className="text-accent-red font-pacifico">вкусно</span>.
        </h1>
        <p className="block pb-6 text-sm leading-relaxed text-justify font-roboto sm:text-xl lg:text-2xl">
          Наша булочная — место, где рождается вкус. Утром здесь пахнет
          свежеиспечёнными круассанами, чья слоистая текстура тает во рту. К
          обеду поспевают румяные пироги с сочной вишнёвой начинкой и золотистые
          булочки с корицей, от которых невозможно оторваться. А к вечеру
          витрины пополняются домашними багетами с хрустящей корочкой и
          воздушными пончиками, покрытыми блестящей шоколадной глазурью.
          Приходите к нам — и пусть ваш день начнётся с настоящего удовольствия!
        </p>
        <h2
          id="menu"
          className="py-6 text-xl text-center text-stone-800 font-pacifico sm:text-4xl lg:text-6xl"
        >
          Готовим с любовью
        </h2>
        <section className="grid justify-between grid-cols-2 gap-4 px-2 py-4 lg:grid-cols-4 lg:gap-6">
          {MENU_DATA.map((card) => (
            <MenuItem
              key={card.id}
              title={card.title}
              image={card.image}
              items={card.items}
            />
          ))}
        </section>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-64">
              Загрузка...
            </div>
          }
        >
          <OrderForm />
        </Suspense>

        <div className="mb-[20px]"></div>
        <section>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-96">
                Загрузка карты...
              </div>
            }
          >
            <MapComponent />
          </Suspense>
        </section>
        <footer className="px-4 py-6">
          <div className="max-w-[1440px] mx-auto text-center">
            <h3 id="contacts" className="font-bold sm:text-2xl lg:text-3xl">
              Контакты
            </h3>
            <ul className="list-none">
              <li>
                <a href="tel:+7777777777"
                className="transition-colors hover:text-accent-red hover:underline">
                  +7777777777
                  </a> 
              </li>
              <li>
                <a href="mailto:sladkaya_bulochka@post.com"
                className="transition-colors hover:text-accent-red hover:underline">
                  sladkaya_bulochka@someaddress.com
                  </a>
                  </li>
              <li>
                <a href="https://instagram.com/sssssladkaya_bulochka"
                target="_blank" 
          rel="noopener noreferrer" 
          className="transition-colors hover:text-accent-red hover:underline">
            @sssssladkaya_bulochka
            </a>
            </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
