import { StyleSheet } from 'react-native';

export const getStyles = (props?: any) =>
  StyleSheet.create({
    avatar: {
      resizeMode: 'contain',
      width: props?.big ? 75 : 35,
      height: props?.big ? 75 : 35,
      borderRadius: props?.big ? 75 / 2 : 35 / 2,
    },
  });
