/* Header: Renders app header with left and right buttond flexibility*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.component.style';
import {ShadowView} from '../../styles/common.styled';
import {View, Text} from 'react-native';


const Header = ({leftComponent, title, rightComponent}) => (
  <ShadowView style={styles.container}>
    <View>{leftComponent}</View>
    <Text style={styles.title}>{title}</Text>
    <View>{rightComponent}</View>
  </ShadowView>
);

Header.propTypes = {
  leftComponent: PropTypes.node,
  rightComponent: PropTypes.node,
  title: PropTypes.string
};
export default Header;
