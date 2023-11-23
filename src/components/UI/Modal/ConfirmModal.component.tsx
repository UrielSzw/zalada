import React from 'react';
import { Modal, Pressable, View } from 'react-native';
import { StyledText } from '../StyledText/StyledText';
import { Button } from '../Button/Button.component';
import { theme } from '../../../theme';
import { AlertIcon } from '../../../assets/base/icons/alert_icon';
import { SuccessIcon } from '../../../assets/base/icons/success_icon';
import { styles } from './ConfirmModal.styles';

type Props = {
  show?: boolean;
  title: string;
  message?: string;
  error?: boolean;
  buttonTitle?: string;
  onPressPositive?: () => void;
};

const ConfirmModal: React.FC<Props> = ({
  show,
  title,
  message,
  buttonTitle,
  error,
  onPressPositive,
}) => {
  const setModalContent = () => {
    if (error) {
      return { icon: <AlertIcon />, backgroundColor: theme.colors.error };
    }
    return { icon: <SuccessIcon />, backgroundColor: theme.colors.green, greenBtn: true };
  };

  const { icon, backgroundColor, greenBtn } = setModalContent();

  return (
    <Modal animationType="fade" visible={show} transparent={true}>
      <View style={styles.modal}>
        <Pressable style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ ...styles.modalIcon, backgroundColor }}>{icon}</View>
            <View style={styles.title}>
              <StyledText h3 style={styles.text}>
                {title}
              </StyledText>
            </View>
            <View style={styles.message}>
              <StyledText>{message || ''}</StyledText>
            </View>
            <View style={styles.btnContainer}>
              <Button
                onPress={onPressPositive}
                style={{ width: '100%', backgroundColor }}
                text={buttonTitle || 'Ok'}
                {...(greenBtn ? { green: true, primary: true } : { red: true })}
              />
            </View>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
