import React, {Component} from 'react';
import {View} from 'react-native';
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

  getHeaderLeft = () => <Touchable style={commonStyles.headerIconWrapper} onPress={this.props.toggleHeartFilter}>
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
        <Header leftComponent={this.getHeaderLeft()} rightComponent={this.headerRight} title='Notes'/>
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
