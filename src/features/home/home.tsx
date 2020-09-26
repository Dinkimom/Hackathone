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
          <h1>Мы помогаем шарить знания!</h1>
        </div>
      </div>

      <div className="home__text-block">
        <div className="container grid">
          <div className="home__text-block__left-column">
            <h3>Почему off-line</h3>
            <p>
              Мы не отрицаем важность и полезность on-line образования в настоящее время.
              Однако не все активности можно донести с той же полезностью. В off-line
              режиме на 55% лучше усваивается подача через невербальное коммуникацию. А
              последующий нетворкинг способствует расширению социальных связей
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
              Мы сотрудничаем с большинством локальных площадок. Поэтому подбор,
              согласование условий и финансовую составляющую мы берем на себя. Вам
              остается подготовить ваш материал.
            </p>
          </div>
        </div>
      </div>

      <div className="home__text-block">
        <div className="container grid">
          <div className="home__text-block__left-column">
            <h3>Коуч и дизайнер</h3>
            <p>
              Наши коучи и дизайнеры помогут построить программу обучения в правильной
              структурированной форме и совместно с вами построят на основе вашего
              выступления игровые интерактивы и воркшоп для оптимального усвоения
              материала
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
