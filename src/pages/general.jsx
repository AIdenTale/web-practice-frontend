import Button from "../components/UI/button";

function General() {
  return (
    <main className="General">
      <div className="Hero Hero__general">
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
      <section className="General-characters">
        <div className="General-content"></div>
        <div className="bg-gradient"></div>
        <div className="bg"></div>
      </section>
    </main>
  );
}

export default General;