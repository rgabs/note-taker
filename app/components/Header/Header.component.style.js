import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  container: {
    height: theme.HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: theme.HEADER_COLOR
  },
  title: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20
  }
});
