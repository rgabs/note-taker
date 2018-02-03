import PropTypes from 'prop-types';
import React, {Component} from 'react';
import result from 'lodash/result';
import styles from './List.styles.js';
import {FlatList, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import noop from 'lodash';

class List extends Component {

  _listItem = ({item, index}) => { // index, separators are also passed
    const {headingKey, subHeadingKey} = this.props;
    const heading = result(item, headingKey);
    const subHeading = result(item, subHeadingKey);
    return (
      <TouchableOpacity id={index}>
        <View key={index} style={styles.listItemWrapper} animation='fadeIn' duration={500}>
          <View>
            {heading ? <Text numberOfLines={2} ellipsizeMode='tail' style={styles.heading} >{heading}</Text> : null}
            {subHeading ? <Text numberOfLines={3} ellipsizeMode='tail' style={styles.subHeading}>{subHeading}</Text> : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _keyExtractor = (item, index) => index

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
  onPress: noop
};
List.propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.array,
  headingKey: PropTypes.string,
  subHeadingKey: PropTypes.string
};
export default List;
