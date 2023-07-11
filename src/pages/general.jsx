import { useState } from "react";
import Button from "../components/UI/button";
import SectionDivivsor from "../components/section-divisor";
import ArticlesGrid from "../components/articles-grid";
import CharacterCard from "../components/cards/character-card";
import ArticleCard from "../components/cards/article-card";

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
          description: 'Описание воина.',
          src: 'src/assets/general/characters-avatar.png',
        },
        {
          name: 'Лучник',
          description: 'Описание лучника.',
          src: 'src/assets/general/characters-avatar.png',
        },
        {
          name: 'Вор',
          description: 'Описание вора.',
          src: 'src/assets/general/characters-avatar.png',
        },
        {
          name: 'Жрец',
          description: 'Описание жреца.',
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
        path: '',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
        path: '',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
        path: '',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
        path: '',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
        path: '',
      },
      {
        title: 'Великий Турнир героев объявлен!',
        body: 'Сразись с лучшими, завоюй славу и получи эпические награды!',
        backgroundSource: '/src/assets/general/article-card-bg-2.jpg',
        path: '',
      },
    ]
  );
  const [characterChosen, setCharacterChosen] = useState('Маг');

  return (
    <main className="general">
      <section className="general-hero">
        <div className="general-hero__overlay">
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
        </div>
      </section>

      <section className="general-characters">
        <div className="general-characters__overlay">
          <div className="general-characters__content">
            <SectionDivivsor className="general-characters__divisor">Персонажи</SectionDivivsor>

            <div className="general-characters__grid">
              <div className="general-characters__choice">
                <div className="general-characters__top">
                  <h2 className="general-characters__title general-characters__title_1">{characterChosen}</h2>

                  <div className="general-characters__controls">
                    {characters.data.map((character, index) => {
                      return (
                        <CharacterCard
                          className={characterChosen == character.name ?
                            'general-characters__control_active' :
                            'general-characters__control'}
                          callback={setCharacterChosen}
                          name={character.name}
                          src={character.src}
                          key={index} />
                      );
                    })}
                  </div>

                  <div className="general-characters__description">{characters.data[characters.index[characterChosen]].description}</div>
                </div>


                <div className="general-characters__video"></div>
              </div>

              <div className="general-characters__portrait">
                <h2 className="general-characters__title general-characters__title_2">{characterChosen}</h2>
              </div>
            </div>

            <div className="general-characters__call">
              <h2 className="general-characters__title general-characters__title_3">Выбери своего персонажа</h2>

              <div className="general-characters__body">Перед тобой открывается мир приключений, и ты стоишь на перекрестке своей судьбы.
                Выбери воина, мага или другого персонажа, определи свою стратегию и отправляйся в путь.
                Время решить, кем ты хочешь стать в этом увлекательном мире.
              </div>

              <div className="general-characters__buttons">
                <Button className="general-characters__button">Играть</Button>
                <Button className="general-characters__button">Персонажи</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="general-news">
        <div className="general-news__content">
          <SectionDivivsor className="general-news__divisor">Новости</SectionDivivsor>

          <ArticlesGrid className="general-news__grid" cardsData={newsData} />

          <Button className='general-news__button'>Узнать больше</Button>
        </div>
      </section>

      <div className="general__updates-forum-wrapper">
        <section className="general-updates">
          <div className="general-updates__content">
            <SectionDivivsor className="general-updates__divisor">Обновления</SectionDivivsor>

            <ArticleCard
              path=""
              title="Обновление 1.1."
              className="general-updates__link"
              src="src/assets/general/update-bg.jpg"
              body="Описание последнего обновления и основных преимуществ.">
            </ArticleCard>

            <Button className="general-updates__button">Предыдущие обновления</Button>
          </div>
        </section>
        
        <section className="general-forum">
          <div className="general-forum__content">

            <SectionDivivsor className="general-forum__divisor">Форум</SectionDivivsor>

            <div className="general-forum__hero">
              <div className="general-forum__title">Есть что обсудить?</div>

              <p className="general-forum__body">Присоединяйся к комьюнити наших игроков и разработчиков!
                Задавай вопросы, делись опытом и нововведениями, которые по твоему мнению необходимы.</p>

              <Button className="general-forum__button">Перейти в Форум</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default General;