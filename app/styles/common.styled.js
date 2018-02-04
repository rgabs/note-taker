import Touchable from 'react-native-platform-touchable';
import theme from './theme.style.js';
import styled from 'styled-components';

export const AppWrapper = styled.View`
  flex: 1
`;

export const ShadowView = styled.View`
  elevation: 2;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1px;
  shadow-radius: 2px;
`;

export const HeaderIconWrapper =  styled(Touchable)`
  height: ${theme.HEADER_HEIGHT};
  justify-content: center;
  align-items: center;
  padding-horizontal: 20
`;
