import { FormControlLabel, Modal, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { RootState } from 'app/store';
import { ModalBody } from 'components/ModalBody';
import React, { useMemo } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import './createCourse.css';
import { createCourseToggle } from './createCourseSlice';

export const CreateCourse: React.FC = () => {
  const { isOpened, isLoading } = useSelector((state: RootState) => state.createCourse);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(createCourseToggle());
  };

  const renderForm = useMemo(() => {
    return (
      <ModalBody title="Создание курса" onClose={handleClose}>
        <form
          className="create-course-form"
          onSubmit={e => {
            e.preventDefault();

            console.log(e.target);
          }}
        >
          <h4>Кто будет вести курс</h4>

          <TextField label="ФИО преподавателя" type="text" variant="outlined" fullWidth />

          <InputMask mask="+7 (999) 999–99–99" maskPlaceholder={null}>
            {() => <TextField label="Телефон" type="tel" variant="outlined" fullWidth />}
          </InputMask>

          <TextField label="Место работы" type="text" variant="outlined" fullWidth />

          <TextField label="Стаж" type="number" variant="outlined" fullWidth />

          <h4>Информация о курсе</h4>
          <TextField label="Название курса" type="number" variant="outlined" fullWidth />
          {/* todo below */}
          <TextField label="Тип мероприятия" type="number" variant="outlined" fullWidth />
          <TextField
            label="Описание"
            type="text"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
          />
          <TextField type="date" variant="outlined" fullWidth />
          {/* todo below */}
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Нужен коуч"
            labelPlacement="end"
          />

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Нужен дизайнер"
            labelPlacement="end"
          />

          <h4>Площадка</h4>
          <TextField label="Название площадки" type="text" variant="outlined" fullWidth />
          <TextField label="Адрес" type="text" variant="outlined" fullWidth />
          <button className="primary" type="submit" disabled={isLoading}>
            Создать
          </button>
        </form>
      </ModalBody>
    );
  }, [isLoading]);

  return (
    <Modal open={isOpened} onClose={handleClose}>
      {renderForm}
    </Modal>
  );
};
