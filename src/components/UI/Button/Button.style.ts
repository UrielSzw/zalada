import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    borderColor: theme.colors.gray40,
    borderWidth: 1,
  },
  transparent: {
    paddingHorizontal: 15,
    paddingVertical: 9.5,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  tapbar: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  big: {
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  rounded: {
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingVertical: 2.5,
    borderRadius: theme.borderRadius.large,
    flexDirection: 'row',
    gap: 10,
  },
  roundedSelected: {
    backgroundColor: theme.colors.primary,
  },
  icon: {
    paddingVertical: 12.5,
    paddingHorizontal: 30,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tapbarWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tapbarText: {
    fontSize: theme.fontSize.md,
    marginBottom: 10,
  },
  selected: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
    width: 24,
    display: 'none',
  },
  visible: {
    display: 'flex',
  },
  greyBackground: {
    backgroundColor: theme.colors.gray30,
  },
});
