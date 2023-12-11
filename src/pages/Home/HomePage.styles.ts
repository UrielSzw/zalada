import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { STYLES } from '../../utils';
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
      width: STYLES.calcWidthPerc(70),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 20,
    },
  });
