import Navbar from "./navbar";
import Button from "./UI/button";

function Hero() {
  return (
    <div className="Hero">
      <Navbar />
      <div className="overlay">
        <div className="Hero-content container">
          <div className="title-bg">
            <h1 className="title">Game Title</h1>
          </div>

          <p className="body">Пошаговая стратегия — жанр компьютерных игр, где участники делают ходы по очереди.
            Заказать услугу Разработка пошаговых стратегий можно у специалистов компании DreamCraft Studio.
            В результате Вы получите прибыльный продукт.
          </p>

          <Button>Присоединиться</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;