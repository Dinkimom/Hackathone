import { makeStyles } from '@material-ui/core/styles';
import { RootState } from 'app/store';
import { ContentWrapper } from 'components/ContentWrapper';
import { EventDetails } from 'components/EventDetails';
import { paymentOpenCourse } from 'features/payment/paymentSlice';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './courses.css';
import { coursesFetch } from './coursesSlice';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom: 20,
  },
}));

export const Courses: React.FC = () => {
  const { isLoading, list, error } = useSelector((state: RootState) => state.courses);
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coursesFetch());
  }, []);

  const renderCourses = useMemo(() => {
    if (list.length === 0) {
      return <h4 className="courses-empty">Не найдено ни одного курса</h4>;
    }

    const handleRegister = item => {
      dispatch(paymentOpenCourse(item));
    };

    return list.map(item => (
      <div className="course">
        <div className="course__left-column">
          <h3>Sample</h3>
          <p>{item.description}</p>
          <button className="primary" onClick={() => handleRegister(item)}>
            {!item.price ? 'Бесплатно' : `${item.price} ₽`}
          </button>
        </div>
        <div className="course__right-column">
          <EventDetails event={item} />
        </div>
      </div>
    ));
  }, [list]);

  return (
    <ContentWrapper isLoading={isLoading} error={error} className="courses">
      <h1>Курсы</h1>
      <div className="courses__main">{renderCourses}</div>
    </ContentWrapper>
  );
};
