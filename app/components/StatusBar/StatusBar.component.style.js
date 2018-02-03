import {StyleSheet, Platform, StatusBar} from 'react-native';
import theme from '../../styles/theme.style';

const height = Platform.select({
  ios: 20,
  android: StatusBar.currentHeight
});

export default StyleSheet.create({
  container: {
    backgroundColor: theme.HEADER_COLOR,
    height,
    width: '100%'
  }
});
