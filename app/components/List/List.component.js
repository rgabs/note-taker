import PropTypes from 'prop-types';
import React, {Component} from 'react';
import result from 'lodash/result';
import styles from './List.styles.js';
import {FlatList} from 'react-native';
import {Text, View} from 'react-native';

class List extends Component {

  _listItem = ({item, index}) => { // index, separators are also passed
    const {headingKey, subHeadingKey} = this.props;
    const heading = result(item, headingKey);
    const subHeading = result(item, subHeadingKey);
    return (
      <View key={index} style={styles.listItemWrapper} animation='fadeIn' duration={500}>
        <View>
          {heading ? <Text style={styles.heading} >{heading}</Text> : null}
          {subHeading ? <Text  style={styles.subHeading}>{subHeading}</Text> : null}
          <Text onPress={this.props.onStarPress(item.id)}>STAR</Text>
          <Text onPress={this.props.onDeletePress(item.id)}>DELETE</Text>
        </View>
      </View>
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
