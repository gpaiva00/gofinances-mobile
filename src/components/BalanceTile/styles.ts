import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  tile: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: '48%',
  },

  tileTitle: {
    fontFamily: 'Helvetica-Bold'
  },

  tileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },

  tileValue: {
    fontFamily: 'Helvetica-Regular',
    color: '#363F5F'
  },
});

export default styles;