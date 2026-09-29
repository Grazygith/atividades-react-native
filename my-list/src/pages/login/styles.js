import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.colors.bgScreen,
    paddingHorizontal: 20,
  },
  boxTop: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 18,
    color: '#111827',
  },
  boxMid: {
    width: '100%',
    paddingVertical: 10,
  },
  titleInput: {
    marginLeft: 5,
    color: themes.colors.gray,
    marginTop: 15,
    fontSize: 12,
    fontWeight: 'bold',
  },
  BoxInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#111827',
    fontSize: 15,
  },
  boxBottom: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.colors.primary,
    borderRadius: 10,
  },
  textButton: {
    color: themes.colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textBottom: {
    marginTop: 20,
    fontSize: 14,
    color: themes.colors.gray,
  },
});