import React from 'react';
import ConfirmModal from './ConfirmModal.component';
import { RootState } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { hideErrorModal } from '../../../redux/commonComponents';

const StatusErrorModal = () => {
  const dispatch = useDispatch();

  const { show, title, message } = useSelector(
    (state: RootState) => state.appReducer.commonComponents.errorModal
  );

  return (
    <ConfirmModal
      show={show}
      title={title || 'System error'}
      message={message || "This app isn't working If the problem continues, contact support."}
      onPressPositive={() => dispatch(hideErrorModal())}
      error
    />
  );
};

export default StatusErrorModal;
