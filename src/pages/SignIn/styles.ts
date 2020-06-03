import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.6)',
    paddingHorizontal: 50,
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  greetingsContent: {
    flexDirection: 'column',
    marginVertical: 80
  },

  greetingsTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff'
  },

  appName: {
    marginTop: 16,
    alignSelf: 'center',
    fontSize: 35,
    color: '#fff'
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginTop: 80,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})

export default styles;