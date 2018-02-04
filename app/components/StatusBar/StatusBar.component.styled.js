import {Platform, StatusBar} from 'react-native';
import theme from '../../styles/theme.style';
import styled from 'styled-components';

const height = Platform.select({
  ios: 20,
  android: StatusBar.currentHeight
});

export const StatusBarWrapper = styled.View`
  background-color: ${theme.HEADER_COLOR};
  height: ${height};
  width: 100%;
`;
