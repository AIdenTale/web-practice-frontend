import { useState } from "react";
import Button from "../components/UI/button";
import SectionDivivsor from "../components/section-divisor";

function General() {
  const [characters, setCharacters] = useState(
    {
      data: [
        {
          name: 'Маг',
          description: 'Маг - это юнит, обладающий способностью использовать магию и имеющий высокий показатель маны. Он обычно носит плащ, который полностью покрывает его тело, и использует посох для произнесения заклинаний. Маг не может носить тяжелую броню, только легкую. Конкретное применение заклинаний зависит от самого заклинания и количества интеллекта, и может отличаться от описания данного заклинания.',
          src: 'src/assets/general/characters-avatar.png',
        },
        {
          name: 'Воин',
          description: 'Маг - это юнит, обладающий способностью использовать магию и имеющий высокий показатель маны. Он обычно носит плащ, который полностью покрывает его тело, и использует посох для произнесения заклинаний. Маг не может носить тяжелую броню, только легкую. Конкретное применение заклинаний зависит от самого заклинания и количества интеллекта, и может отличаться от описания данного заклинания.',
          src: 'src/assets/general/characters-avatar.png',
        },
        {
          name: 'Лучник',
          description: 'Маг - это юнит, обладающий способностью использовать магию и имеющий высокий показатель маны. Он обычно носит плащ, который полностью покрывает его тело, и использует посох для произнесения заклинаний. Маг не может носить тяжелую броню, только легкую. Конкретное применение заклинаний зависит от самого заклинания и количества интеллекта, и может отличаться от описания данного заклинания.',
          src: 'src/assets/general/characters-avatar.png',
        },
        {
          name: 'Вор',
          description: 'Маг - это юнит, обладающий способностью использовать магию и имеющий высокий показатель маны. Он обычно носит плащ, который полностью покрывает его тело, и использует посох для произнесения заклинаний. Маг не может носить тяжелую броню, только легкую. Конкретное применение заклинаний зависит от самого заклинания и количества интеллекта, и может отличаться от описания данного заклинания.',
          src: 'src/assets/general/characters-avatar.png',
        },
        {
          name: 'Жрец',
          description: 'Маг - это юнит, обладающий способностью использовать магию и имеющий высокий показатель маны. Он обычно носит плащ, который полностью покрывает его тело, и использует посох для произнесения заклинаний. Маг не может носить тяжелую броню, только легкую. Конкретное применение заклинаний зависит от самого заклинания и количества интеллекта, и может отличаться от описания данного заклинания.',
          src: 'src/assets/general/characters-avatar.png',
        },
      ],
      index: {
        'Маг': 0,
        'Воин': 1,
        'Лучник': 2,
        'Вор': 3,
        'Жрец': 4,
      }
    });

  const [characterChosen, setCharacterChosen] = useState('Маг');

  return (
    <main className="General">
      <section className="Hero Hero__general">
        <div className="overlay"></div>
        <div className="Hero-content">
          <div className="title-bg">
            <h1 className="title">Game Title</h1>
          </div>

          <p className="body">Пошаговая стратегия — жанр компьютерных игр, где участники делают ходы по очереди.
            Заказать услугу Разработка пошаговых стратегий можно у специалистов компании DreamCraft Studio.
            В результате Вы получите прибыльный продукт.
          </p>

          <Button>Присоединиться</Button>
        </div>
      </section>

      <section className="General-characters">
        <div className="overlay"></div>

        <div className="characters-content">
          <SectionDivivsor>Персонажи</SectionDivivsor>

          <div className="characters-grid">
            <div className="character-choice">
              <h2 className="title">{characterChosen}</h2>

              <div className="character-btns">
                {characters['data'].map((character, index) => {
                  return (
                    <div className={characterChosen == character.name ? 'btn_chosen' : 'btn'}
                      onClick={() => setCharacterChosen(character.name)} key={index}>
                      <img className="avatar" src={`${character.src}`} alt="character-avatar" />
                      <label htmlFor="" className="label">{character.name}</label>
                    </div>
                  );
                })}
              </div>

              <p className="description">{characters.data[characters.index[characterChosen]].description}</p>

              <div className="video"></div>
            </div>

            <div className="characters-grid-col">
              {/* <img src="" alt="" className="character-portrait" /> */}
              <div className="character-portrait">
                <h2 className="title">{characterChosen}</h2>
              </div>
            </div>
          </div>

          <div className="characters-call">
            <h2 className="title">Выбери своего персонажа</h2>

            <div className="body">Перед тобой открывается мир приключений, и ты стоишь на перекрестке своей судьбы.
              Выбери воина, мага или другого персонажа, определи свою стратегию и отправляйся в путь.
              Время решить, кем ты хочешь стать в этом увлекательном мире.
            </div>

            <div className="controls">
              <Button>Играть</Button>
              <Button>Персонажи</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default General;