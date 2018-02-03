import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import Header from '../Header/Header.component';
import commonStyles from '../../styles/common.style';
import StatusBar from '../StatusBar/StatusBar.component';
import Touchable from 'react-native-platform-touchable';
import noop from 'lodash/noop';
import List from '../List/List.component';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  headerLeft = <Touchable style={commonStyles.headerIcon}><Icon name='rocket' size={30} color='#900' /></Touchable>;
  headerRight = <Touchable style={commonStyles.headerIcon} onPress={this.props.onAddNotePress}><Icon name='rocket' size={30} color='#900' /></Touchable>;

  render () {
    const {notes} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar />
        <Header leftComponent={this.headerLeft} rightComponent={this.headerRight} title='Notes'/>
        <List headingKey='title' subHeadingKey='text' data={notes}/>
      </View>
    );
  }
}

Home.defaultProps = {
  onAddNotePress: noop,
  notes: []
};

Home.propTypes = {
  notes: PropTypes.array,
  onAddNotePress: PropTypes.func
};

export default Home;
