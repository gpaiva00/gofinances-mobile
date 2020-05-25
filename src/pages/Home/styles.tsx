import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18
  },

  pageTitles: {
    paddingVertical: 20,
  },

  transactionsTitle: {
    fontSize: 25,
    fontFamily: 'Helvetica-ExtraBold',
  },

  currentMonthLabel: {
    fontSize: 15,
    color: '#878787',
    fontFamily: 'Helvetica-Regular'
  },

  tilesContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10, 
  },
})

export default styles;