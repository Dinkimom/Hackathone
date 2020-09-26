import React from 'react';

import bannerImg from '../../assets/images/banner.svg';
import './home.css';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import { useDispatch } from 'react-redux';
import { createCourseToggle } from 'features/createCourse/createCourseSlice';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleCreateCourseOpen = () => {
    dispatch(createCourseToggle());
  };

  const handleCoursesOpen = () => {
    return <Redirect to="/courses" />;
  };

  return (
    <div className="home">
      <div className="home__banner">
        <div className="container grid">
          <div className="home__banner__left-column">
            <h1>Сервис для организациии off-line мероприятий</h1>
            <p>Meet-up, обучение, workshop</p>
            <Link to="/courses">
              <button className="primary">Каталог курсов</button>
            </Link>
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
              инвестиции, подкасты, компьютерные игры, сёрфинг и ещё много-много сюжетов.
              В них вы изучаете грамматику и лексику, слушаете диалоги и выполняете
              упражнения. Разные голоса в упражнениях помогают тренировать понимание на
              слух. Например, продавца овощей в Чайна-тауне озвучивает американец с
              китайским акцентом.
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
              инвестиции, подкасты, компьютерные игры, сёрфинг и ещё много-много сюжетов.
              В них вы изучаете грамматику и лексику, слушаете диалоги и выполняете
              упражнения. Разные голоса в упражнениях помогают тренировать понимание на
              слух. Например, продавца овощей в Чайна-тауне озвучивает американец с
              китайским акцентом.
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
              инвестиции, подкасты, компьютерные игры, сёрфинг и ещё много-много сюжетов.
              В них вы изучаете грамматику и лексику, слушаете диалоги и выполняете
              упражнения. Разные голоса в упражнениях помогают тренировать понимание на
              слух. Например, продавца овощей в Чайна-тауне озвучивает американец с
              китайским акцентом.
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
            <button className="primary" onClick={handleCreateCourseOpen}>
              Стать автором
            </button>
            <button className="primary">Пригласить автора</button>
          </div>
        </div>
      </div>
    </div>
  );
};
