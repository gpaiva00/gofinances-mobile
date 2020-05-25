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
  },

  itemTitle: {
    fontSize: 20,
    fontFamily: 'Helvetica-Regular'
  },

  itemCategory: {
    fontSize: 14,
    color: '#878787',
    fontFamily: 'Helvetica-Regular'
  },

  itemValueContent: {
    flexDirection: 'row',
    alignItems: 'center'
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

})

export default styles;