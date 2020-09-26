import { Modal, TextField } from '@material-ui/core';
import { RootState } from 'app/store';
import { EventDetails } from 'components/EventDetails';
import { ModalBody } from 'components/ModalBody';
import React, { useMemo } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import './payment.css';
import { paymentToggle } from './paymentSlice';

export const Payment: React.FC = () => {
  const { isOpened, step, error, isLoading, course } = useSelector(
    (state: RootState) => state.payment
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(paymentToggle());
  };

  const renderForm = useMemo(() => {
    let title = '';
    let inner = null;

    if (course?.price) {
      title = 'Регистрация и оплата';
      inner = (
        <div>
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
          <TextField label="Имя получателя билета" variant="outlined" fullWidth />
          <TextField
            label="Количество билетов"
            type="number"
            variant="outlined"
            fullWidth
          />
          <div className="payment-form__action-block">
            <button className="primary" type="submit">
              Перейти к оплате
            </button>
            <div className="payment-form__action-block__price">
              <span>Цена</span>
              <p>300 ₽</p>
            </div>
          </div>
        </div>
      );
    } else {
      title = 'Регистрация на событие';
      inner = (
        <div>
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
          <TextField label="Имя получателя билета" variant="outlined" fullWidth />
          <TextField
            label="Количество билетов"
            type="number"
            variant="outlined"
            fullWidth
          />
          <button className="primary" type="submit">
            Зарегистрироваться
          </button>
        </div>
      );
    }

    if (step === 'qr') {
      title = 'Ваш QR для оплаты';
    }

    return (
      <ModalBody title={title} onClose={handleClose}>
        <form className="payment-form">
          {inner}
          {step !== 'qr' && (
            <div className="payment-form__details">
              <EventDetails event={course} />
            </div>
          )}
        </form>
      </ModalBody>
    );
  }, [course, step, isLoading, error]);

  return (
    <Modal open={isOpened} onClose={handleClose}>
      {renderForm}
    </Modal>
  );
};
