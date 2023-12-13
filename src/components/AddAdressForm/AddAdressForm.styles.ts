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
    buttonsWrapper: {
      paddingHorizontal: 24,
      position: 'absolute',
      width: '100%',
      gap: 10
    },
    updateBtn: {
      backgroundColor: theme.colors.default,
      marginTop: 10,
      height: 50,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.borderRadius.regular,
    },
    input: {
      marginTop: 10,
      marginBottom: 5,
    },
  });
};
