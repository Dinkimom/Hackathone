import { InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { RootState } from 'app/store';
import { ContentWrapper } from 'components/ContentWrapper';
import React from 'react';
import { useSelector } from 'react-redux';
import './courses.css';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom: 20,
  },
}));

export const Courses: React.FC = () => {
  const { isLoading, list, error } = useSelector((state: RootState) => state.courses);
  const classes = useStyles();

  const renderCourses = () => {
    return ['', '', ''].map(item => (
      <div className="course">
        <div className="course__left-column">
          <h3>Тренинг “Переговоры без поражений”</h3>
          <p>
            Интерактивные истории Теория — это небольшие истории на современные темы:
            инвестиции, подкасты, компьютерные игры, сёрфинг и ещё много-много сюжетов. В
            них вы изучаете грамматику и лексику, слушаете диалоги и выполняете
            упражнения.
          </p>
          <button className="primary">Бесплатно</button>
        </div>
        <div className="course__right-column">
          <span>Дата</span>
          <p>12 Сентября 2020</p>

          <span>Ведет</span>
          <p>Абрамов Илья Ильсурович</p>

          <span>Тема курса</span>
          <p>Менеджмент</p>

          <span>Место</span>
          <p>Казань, Салимжанова 13, 205 </p>
        </div>
      </div>
    ));
  };

  return (
    <ContentWrapper isLoading={isLoading} error={error} className="courses">
      <h1>Курсы</h1>
      <div className="courses__main">
        <div className="courses__main__filters">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>О чем курс</InputLabel>
            <Select label="О чем курс"></Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Место</InputLabel>
            <Select label="Место"></Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Дата</InputLabel>
            <Select label="Дата"></Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Цена</InputLabel>
            <Select label="Цена"></Select>
          </FormControl>
        </div>
        <div className="courses__main__list">{renderCourses()}</div>
      </div>
    </ContentWrapper>
  );
};
