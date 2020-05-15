import { StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.select({
      ios: Constants.statusBarHeight + 15,
      android: Constants.statusBarHeight + 15
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Helvetica-ExtraBold'
  },

  saveButtonText: {
    fontSize: 15,
  },
})

export default styles;