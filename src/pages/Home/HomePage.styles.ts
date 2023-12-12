import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { STYLES } from '../../utils';
export const getStyles = () =>
  StyleSheet.create({
    welcomeBox: {
      paddingHorizontal: 24,
      backgroundColor: theme.colors.primary,
    },
    body: {
      backgroundColor: theme.colors.gray10,
      paddingVertical: 20,
      paddingLeft: 15,
    },
    sliderItem: {
      width: STYLES.calcWidthPerc(70),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
    },
  });
