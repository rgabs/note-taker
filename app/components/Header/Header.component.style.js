import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import commonStyles from '../../styles/common.style';

export default StyleSheet.create({
  container: {
    height: theme.HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    width: '100%',
    backgroundColor: theme.HEADER_COLOR,
    ...commonStyles.shadow
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
