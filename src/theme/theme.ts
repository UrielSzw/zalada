import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#022D83',
    default: '#213547',
    greyDark1: '#7F7F7F',
    grey: '#BABABA',
    greyLight1: '#F6F6F6',
    greyLight2: '#F3F3F3',
    white: '#FFFFFF',
    accent: '#FFC120',
    error: '#ef4444',
    green: '#0ACF83',
  },
  fontSize: {
    default: 14,
    h1: 28,
    h2: 24,
    h3: 22,
    h4: 16,
  },
  fontWeigth: {
    default: '400',
    title: '700',
  },
  fontFamily: {
    primary: 'DMSans-Regular',
    primaryBold: 'DMSans-Bold',
    secondary: 'Montserrat-Regular',
    secondaryBold: 'Montserrat-Bold',
  },
  borderRadius: {
    regular: 10,
    large: 30,
  },
  lineHeight: {
    default: 22,
    primary: 20,
  },
};

export const commonStyles = StyleSheet.create({
  containerStyle: {},
});
