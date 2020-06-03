import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18
  },

  pageTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },

  transactionsTitle: {
    fontSize: 25,
    fontFamily: 'Helvetica-ExtraBold',
  },

  currentMonthLabel: {
    marginRight: 5,
    fontSize: 15,
    color: '#878787',
    fontFamily: 'Helvetica-Bold'
  },

  monthPicker: {
    position: 'absolute',
    width: '100%',
    height: 350,
    left: 0,
    flexDirection: 'column',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  hidePanelButton: {
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 10,
  },

  monthsContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 45,
    paddingBottom: 20,

  },

  monthButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    width: 75,
  },

  activeMonth: {
    borderRadius: 50,
    backgroundColor: '#000',
  },

  activeMonthName: {
    color: '#fff',
  },

  monthName: {
    fontFamily: 'Helvetica-Regular',
    fontSize: 30,
    color: '#444',
  },

  'monthName:last-child': {
    marginRight: 0,
  }
})

export default styles;
