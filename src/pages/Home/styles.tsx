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

  tilesContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },

  chevDown: {
    alignSelf: 'flex-end',
    marginRight: 10,
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

  monthName: {
    textAlign: 'center',
    fontFamily: 'Helvetica-Regular',
    fontSize: 30,
    padding: 12,
    color: '#444'
  },

  'monthName:last-child': {
    marginRight: 0,
  }
})

export default styles;
