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

  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    top: 89,
    zIndex: 1,
    backgroundColor: '#fff',
    width: '100%',
    maxHeight: 200,
    // paddingBottom: 10,
    borderTopWidth: 0,
    borderWidth: 0.2,
    borderColor: '#878787',
    borderBottomEndRadius: 5,
  },

  suggestionItem : { 
    paddingVertical: 15, 
    paddingHorizontal: 10,
    borderBottomWidth: 0.2, 
    borderBottomColor: '#878787' 
  },

  suggestionText: {
    color: '#878787'
  },

  inputGroup: {
    marginBottom: 40,
  },

  input: {
    backgroundColor: '#fff',
    height: 55,
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.2,
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