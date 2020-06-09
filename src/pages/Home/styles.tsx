import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.6)',
    // backgroundColor: '#000',
    // opacity: 0.6
  },

  container: {
    flex: 1,
    paddingHorizontal: 18,
  },

  pageTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },

  transactionsTitle: {
    fontSize: 25,
    fontFamily: "Helvetica-ExtraBold",
  },

  hidePanelButton: {
    alignSelf: "flex-end",
  },

  currentMonthLabel: {
    marginRight: 5,
    fontSize: 15,
    color: "#878787",
    fontFamily: "Helvetica-Bold",
  },

})

export default styles
