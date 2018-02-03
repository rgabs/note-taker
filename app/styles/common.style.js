import {StyleSheet} from 'react-native';
import theme from './theme.style';

export default {
  appContainer: {
    flex: 1
  },
  headerIconWrapper: {
    height: theme.HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  shadow: {
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
};
