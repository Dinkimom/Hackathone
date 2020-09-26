import { Popover } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import { RootState } from 'app/store';
import { loginToggle, logout } from 'features/auth/authSlice';
import { createCourseToggle } from 'features/createCourse/createCourseSlice';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userIcon from '../assets/icons/user.svg';
import logo from '../assets/images/logo.svg';
import './Header.css';

export const Header: React.FC = () => {
  const { isOpened, isAuthorized, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLoginOpen = () => {
    dispatch(loginToggle());
  };

  const handleCreateCourseOpen = () => {
    dispatch(createCourseToggle());
    setOpened(false);
  };

  const [opened, setOpened] = React.useState(false);

  const handleToggle = () => {
    setOpened(!opened);
  };

  const renderProfileLint = useMemo(() => {
    if (isAuthorized) {
      return (
        <div className="user">
          <img src={userIcon} alt="user-icon" id="user-icon" onClick={handleToggle} />
          {opened && (
            <div className="popup">
              <span>{user.phoneNumber}</span>

              <Link to="/courses/my">
                <span onClick={handleToggle}>Мои курсы</span>
              </Link>

              <span onClick={handleCreateCourseOpen}>Создать мероприятие</span>

              <Link to="/courses">
                <span onClick={handleToggle}>Все курсы</span>
              </Link>

              <span
                onClick={() => {
                  setOpened(false);
                  dispatch(logout());
                }}
              >
                Выйти из аккаунта
              </span>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <button className="primary" onClick={handleLoginOpen}>
          Войти
        </button>
      );
    }
  }, [isAuthorized, opened]);

  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className="header__links">
            {!isAuthorized && (
              <>
                <span onClick={handleCreateCourseOpen}>Заказать обучение</span>
                <Link to="/courses">
                  <span>Курсы</span>
                </Link>
              </>
            )}

            {renderProfileLint}
          </div>
        </div>
      </header>
      <div className="header-spacer" />
    </>
  );
};
