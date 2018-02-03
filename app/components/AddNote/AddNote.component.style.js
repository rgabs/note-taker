import theme from '../../styles/theme.style';

export default {
  container: {
    height: theme.HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    width: '100%',
    backgroundColor: theme.HEADER_COLOR
  },
  inputContainer: {
    flex: 1,
    paddingTop: 10,
    width: '100%',
    backgroundColor: theme.PRIMARY_COLOR,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    color: 'white'
  },
  modalContainer: {
    padding: 0,
    backgroundColor: 'transparent'
  },
  modalChildrenWrapper: {
    flex: 1,
    padding: 0
  }
};
