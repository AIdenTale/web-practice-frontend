import { useState } from "react";
import Button from "../components/UI/button";
import SectionDivivsor from "../components/section-divisor";
import ArticlesGrid from "../components/articles-grid";

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
    }
  );
  const [newsData, setNewsData] = useState(
    [
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-1.jpg',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
      },
    ]
  );
  const [characterChosen, setCharacterChosen] = useState('Маг');

  return (
    <main className="general">
      <section className="general-hero">
        <div className="overlay"></div>
        <div className="general-hero__content">
          <div className="general-hero__title-foreground">
            <h1 className="general-hero__title">Game Title</h1>
          </div>

          <p className="general-hero__body">Пошаговая стратегия — жанр компьютерных игр, где участники делают ходы по очереди.
            Заказать услугу Разработка пошаговых стратегий можно у специалистов компании DreamCraft Studio.
            В результате Вы получите прибыльный продукт.
          </p>

          <Button className="general-hero__button">Присоединиться</Button>
        </div>
      </section>

      <section className="general-characters">
        <div className="overlay"></div>

        <div className="characters-content">
          <SectionDivivsor>Персонажи</SectionDivivsor>

          <div className="characters-grid">
            <div className="character-choice">
              <h2 className="title">{characterChosen}</h2>

              <div className="character-btns">
                {characters.data.map((character, index) => {
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
              <Button className='button'>Играть</Button>
              <Button className='button'>Персонажи</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="general-news">
        <div className="overlay"></div>

        <div className="general-news__content">
          <SectionDivivsor className="general-news__divisor">Новости</SectionDivivsor>

          <ArticlesGrid className="general-news__grid" cardsData={newsData} />

          <Button className='general-news__button'>Узнать больше</Button>
        </div>
      </section>
    </main>
  );
}

export default General;