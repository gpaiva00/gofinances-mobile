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
    height: 80,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 7,
    elevation: 7,
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
