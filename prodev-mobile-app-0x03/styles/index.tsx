// styles/index.tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  navGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  placeholderText: {
    color: '#999',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordGroup: {
    marginBottom: 15,
  },
  formGroup: {
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: 'blue',
    textAlign: 'right',
    marginVertical: 5,
  },
  socialMediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#eee',
  },
});

export default styles;
