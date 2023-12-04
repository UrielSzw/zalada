import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { theme } from '../../../theme';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { styles } from './Spinner.styles';

const Spinner: React.FC = () => {
  const { showSpinner } = useSelector((state: RootState) => state.appReducer.commonComponents);
  return (
    <Modal animationType="fade" visible={!!showSpinner} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.centeredView}>
          <ActivityIndicator color={theme.colors.primary} size={90} />
        </View>
      </View>
    </Modal>
  );
};

export default Spinner;
