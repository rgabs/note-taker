import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import Header from '../Header/Header.component';
import commonStyles from '../../styles/common.style';
import StatusBar from '../StatusBar/StatusBar.component';
import Touchable from 'react-native-platform-touchable';
import noop from 'lodash/noop';
import List from '../List/List.component';
import Icon from 'react-native-vector-icons/FontAwesome';


import Swipeable from 'react-native-swipeable';

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];

function MyListItem () {
  return (
    <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
      <Text>My swipeable content</Text>
    </Swipeable>
  );
}

class Home extends Component {

  headerLeft = () => <Touchable style={commonStyles.headerIconWrapper} onPress={this.props.toggleHeartFilter}>
    <Icon name={this.props.heartFilter ? 'heart' : 'heart-o'} size={30} color='white' />
  </Touchable>;

  headerRight = <Touchable style={commonStyles.headerIconWrapper} onPress={this.props.onAddNotePress}>
    <Icon name='plus' size={30} color='white' />
  </Touchable>;

  render () {
    const {notes} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar />
        <Header leftComponent={this.headerLeft()} rightComponent={this.headerRight} title='Notes'/>
        <MyListItem />
        <List onStarPress={this.props.toggleHeartForNote} onDeletePress={this.props.deleteNote}
          headingKey='title' subHeadingKey='text' data={notes}/>
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
  heartFilter: PropTypes.bool,
  onAddNotePress: PropTypes.func,
  toggleHeartFilter: PropTypes.func,
  toggleHeartForNote: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default Home;
