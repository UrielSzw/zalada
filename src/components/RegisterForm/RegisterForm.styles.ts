import { StyleSheet, Dimensions } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { theme } from '../../theme';

export const getStyles = () => {
  const { height } = Dimensions.get('window');
  const keyboard = useKeyboard();

  return StyleSheet.create({
    error: {
      color: theme.colors.error,
      fontSize: 12,
    },
    titleWrapper: {
      display: keyboard?.keyboardShown ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 30,
    },
    contentWrapper: {
      marginTop: 16,
      paddingHorizontal: 24,
    },
    buttonsWrapper: {
      marginBottom: 20,
    },
    signupLink: {
      color: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 30,
    },
    logInBtn: {
      height: 50,
      backgroundColor: theme.colors.default,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.borderRadius.regular,
    },
  });
};
