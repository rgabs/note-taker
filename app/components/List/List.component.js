import PropTypes from 'prop-types';
import React, {Component} from 'react';
import result from 'lodash/result';
import styles from './List.styles.js';
import {FlatList} from 'react-native';
import {Text} from 'react-native';
import {ShadowView} from '../../styles/common.styled';
import Swipeable from 'react-native-swipeable';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/FontAwesome';

class List extends Component {

  _listItem = ({item}) => { // index, separators are also passed
    const {headingKey, subHeadingKey} = this.props;
    const heading = result(item, headingKey);
    const subHeading = result(item, subHeadingKey);
    const right = [
      <Touchable key={`${item.id}right`} style={styles.rightContainer} onPress={this.props.onDeletePress(item.id)}>
        <Icon name='trash-o' size={35} color='white'/>
      </Touchable>
    ];
    const leftButtons = [
      <Touchable key={`${item.id}left`} style={styles.leftContainer} onPress={this.props.onStarPress(item.id)}>
        <Icon name={item.heart ? 'heart' : 'heart-o'} size={35} color='white'/>
      </Touchable>
    ];
    return (
      <Swipeable leftButtons={leftButtons} rightButtons={right} >
        <ShadowView  style={styles.listItemWrapper} animation='fadeIn' duration={500}>
          {heading ? <Text>{heading}</Text> : null}
          {subHeading ? <Text>{subHeading}</Text> : null}
        </ShadowView>
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
