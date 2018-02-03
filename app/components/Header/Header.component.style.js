import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  container: {
    height: theme.HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    width: '100%',
    backgroundColor: theme.HEADER_COLOR
  }
});
