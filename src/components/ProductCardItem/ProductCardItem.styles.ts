import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = (props?: any) => {
  const { width, height } = Dimensions.get('window');

  return StyleSheet.create({
    container: {
      width: width * 0.45,
      backgroundColor: theme.colors.white,
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 15,
      elevation: 0,
    },
    imageWrapper: {
      height: height > 800 ? 125 : 125 / (800 / height),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    image: {
      resizeMode: 'contain',
      width: width * 0.35,
      height: height > 800 ? 125 : 125 / (800 / height),
    },
    productTitle: {
      height: theme.fontSize.h4 * 2,
      lineHeight: theme.fontSize.h4,
      marginBottom: 4,
      fontSize: theme.fontSize.h4,
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
      fontSize: 10,
    },
    qtyReviewsStyle: {
      fontSize: 10,
    },
    iconWrapper: {
      flex: 1,
      alignItems: 'flex-end',
    },
    price: {
      fontSize: 12,
    },
  });
};
