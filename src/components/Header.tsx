import { RootState } from 'app/store';
import { loginToggle } from 'features/auth/authSlice';
import { createCourseToggle } from 'features/createCourse/createCourseSlice';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userIcon from '../assets/icons/user.svg';
import logo from '../assets/images/logo.svg';
import './Header.css';

export const Header: React.FC = () => {
  const { isOpened, isAuthorized } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLoginOpen = () => {
    dispatch(loginToggle());
  };

  const handleCreateCourseOpen = () => {
    dispatch(createCourseToggle());
  };

  const renderProfileLint = useMemo(() => {
    if (isAuthorized) {
      return <img src={userIcon} alt="user-icon" />;
    } else {
      return (
        <button className="primary" onClick={handleLoginOpen}>
          Войти
        </button>
      );
    }
  }, [isAuthorized]);

  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>

          <div className="header__links">
            <span onClick={handleCreateCourseOpen}>Стать автором</span>
            <span onClick={() => null}>Пригласить автора</span>
            {renderProfileLint}
          </div>
        </div>
      </header>
      <div className="header-spacer" />
    </>
  );
};
