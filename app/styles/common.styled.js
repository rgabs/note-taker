import theme from './theme.style';
import React from 'react';
import styled from 'styled-components';
import Touchable from 'react-native-platform-touchable';

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
