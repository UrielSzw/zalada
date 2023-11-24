import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    width: width * 0.23,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    marginRight: 15,
    borderRadius: 15,
  },
  image: {
    width: width * 0.2,
    flex: 1,
    resizeMode: 'contain',
  },
  title: {
    marginBottom: 5,
  },
  bottomContainer: {
    marginTop: 13,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifySelf: 'flex-end',
  },
  amountNumber: {
    marginHorizontal: 25,
  },
  amountButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.gray30,
    backgroundColor: theme.colors.white,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
