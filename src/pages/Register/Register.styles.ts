import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = (props?: any) =>
  StyleSheet.create({
    registerWrapper: {
      backgroundColor: theme.colors.primary,
    },
    form: {
      minHeight: props?.height && props?.height - 280,
    },
  });
