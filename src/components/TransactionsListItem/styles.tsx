import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    // paddingHorizontal: 10,
  },

  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemTextContent: {
    marginStart: 10,
    maxWidth: 170,
  },

  itemTitle: {
    fontSize: 18,
    marginBottom: 5,
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
  },

  itemCurrency: {
    fontSize: 13,
    color: '#878787',
    fontFamily: 'Helvetica-Regular'
  },

  itemValue: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold'
  },

  itemDate: {
    fontSize: 12,
    color: '#878787',
    fontFamily: 'Helvetica-Regular',
  },

})

export default styles;
