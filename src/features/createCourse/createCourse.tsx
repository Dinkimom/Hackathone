import { Modal, TextField } from '@material-ui/core';
import { RootState } from 'app/store';
import { ModalBody } from 'components/ModalBody';
import React, { useMemo } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import './createCourse';
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
        <form>
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
