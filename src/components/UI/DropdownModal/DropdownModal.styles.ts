import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    paddingBottom: 15,
  },
  title: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderColor: theme.colors.greyLight2,
  },
  options: {
    alignItems: 'center',
  },
  option: {
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2,
    borderColor: theme.colors.greyLight2,
  },
  optionSelected: {
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2,
    borderColor: theme.colors.greyLight2,
    backgroundColor: theme.colors.greyLight1,
  },
});
