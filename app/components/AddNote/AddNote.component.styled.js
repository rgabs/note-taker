import theme from '../../styles/theme.style';
import styled from 'styled-components';

export const InputWrapper = styled.View`
  flex: 1;
  padding-top: 10;
  width: 100%;
  background-color: ${theme.PRIMARY_COLOR};
`;

export const NoteInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 20;
  color: white;
  text-align-vertical: top;
`;

export default {
  modalContainer: {
    padding: 0,
    backgroundColor: 'transparent'
  },
  modalChildrenWrapper: {
    flex: 1,
    padding: 0
  }
};
