import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import styles from './StatusBar.component.style.js';

console.log('StatusBar.height', StatusBar.height);
const CustomStatusBar = () => <View style={styles.container}>
  <StatusBar backgroundColor='blue' barStyle='light-content' translucent/>
</View>;

export default CustomStatusBar;
