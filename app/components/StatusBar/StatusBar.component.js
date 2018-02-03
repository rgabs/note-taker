import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from './StatusBar.component.style.js';

const CustomStatusBar = () => <View style={styles.container}>
  <StatusBar backgroundColor='blue' barStyle='light-content' translucent/>
</View>;

export default CustomStatusBar;
