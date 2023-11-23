import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    alignItems: 'center',
    width: '100%',
    margin: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    paddingTop: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  modalIcon: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    width: '100%',
    marginTop: 15,
    marginBottom: 10,
    padding: 0,
    paddingHorizontal: 63,
    borderBottomColor: theme.colors.gray30,
  },
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 0,
  },
  message: {
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
});
