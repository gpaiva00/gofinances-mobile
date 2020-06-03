import { StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.select({
      ios: Constants.statusBarHeight + 15,
      android: Constants.statusBarHeight + 15
    }),
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  balanceContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  balanceValueContent: {
    flexDirection: 'row'
  },

  balanceLabel: {
    fontSize: 12,
    color: '#3a3a3a',
    fontFamily: 'Helvetica-Regular'
  },

  balanceCurrency: {
    fontSize: 16,
    color: '#878787',
    fontFamily: 'Helvetica-Regular',
  },

  balanceValue: {
    fontSize: 23,
    fontFamily: 'Helvetica-ExtraBold',
  },

  addButton: {
    position: "absolute",
    right: 0,
    paddingTop: 55,
    paddingRight: 20,
  },
})

export default styles;
