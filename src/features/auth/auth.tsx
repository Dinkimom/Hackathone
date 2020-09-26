import { Modal, TextField } from '@material-ui/core';
import { RootState } from 'app/store';
import { ModalBody } from 'components/ModalBody';
import React, { useMemo } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import './auth.css';
import { loginToggle } from './authSlice';

export const Auth: React.FC = () => {
  const { isOpened, step, error, isLoading } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(loginToggle());
  };

  const renderForm = useMemo(() => {
    let inner = null;

    if (step === 'number') {
      inner = (
        <div className="login-form number">
          <InputMask mask="+7 (999) 999–99–99" maskPlaceholder={null}>
            {() => (
              <TextField
                required
                label="Номер телефона"
                type="tel"
                variant="outlined"
                fullWidth
              />
            )}
          </InputMask>
          <p>Мы отправим на него СМС с кодом подтверждения</p>
          <p>
            Подтверждая номер телефона вы принимаете условия{' '}
            <b>Пользовательского соглашения и политики конфиденциальности</b>
          </p>
          <button className="primary" type="submit">
            Получить код
          </button>
        </div>
      );
    } else if (step === 'otp') {
      inner = (
        <div className="login-form otp">
          <InputMask mask="9-9-9-9" maskPlaceholder={null}>
            {() => (
              <TextField
                label="Введите номер из СМС"
                type="text"
                variant="outlined"
                fullWidth
              />
            )}
          </InputMask>
          <p>Отправить код еще раз</p>
          <button className="primary" type="submit">
            Отправить код
          </button>
        </div>
      );
    }

    return (
      <ModalBody title="Вход или регистрация" onClose={handleClose}>
        <form>{inner}</form>
      </ModalBody>
    );
  }, [step, error, isLoading]);

  return (
    <Modal open={isOpened} onClose={handleClose}>
      {renderForm}
    </Modal>
  );
};
