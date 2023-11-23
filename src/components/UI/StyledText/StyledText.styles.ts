import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  default: {
    color: theme.colors.default,
    fontSize: theme.fontSize.default,
  },
  primary: {
    fontFamily: theme.fontFamily.primary,
    fontSize: theme.fontSize.default,
    color: theme.colors.default,
    letterSpacing: 0.2,
    // lineHeight: theme.lineHeight.default,
  },
  h1: {
    fontFamily: theme.fontFamily.secondaryBold,
    fontSize: theme.fontSize.h1,
    color: theme.colors.default,
    letterSpacing: 0.2,
    // lineHeight: 36,
  },
  h2: {
    fontFamily: theme.fontFamily.secondaryBold,
    fontSize: theme.fontSize.h2,
    color: theme.colors.default,
    letterSpacing: 0.2,
    // lineHeight: 32,
  },
  h3: {
    fontFamily: theme.fontFamily.secondaryBold,
    fontSize: theme.fontSize.h3,
    color: theme.colors.default,
    letterSpacing: 0.2,
    // lineHeight: 30,
  },
  h4: {
    fontFamily: theme.fontFamily.primaryBold,
    fontSize: theme.fontSize.h4,
    color: theme.colors.default,
    letterSpacing: 0.2,
    // lineHeight: theme.lineHeight.primary,
  },
  white: {
    color: theme.colors.white,
  },
  lineHeightPrimary: {
    lineHeight: theme.lineHeight.primary,
  },
  gray30: {
    color: theme.colors.gray40,
  },
  green: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.default,
  },
  tapbar: {
    fontSize: theme.fontSize.h4,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});
