import { Modal, TextField } from '@material-ui/core';
import { RootState } from 'app/store';
import { ModalBody } from 'components/ModalBody';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import './auth.css';
import { loginConfirm, loginOtp, loginToggle } from './authSlice';

export const Auth: React.FC = () => {
  const { isOpened, step, error, isLoading } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(loginToggle());
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    if (step === 'number') {
      dispatch(loginOtp(data));
    } else if (step === 'otp') {
      dispatch(loginConfirm(data));
    }
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
                name="phoneNumber"
                label="Номер телефона"
                type="tel"
                variant="outlined"
                inputRef={register}
                fullWidth
              />
            )}
          </InputMask>
          <p>Мы отправим на него СМС с кодом подтверждения</p>
          <p>
            Подтверждая номер телефона вы принимаете условия{' '}
            <b>Пользовательского соглашения и политики конфиденциальности</b>
          </p>
          <button className="primary" type="submit" disabled={isLoading}>
            Получить код
          </button>
        </div>
      );
    } else if (step === 'otp') {
      inner = (
        <div className="login-form otp">
          <InputMask mask="+7 (999) 999–99–99" maskPlaceholder={null}>
            {() => (
              <TextField
                required
                name="phoneNumber"
                label="Номер телефона"
                type="tel"
                variant="outlined"
                inputRef={register}
                fullWidth
                style={{ display: 'none' }}
              />
            )}
          </InputMask>

          <InputMask mask="9999" maskPlaceholder={null}>
            {() => (
              <TextField
                label="Введите номер из СМС"
                type="text"
                name="code"
                variant="outlined"
                inputRef={register}
                fullWidth
              />
            )}
          </InputMask>

          <p>Отправить код еще раз</p>
          <button className="primary" type="submit" disabled={isLoading}>
            Отправить код
          </button>
        </div>
      );
    }

    return (
      <ModalBody title="Вход или регистрация" onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>{inner}</form>
      </ModalBody>
    );
  }, [step, error, isLoading]);

  return (
    <Modal open={isOpened} onClose={handleClose}>
      {renderForm}
    </Modal>
  );
};
