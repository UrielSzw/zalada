import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../theme';

export const getStyles = () => {
  const { width } = Dimensions.get('window');

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      paddingHorizontal: 25,
      flex: 1,
    },
    titleTextContainer: {
      marginTop: 18,
    },
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 29,
      marginBottom: 30,
    },
    card: {
      width: width - 70,
      height: 360,
      marginLeft: 20,
      marginBottom: 20,
      borderRadius: 20,
    },
    image: {
      width: '100%',
      height: 360,
      resizeMode: 'contain',
    },
    cardSmall: {
      width: 155,
      height: 213,
      backgroundColor: theme.colors.white,
      marginLeft: 15,
    },
    anotherProductContainer: {
      backgroundColor: theme.colors.greyLight1,
    },
    textBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 21,
      marginHorizontal: 25,
      marginBottom: 32,
    },
    scrollBox: {
      marginHorizontal: 10,
      marginBottom: 30,
    },
    btn: {
      marginTop: 10,
      marginBottom: 20,
    },
  });
};
