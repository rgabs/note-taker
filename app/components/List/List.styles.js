import theme from '../../styles/theme.style';
import commonStyles from '../../styles/common.style';

export default {
  listItemWrapper: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: theme.BORDER_COLOR,
    borderWidth: 1,
    ...commonStyles.shadow
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 15
  }
};
