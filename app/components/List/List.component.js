import PropTypes from 'prop-types';
import React, {Component} from 'react';
import result from 'lodash/result';
import styles from './List.styles.js';
import {FlatList} from 'react-native';
import {Text, View} from 'react-native';
import Swipeable from 'react-native-swipeable';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/FontAwesome';

class List extends Component {

  _listItem = ({item}) => { // index, separators are also passed
    const {headingKey, subHeadingKey} = this.props;
    const heading = result(item, headingKey);
    const subHeading = result(item, subHeadingKey);
    const right = [
      <Touchable key={`${item.id}right`} style={{flex: 1, justifyContent: 'center', paddingHorizontal: 15}} onPress={this.props.onDeletePress(item.id)}>
        <Icon name='trash-o' size={35} color='white'/>
      </Touchable>
    ];
    const leftButtons = [
      <Touchable key={`${item.id}left`} style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 15}} onPress={this.props.onStarPress(item.id)}>
        <Icon name={item.heart ? 'heart' : 'heart-o'} size={35} color='white'/>
      </Touchable>
    ];
    return (
      <Swipeable leftButtons={leftButtons} rightButtons={right} >
        <View  style={styles.listItemWrapper} animation='fadeIn' duration={500}>
          {heading ? <Text style={styles.heading} >{heading}</Text> : null}
          {subHeading ? <Text  style={styles.subHeading}>{subHeading}</Text> : null}
        </View>
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
