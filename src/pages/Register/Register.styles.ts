import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = () => {
  const { height } = Dimensions.get('window');
  return StyleSheet.create({
    registerWrapper: {
      backgroundColor: theme.colors.primary,
    },
    form: {
      minHeight: height && height - 280,
    },
  });
};
