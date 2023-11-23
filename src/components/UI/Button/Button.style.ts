import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  default: {
    alignItems: 'center',
  },
  primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.regular,
    paddingHorizontal: 15,
    paddingVertical: 9.5,
    borderWidth: 0,
  },
  secondary: {
    borderRadius: theme.borderRadius.regular,
    paddingHorizontal: 15,
    paddingVertical: 9.5,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.greyDark1,
    borderWidth: 1,
  },
  big: {
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  rounded: {
    paddingVertical: 2.5,
    borderRadius: theme.borderRadius.large,
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    paddingVertical: 12.5,
    paddingHorizontal: 30,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tapbar: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  underline: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
    width: '100%',
  },
  redBackground: {
    backgroundColor: theme.colors.error,
  },
  greyBackground: {
    backgroundColor: theme.colors.grey,
  },
  greenBackground: {
    backgroundColor: theme.colors.green,
  },
});
