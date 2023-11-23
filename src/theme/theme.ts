import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#022D83',
    default: '#213547',
    error: '#ef4444',
    gray40: '#7F7F7F',
    gray30: '#BABABA',
    gray20: '#F3F3F3',
    gray10: '#F6F6F6',
    white: '#FFFFFF',
    yellow: '#FFC120',
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
