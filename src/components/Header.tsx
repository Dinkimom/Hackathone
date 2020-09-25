import { RootState } from 'app/store';
import { loginToggle } from 'features/auth/authSlice';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/logo.svg';
import userIcon from '../assets/icons/user.svg';
import './Header.css';

export const Header: React.FC = () => {
  const { isOpened, isAuthorized } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLoginOpen = () => {
    dispatch(loginToggle());
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
          <img src={logo} alt="logo" />
          <div className="header__links">
            <a href="">Стать автором</a>
            <a href="">Пригласить автора</a>
            {renderProfileLint}
          </div>
        </div>
      </header>
      <div className="header-spacer" />
    </>
  );
};
