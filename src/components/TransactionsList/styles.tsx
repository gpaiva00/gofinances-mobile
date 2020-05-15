import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemTextContent: {
    paddingStart: 15,
  },

  itemTitle: {
    fontSize: 23,
    fontFamily: 'Helvetica-Regular'
  },

  itemCategory: {
    fontSize: 12,
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