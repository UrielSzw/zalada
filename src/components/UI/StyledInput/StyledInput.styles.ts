import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
