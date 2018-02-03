import {StyleSheet} from 'react-native';
import theme from './theme.style';

export default StyleSheet.create({
  appContainer: {
    flex: 1
  },
  headerIcon: {
    height: theme.HEADER_HEIGHT,
    width: theme.HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
