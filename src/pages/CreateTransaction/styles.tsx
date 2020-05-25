import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  
  content: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 50,
  },

  label: {
    fontSize: 18,
    fontFamily: 'Helvetica-ExtraBold',
    marginBottom: 8,
  },

  inputGroup: {},

  input: {
    backgroundColor: '#fff',
    height: 55,
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.2,
    marginBottom: 40,
  },

  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  button: {
    padding: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#969696',
  },

  incomeButtonActive: {
    backgroundColor: '#37C988',
    fontWeight: 'bold',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Helvetica-Medium',
    fontSize: 16,
  },

  outcomeButtonActive: {
    backgroundColor: '#c53030',
    fontWeight: 'bold',
  },
});

export default styles;