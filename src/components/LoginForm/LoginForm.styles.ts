import { StyleSheet } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { theme } from '../../theme';
import { STYLES } from '../../utils';

export const getStyles = () => {
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
      marginTop: STYLES.calcHeight(35),
      marginBottom: STYLES.calcHeight(200),
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
