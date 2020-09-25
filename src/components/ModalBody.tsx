import React, { ReactNode } from 'react';
import closeIcon from '../assets/icons/close.svg';
import './ModalBody.css';

interface Props {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export const ModalBody: React.FC<Props> = ({ title, children, onClose }) => {
  return (
    <div className="modal-body">
      <div className="modal-body__header">
        {title} <img src={closeIcon} alt="close" onClick={onClose} />
      </div>
      <div className="modal-body__content">{children}</div>
    </div>
  );
};
