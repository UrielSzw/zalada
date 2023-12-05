import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    titleWrapper: {
      paddingTop: 18,
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 25,
      flex: 1,
    },
    listWrapper: {
      backgroundColor: theme.colors.gray20,
      flex: 4,
    },
    list: {
      justifyContent: 'space-between',
      gap: width > 484 ? 15 : 15 / (484 / width),
      paddingHorizontal: width > 484 ? 15 : 15 / (484 / width),
      paddingVertical: 24,
    },
  });
