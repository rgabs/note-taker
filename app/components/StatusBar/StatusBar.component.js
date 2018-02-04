import React from 'react';
import {StatusBar} from 'react-native';
import {StatusBarWrapper} from './StatusBar.component.styled.js';

const CustomStatusBar = () => (
  <StatusBarWrapper>
    <StatusBar backgroundColor='blue' barStyle='light-content' translucent/>
  </StatusBarWrapper>
);

export default CustomStatusBar;
