import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = (props?: any) =>
  StyleSheet.create({
    registerWrapper: {
      backgroundColor: theme.colors.primary,
      flex: 1,
    },
    form: {
      flex: 1,
      minHeight: props?.height && props?.height - 280,
      marginVertical: 52,
    },
  });
