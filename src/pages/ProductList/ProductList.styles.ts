import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { useStyles } from '../../utils';

export const getStyles = () => {
  const { setWidth } = useStyles();

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
      gap: setWidth(15),
      paddingHorizontal: setWidth(15),
      paddingVertical: 24,
    },
  });
};
