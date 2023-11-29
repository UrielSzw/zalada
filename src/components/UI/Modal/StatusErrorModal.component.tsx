import React from 'react';
import ConfirmModal from './ConfirmModal.component';
import {
  useAppErrorModal,
  useResetErrorModal,
} from '../../../recoil/setAppErrorModal/setAppErrorModal.atom';

const StatusErrorModal = () => {
  const { show, title, message } = useAppErrorModal();
  const resetErrorModal = useResetErrorModal();

  return (
    <ConfirmModal
      show={show}
      title={title || 'System error'}
      message={message || "This app isn't working If the problem continues, contact support."}
      onPressPositive={resetErrorModal}
      error
    />
  );
};

export default StatusErrorModal;
