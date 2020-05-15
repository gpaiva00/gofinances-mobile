import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-around",
    alignItems: 'center'
  },
  
  content: {
    paddingTop: 60,
    paddingHorizontal: 50,
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },

  label: {
    fontSize: 15,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fff',
    height: 55,
    // width: '100%',
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
    paddingHorizontal: 40,
  },

  incomeButton: {
    backgroundColor: '#2dc455'
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Helvetica-Medium',
    fontSize: 15,
  },

  outcomeButton: {
    backgroundColor: 'red'
  },
});

export default styles;