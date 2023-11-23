import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

type Props = {
  width: any;
};

export const getStyles = (props: Props) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.greyLight1,
    },
    welcomeBox: {
      paddingHorizontal: 24,
      backgroundColor: theme.colors.primary,
    },
    body: {
      backgroundColor: theme.colors.greyLight1,
      paddingVertical: 20,
      marginTop: 10,
    },
    horizontalScroll: {
      marginLeft: 15,
    },
    sliderItem: {
      marginRight: 20,
      maxWidth: props?.width * 0.7,
    },
    lightLink: {
      color: theme.colors.greyDark1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 20,
    },
  });
