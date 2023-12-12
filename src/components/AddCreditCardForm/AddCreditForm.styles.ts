import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = () => {
  return StyleSheet.create({
    error: {
      color: theme.colors.error,
      fontSize: 12,
    },
    title: {
      fontSize: 51,
    },
    input: {
      marginTop: 20,
      marginBottom: 5,
    },
    label: {
      marginTop: 24,
    },
  });
};
