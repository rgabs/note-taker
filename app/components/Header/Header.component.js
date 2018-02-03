/* Header: Renders app header with left and right buttond flexibility*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.component.style';
import {View, Text} from 'react-native';


const Header = ({leftComponent, title, rightComponent}) => (
  <View style={styles.container}>
    <View>{leftComponent}</View>
    <View>
      <Text>{title}</Text>
    </View>
    <View>{rightComponent}</View>
  </View>
);

Header.propTypes = {
  leftComponent: PropTypes.node,
  rightComponent: PropTypes.node,
  title: PropTypes.string
};
export default Header;
