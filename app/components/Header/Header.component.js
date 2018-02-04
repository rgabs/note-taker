/* Header: Renders app header with left and right buttond flexibility*/

import React from 'react';
import PropTypes from 'prop-types';
import {HeaderWrapper, Title} from './Header.component.styled.js';

const Header = ({leftComponent, title, rightComponent}) => (
  <HeaderWrapper>
    {leftComponent}
    <Title>{title}</Title>
    {rightComponent}
  </HeaderWrapper>
);

Header.propTypes = {
  leftComponent: PropTypes.node,
  rightComponent: PropTypes.node,
  title: PropTypes.string
};
export default Header;
