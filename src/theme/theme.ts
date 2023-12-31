import { StyleSheet } from 'react-native';

type FontWeight = '100' | '400' | '600';

interface Theme {
  colors: {
    primary: string;
    default: string;
    error: string;
    gray40: string;
    gray30: string;
    gray20: string;
    gray10: string;
    white: string;
    yellow: string;
    green: string;
    black: string;
  };
  fontSize: {
    xxl: number;
    xl: number;
    lg: number;
    md: number;
    default: number;
    sm: number;
    xs: number;
  };
  fontWeight: {
    thin: FontWeight;
    default: FontWeight;
    bold: FontWeight;
  };
  fontFamily: {
    primary: string;
    secondary: string;
  };
  borderRadius: {
    regular: number;
    large: number;
  };
}

export const theme: Theme = {
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
    black: '#000000',
  },
  fontSize: {
    xxl: 28,
    xl: 24,
    lg: 22,
    md: 16,
    default: 14,
    sm: 12,
    xs: 10,
  },
  fontWeight: {
    thin: '100',
    default: '400',
    bold: '600',
  },
  fontFamily: {
    primary: 'DMSans-Regular',
    secondary: 'Montserrat-Regular',
  },
  borderRadius: {
    regular: 10,
    large: 30,
  },
};

export const commonStyles = StyleSheet.create({
  containerStyle: {},
});
