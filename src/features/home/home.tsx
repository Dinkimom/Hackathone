import React from 'react';
import logo from '../../assets/images/logo.svg';
import bannerImg from '../../assets/images/banner.svg';
import './home.css';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home__header">
        <div className="container">
          <img src={logo} alt="logo" />
          <div className="home__header__links">
            <a href="">Стать автором</a>
            <a href="">Пригласить автора</a>
            <button className="primary">Войти</button>
          </div>
        </div>
      </header>
      <main>
        <div className="home__banner">
          <div className="container grid">
            <div className="home__banner__left-column">
              <h1>Сервис для организациии off-line мероприятий</h1>
              <p>Meet-up, обучение, workshop</p>
              <button className="primary">Каталог курсов</button>
            </div>
            <div className="home__banner__right-column">
              <img
                src={bannerImg}
                alt="banner-image"
                className="home__banner__right-column__image"
              />
            </div>
          </div>
        </div>
        <div className="home__preview">
          <div className="container">
            <h3>Какой то общий текст в заголовок</h3>
            <p>Meet-up, обучение, workshop</p>
          </div>
        </div>

        <div className="home__text-block">
          <div className="container grid">
            <div className="home__text-block__left-column">
              <h3>Почему off-line</h3>
              <p>
                Интерактивные истории Теория — это небольшие истории на современные темы:
                инвестиции, подкасты, компьютерные игры, сёрфинг и ещё много-много
                сюжетов. В них вы изучаете грамматику и лексику, слушаете диалоги и
                выполняете упражнения. Разные голоса в упражнениях помогают тренировать
                понимание на слух. Например, продавца овощей в Чайна-тауне озвучивает
                американец с китайским акцентом.
              </p>
            </div>
            <div className="home__text-block__right-column">
              <img src={image1} alt="text-block-image" />
            </div>
          </div>
        </div>

        <div className="home__text-block reversed">
          <div className="container grid">
            <div className="home__text-block__left-column">
              <img src={image2} alt="text-block-image" />
            </div>
            <div className="home__text-block__right-column">
              <h3>Подбор помещения</h3>
              <p>
                Интерактивные истории Теория — это небольшие истории на современные темы:
                инвестиции, подкасты, компьютерные игры, сёрфинг и ещё много-много
                сюжетов. В них вы изучаете грамматику и лексику, слушаете диалоги и
                выполняете упражнения. Разные голоса в упражнениях помогают тренировать
                понимание на слух. Например, продавца овощей в Чайна-тауне озвучивает
                американец с китайским акцентом.
              </p>
            </div>
          </div>
        </div>

        <div className="home__text-block">
          <div className="container grid">
            <div className="home__text-block__left-column">
              <h3>Коуч и дизайнер</h3>
              <p>
                Интерактивные истории Теория — это небольшие истории на современные темы:
                инвестиции, подкасты, компьютерные игры, сёрфинг и ещё много-много
                сюжетов. В них вы изучаете грамматику и лексику, слушаете диалоги и
                выполняете упражнения. Разные голоса в упражнениях помогают тренировать
                понимание на слух. Например, продавца овощей в Чайна-тауне озвучивает
                американец с китайским акцентом.
              </p>
            </div>
            <div className="home__text-block__right-column">
              <img src={image3} alt="text-block-image" />
            </div>
          </div>
        </div>

        <div className="home__action">
          <div className="container">
            <h3>Станьте автором</h3>
            <p>
              Станьте автором курса, митапа или воркшопа, проводите обучение в закрытых
              группах. Или пригласите человека, который сможет проветси обучение
            </p>
            <div className="home__action__buttons">
              <button className="primary">Стать автором</button>
              <button className="primary">Пригласить автора</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="home__footer">
        <div className="container grid">
          <div className="home__footer__left-column">
            <h4>Контакты</h4>
            <p>Университетская ул., 7, 217, Иннополис, Респ. Татарстан, 420500</p>
          </div>
          <div className="home__footer__right-column">
            <button className="primary">Связаться с нами</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
