import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HomeWrapper} from './Home.component.styled.js';
import Header from '../Header/Header.component.js';
import {HeaderIconWrapper} from '../../styles/common.styled.js';
import StatusBar from '../StatusBar/StatusBar.component.js';
import noop from 'lodash/noop';
import List from '../List/List.component.js';
import { FontAwesome } from '@expo/vector-icons'; // 6.2.2

class Home extends Component {

  getHeaderLeft = () => <HeaderIconWrapper onPress={this.props.toggleHeartFilter}>
    <FontAwesome name={this.props.heartFilter ? 'heart' : 'heart-o'} size={30} color='white' />
  </HeaderIconWrapper>;

  headerRight = <HeaderIconWrapper onPress={this.props.onAddNotePress}>
    <FontAwesome name='plus' size={30} color='white' />
  </HeaderIconWrapper>;

  render () {
    const {notes} = this.props;

    return (
      <HomeWrapper>
        <StatusBar />
        <Header leftComponent={this.getHeaderLeft()} rightComponent={this.headerRight} title='Notes'/>
        <List onStarPress={this.props.toggleHeartForNote} onDeletePress={this.props.deleteNote}
          headingKey='title' subHeadingKey='text' data={notes}/>
      </HomeWrapper>
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
