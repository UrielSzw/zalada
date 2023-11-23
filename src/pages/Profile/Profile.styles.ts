import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 41,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: '#ff6975',
    marginBottom: 36,
  },
});
