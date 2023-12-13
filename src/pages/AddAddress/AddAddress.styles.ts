import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = () =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.primary,
      flex: 1,
    },
    form: {
      paddingVertical: 30,
    },
  });
