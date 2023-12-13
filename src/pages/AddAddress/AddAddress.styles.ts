import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = (props?: any) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.primary,
      flex: 1,
    },
    form: {
      minHeight: props?.height ? props?.height - 100 : 'auto',
      justifyContent: 'flex-start',
      paddingVertical: 52,
    },
  });
