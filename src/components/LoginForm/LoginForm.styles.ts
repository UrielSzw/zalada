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
    title: {
      fontSize: 51,
    },
    titleWrapper: {
      minHeight: 51 * 2,
      marginTop: height > 800 ? 35 : 35 / (800 / height),
      marginBottom: height > 800 ? 250 : 200 / (800 / height),
      alignItems: 'center',
      opacity: keyboard?.keyboardShown ? 0 : 1,
    },
    signupLink: {
      color: 'white',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 40,
    },
    buttonsWrapper: {
      paddingHorizontal: 24,
      bottom: 40,
      position: 'absolute',
      width: '100%',
    },
    dipCore: {},
    logInBtn: {
      backgroundColor: theme.colors.default,
      height: 50,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.borderRadius.regular,
    },
  });
};
