import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HomeWrapper} from './Home.component.styled';
import Header from '../Header/Header.component';
import {HeaderIconWrapper} from '../../styles/common.styled';
import StatusBar from '../StatusBar/StatusBar.component';
import noop from 'lodash/noop';
import List from '../List/List.component';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {

  getHeaderLeft = () => <HeaderIconWrapper onPress={this.props.toggleHeartFilter}>
    <Icon name={this.props.heartFilter ? 'heart' : 'heart-o'} size={30} color='white' />
  </HeaderIconWrapper>;

  headerRight = <HeaderIconWrapper onPress={this.props.onAddNotePress}>
    <Icon name='plus' size={30} color='white' />
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
