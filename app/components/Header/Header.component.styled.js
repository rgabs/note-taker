import theme from '../../styles/theme.style.js';
import styled from 'styled-components';
import {ShadowView} from '../../styles/common.styled.js';

export const HeaderWrapper = styled(ShadowView)`
  height: ${theme.HEADER_HEIGHT};
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  elevation: 2;
  width: 100%;
  backgroundColor: ${theme.HEADER_COLOR};
`;

export const Title = styled.Text`
  color: white;
  fontWeight: bold;
  fontSize: 20;
`;
