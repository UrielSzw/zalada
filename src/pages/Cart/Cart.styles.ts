import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  productList: {
    flex: 1,
    marginTop: 33,
  },
  payment: {
    flex: 1,
    marginTop: 56,
  },
  paymentData: {
    flexDirection: 'row',
    gap: 34,
  },
  paymentOption: {
    fontSize: theme.fontSize.h4,
    width: 72,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 33,
  },
});
