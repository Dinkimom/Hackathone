import { makeStyles } from '@material-ui/core/styles';
import { RootState } from 'app/store';
import { ContentWrapper } from 'components/ContentWrapper';
import { EventDetails } from 'components/EventDetails';
import { QR } from 'components/QR';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import './courses.css';
import { coursesFetch, courseSubscribe } from './coursesSlice';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom: 20,
  },
}));

export const Courses: React.FC = () => {
  const { isAuthorized } = useSelector((state: RootState) => state.auth);
  const { isLoading, list, error } = useSelector((state: RootState) => state.courses);
  const classes = useStyles();

  const isMy = useRouteMatch('/courses/my');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coursesFetch());
  }, []);

  const renderCourses = useMemo(() => {
    if (list.length === 0) {
      return <h4 className="courses-empty">Не найдено ни одного курса</h4>;
    }

    const handleRegister = id => {
      dispatch(courseSubscribe(id));
    };

    return list.map(item => (
      <div className={`course ${isMy ? 'my' : ''}`}>
        <div className="course__left-column">
          <h3>{item.name}</h3>
          <p>{item.description}</p>

          {!isMy && (
            <button
              className="primary"
              onClick={() => handleRegister(item.id)}
              disabled={!isAuthorized}
            >
              {!item.price ? 'Зарегистрироваться' : `${item.price} ₽`}
            </button>
          )}
        </div>
        <div className="course__right-column">
          <EventDetails event={item} />
        </div>
        {isMy && <QR price={item.price} />}
      </div>
    ));
  }, [list, isAuthorized]);

  return (
    <ContentWrapper isLoading={isLoading} error={error} className="courses">
      <h1>{isMy ? 'Мои курсы' : 'Курсы'}</h1>
      <div className="courses__main">{renderCourses}</div>
    </ContentWrapper>
  );
};
