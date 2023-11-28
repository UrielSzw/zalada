import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  h1: {
    fontFamily: theme.fontFamily.secondary,
    fontSize: theme.fontSize.xxl,
    fontWeight: theme.fontWeight.bold,
    letterSpacing: 0.2,
  },
  h2: {
    fontFamily: theme.fontFamily.secondary,
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    letterSpacing: 0.2,
  },
  h3: {
    fontFamily: theme.fontFamily.secondary,
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    letterSpacing: 0.2,
  },
  h4: {
    fontFamily: theme.fontFamily.primary,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.bold,
    letterSpacing: 0.2,
  },
});
