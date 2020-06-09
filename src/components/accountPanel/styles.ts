import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  hidePanelButton: {
    alignSelf: "flex-end",
  },
  
  accountView: {
    position: "absolute",
    width: "100%",
    height: 150,
    left: 0,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    
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
  },

  accountViewOptionText: {
    fontFamily: 'Helvetica-Medium',
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
});

export default styles;