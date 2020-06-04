import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },

  pageTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },

  transactionsTitle: {
    fontSize: 25,
    fontFamily: "Helvetica-ExtraBold",
  },

  hidePanelButton: {
    alignSelf: "flex-end",
  },

  // Month Picker

  currentMonthLabel: {
    marginRight: 5,
    fontSize: 15,
    color: "#878787",
    fontFamily: "Helvetica-Bold",
  },

  monthPicker: {
    position: "absolute",
    width: "100%",
    height: 350,
    left: 0,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  monthsContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    flexWrap: "wrap",
    paddingHorizontal: 40,
    paddingBottom: 20,
  },

  monthButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
  },

  activeMonth: {
    borderRadius: 50,
    backgroundColor: "#000",
  },

  activeMonthName: {
    color: "#fff",
  },

  monthName: {
    fontFamily: "Helvetica-Regular",
    fontSize: 30,
    color: "#444",
  },

  "monthName:last-child": {
    marginRight: 0,
  },

  // Account View

  accountView: {
    position: "absolute",
    width: "100%",
    height: 150,
    left: 0,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  accountViewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 26,
  },

  accountViewTitle: {
    fontFamily: 'Helvetica-Regular',
    color: '#878787',
  },

  accountViewOption: {
    flexDirection: "row",
    alignItems: "center",
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#666',
    // paddingBottom: 16
  },

  accountViewOptionText: {
    fontFamily: 'Helvetica-Medium',
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
})

export default styles
