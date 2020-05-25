import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  tile: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '48%',
  },

  tileTitle: {
    fontFamily: 'Helvetica-Bold'
  },

  tileHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
  },

  tileValue: {
    fontFamily: 'Helvetica-Regular',
    color: '#363F5F'
  },
});

export default styles;