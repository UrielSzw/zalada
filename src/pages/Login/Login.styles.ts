import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = (props?: any) =>
  StyleSheet.create({
    loginWrapper: {
      backgroundColor: theme.colors.primary,
      flex: 1,
    },
    registerWrapper: {
      backgroundColor: theme.colors.primary,
      flex: 1,
    },
    form: {
      flex: 1,
      minHeight: props?.height ? props?.height - 100 : 'auto',
      justifyContent: 'flex-start',
      paddingVertical: 52,
    },
    dipCore: {
      alignSelf: 'center',
    },
  });
