import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primary,
  },
  placeholder: {
    width: 24,
  },
  badge: {
    position: 'absolute',
    top: -9,
    right: -9,
    minWidth: 22,
    height: 22,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 1,
    height: 10,
    marginLeft: 10,
    backgroundColor: theme.colors.white,
  },
});
