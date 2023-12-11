import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { STYLES } from '../../utils';

export const getStyles = () =>
  StyleSheet.create({
    container: {
      width: STYLES.calcWidthPerc(45),
      backgroundColor: theme.colors.white,
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 15,
      elevation: 0,
    },
    imageWrapper: {
      height: STYLES.calcHeight(125),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    image: {
      resizeMode: 'contain',
      width: STYLES.calcWidthPerc(35),
      height: STYLES.calcHeight(125),
    },
    productTitle: {
      height: theme.fontSize.md * 2,
      lineHeight: theme.fontSize.md,
      marginBottom: 4,
      letterSpacing: 0.2,
    },
    bottomContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
    },
    ratingNumber: {
      marginRight: 10,
      marginLeft: 3,
    },
    iconWrapper: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });
