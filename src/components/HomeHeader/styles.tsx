import { StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.select({
      ios: Constants.statusBarHeight + 15,
      android: Constants.statusBarHeight + 15
    }),
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  userInfoButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    paddingLeft: 8
  },

  userAvatar: {
    height: 45,
    width: 45,
    borderRadius: 50
  },

  addButton: {
    // position: "absolute",
    // right: 0,
    // paddingTop: 55,
    // paddingRight: 20,
  },
})

export default styles;
