import PropTypes from 'prop-types';
import React, {Component} from 'react';
import result from 'lodash/result';
import {ListItemWrapper, RightSwipeWrapper, LeftSwipeWrapper} from './List.styled.js';
import {FlatList} from 'react-native';
import {Text} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {FontAwesome} from '@expo/vector-icons'; // 6.2.2

class List extends Component {

  _listItem = ({item}) => { // index, separators are also passed
    const {headingKey, subHeadingKey} = this.props;
    const heading = result(item, headingKey);
    const subHeading = result(item, subHeadingKey);
    const right = [
      <RightSwipeWrapper key={`${item.id}right`} onPress={this.props.onDeletePress(item.id)}>
        <FontAwesome name='trash-o' size={35} color='white'/>
      </RightSwipeWrapper>
    ];
    const leftButtons = [
      <LeftSwipeWrapper key={`${item.id}left`} onPress={this.props.onStarPress(item.id)}>
        <FontAwesome name={item.heart ? 'heart' : 'heart-o'} size={35} color='white'/>
      </LeftSwipeWrapper>
    ];
    return (
      <Swipeable leftButtons={leftButtons} rightButtons={right} >
        <ListItemWrapper animation='fadeIn' duration={500}>
          {heading ? <Text>{heading}</Text> : null}
          {subHeading ? <Text>{subHeading}</Text> : null}
        </ListItemWrapper>
      </Swipeable>
    );
  }

  _keyExtractor = (item) => item.id

  render () {
    const {data} = this.props;
    return (
      <FlatList data={data} renderItem={this._listItem} keyExtractor={this._keyExtractor}/>
    );
  }
}
List.defaultProps = {
  data: [],
  headingKey: 'heading',
  subHeadingKey: 'subHeading',
};
List.propTypes = {
  onStarPress: PropTypes.func,
  onDeletePress: PropTypes.func,
  data: PropTypes.array,
  headingKey: PropTypes.string,
  subHeadingKey: PropTypes.string
};
export default List;
