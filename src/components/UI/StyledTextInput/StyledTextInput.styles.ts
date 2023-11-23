import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  inputWrapper: {
    minHeight: 45,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.regular,
    borderWidth: 1,
    borderColor: theme.colors.gray30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  textInput: {
    flex: 1,
    color: theme.colors.default,
    backgroundColor: 'transparent',
    paddingRight: 20,
    paddingLeft: 12,
    paddingVertical: 10,
  },
  error: {
    borderColor: theme.colors.error,
  },
});
