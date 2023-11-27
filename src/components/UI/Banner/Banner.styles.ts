import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const getStyles = (props?: any) =>
  StyleSheet.create({
    cardContainer: {
      width: '100%',
      height: props?.small ? 154 : 178,
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.regular,
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    productWrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    detailsWrapper: {
      width: props?.small ? '52%' : '50%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  });
