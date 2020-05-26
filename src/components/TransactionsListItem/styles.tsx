import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    // paddingHorizontal: 10,
  },

  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemTextContent: {
    paddingStart: 10,
    maxWidth: 170,
  },

  itemTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica-Regular'
  },

  itemCategory: {
    fontSize: 14,
    color: '#878787',
    fontFamily: 'Helvetica-Regular'
  },

  itemValueContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  itemCurrency: {
    fontSize: 13,
    color: '#878787',
    fontFamily: 'Helvetica-Regular'
  },

  itemValue: {
    fontSize: 16,
    fontFamily: 'Helvetica-Regular'
  },

  itemDate: {
    fontSize: 12,
    color: '#878787',
    fontFamily: 'Helvetica-Regular'
  },

})

export default styles;