import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    flexDirection: 'column',
    backgroundColor: '#fff',
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
  },

  'monthName:last-child': {
    marginRight: 0,
  }

});

export default styles;
