import { FormControlLabel, MenuItem, Modal, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { RootState } from 'app/store';
import { ModalBody } from 'components/ModalBody';
import { EventTypes } from 'constants/EventTypes';
import { SphereTypes } from 'constants/SphereTypes';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import './createCourse.css';
import { createCourse, createCourseToggle } from './createCourseSlice';

export const CreateCourse: React.FC = () => {
  const { isOpened, isLoading } = useSelector((state: RootState) => state.createCourse);
  const teacherId = useSelector((state: RootState) => state.auth.user?.person?.id);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(createCourseToggle());
  };

  const onSubmit = (data: any) => {
    data.teacherId = teacherId;
    data.area = {
      name: data.areaName,
      address: data.address,
      volume: 100,
    };
    data.price = Number(data.price);
    data.duration = Number(data.duration);

    delete data.areaName;
    delete data.address;

    dispatch(createCourse(data));
  };

  const { register, handleSubmit, errors } = useForm();

  const renderForm = () => {
    return (
      <ModalBody title="Создание курса" onClose={handleClose}>
        <form className="create-course-form" onSubmit={handleSubmit(onSubmit)}>
          <h4>Информация о курсе</h4>
          <TextField
            label="Название курса"
            name="name"
            type="text"
            variant="outlined"
            fullWidth
            inputRef={register}
          />
          <TextField
            label="Тип мероприятия"
            name="eventType"
            variant="outlined"
            fullWidth
            inputRef={register}
            select
            required
          >
            {EventTypes.map(item => (
              <MenuItem value={item.value}>{item.text}</MenuItem>
            ))}
          </TextField>

          <TextField
            label="Сфера"
            name="sphere"
            variant="outlined"
            fullWidth
            inputRef={register}
            select
            required
          >
            {SphereTypes.map(item => (
              <MenuItem value={item.value}>{item.text}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="Описание"
            type="text"
            multiline
            name="description"
            rows={3}
            variant="outlined"
            fullWidth
            inputRef={register}
          />
          <TextField
            type="date"
            inputRef={register}
            name="date"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Продолжительность"
            type="number"
            inputRef={register}
            name="duration"
            variant="outlined"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Нужен коуч"
            labelPlacement="end"
            name="isNeedCoach"
            inputRef={register}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Нужен дизайнер"
            labelPlacement="end"
            name="isNeedDesigner"
            inputRef={register}
          />
          <TextField
            label="Стоимость"
            type="number"
            name="price"
            style={{ display: 'none' }}
            value={0}
            variant="outlined"
            fullWidth
            inputRef={register}
          />
          <h4>Площадка</h4>
          <TextField
            inputRef={register}
            label="Название площадки"
            type="text"
            variant="outlined"
            fullWidth
            name="areaName"
          />
          <TextField
            inputRef={register}
            label="Адрес"
            type="text"
            variant="outlined"
            name="address"
            fullWidth
          />
          <button className="primary" type="submit" disabled={isLoading}>
            Создать
          </button>
        </form>
      </ModalBody>
    );
  };

  return (
    <Modal open={isOpened} onClose={handleClose}>
      {renderForm()}
    </Modal>
  );
};
