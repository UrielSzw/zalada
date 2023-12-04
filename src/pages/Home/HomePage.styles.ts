import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');

export const getStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.gray10,
    },
    welcomeBox: {
      paddingHorizontal: 24,
      backgroundColor: theme.colors.primary,
    },
    body: {
      backgroundColor: theme.colors.gray10,
      paddingVertical: 20,
      marginTop: 10,
    },
    horizontalScroll: {
      marginLeft: 15,
    },
    sliderItem: {
      marginRight: 20,
      width: width * 0.7,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 20,
    },
  });
