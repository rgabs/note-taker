import theme from '../../styles/theme.style';
import styled from 'styled-components';
import {ShadowView} from '../../styles/common.styled';
import Touchable from 'react-native-platform-touchable';

export const ListItemWrapper = styled(ShadowView)`
  padding: 10px;
  margin: 10px;
  border-radius: 5;
  background-color: white;
  border-color: ${theme.BORDER_COLOR};
  border-width: 0.5;
`;

export const RightSwipeWrapper = styled(Touchable)`
  flex: 1;
  justify-content: center;
  padding-horizontal: 15px;
`;
export const LeftSwipeWrapper = styled(Touchable)`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  padding-horizontal: 15px;
`;
