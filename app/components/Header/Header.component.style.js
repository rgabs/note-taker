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
    backgroundColor: theme.HEADER_COLOR
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
