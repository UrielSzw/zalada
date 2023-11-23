import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const getStyles = (props?: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
    },
    titleWrapper: {
      paddingTop: 18,
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 25,
      paddingBottom: 0,
    },
    sectionTitle: {
      fontSize: theme.fontSize.h4,
      paddingBottom: 0,
    },
    listWrapper: {
      backgroundColor: theme.colors.greyLight2,
    },
    list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: props?.width > 484 ? 15 : 15 / (484 / props?.width),
      paddingHorizontal: props?.width > 484 ? 15 : 15 / (484 / props?.width),
      paddingTop: 24,
      paddingBottom: 430,
    },
  });
