import React, { Component, PropTypes } from 'react';
import { requireNativeComponent, Event, processColor } from 'react-native';
import _ from 'lodash';

export default class HorizontalPicker extends Component {
  constructor (props) {
    super(props);
  }

  convertToString(array) {
    return _.map(array, (item) => {
      return item.toString();
    });
  }

  render() {
    const {
      onChange,
      selectedIndex,
      style,
      titles,
      itemColor,
      selectedColor
    } = this.props;
    return (
      <RNTHorizontalPicker
        selectedIndex={selectedIndex || 0}
        style={style}
        titles={this.convertToString(titles)}
        itemColor={processColor(itemColor)}
        selectedColor={processColor(selectedColor)}
        onChange={onChange}
      />
    );
  }
}

HorizontalPicker.defaultProps = {
  selectedIndex: 0,
  style: { width: 150, height: 100 },
  titles: [1, 2, 3, 4],
  itemColor: '#888',
  selectedColor: '#000'
};

HorizontalPicker.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  selectedIndex: React.PropTypes.number,
  style: React.PropTypes.object,
  titles: React.PropTypes.array.isRequired,
  itemColor: React.PropTypes.number,
  selectedColor: React.PropTypes.number
};

const RNTHorizontalPicker = requireNativeComponent('RNTHorizontalPicker', HorizontalPicker);

/*
{
  propTypes: {
    titles: PropTypes.array,
    selectedIndex: PropTypes.number,
    itemColor: PropTypes.string,
    selectedColor:PropTypes.string
  }
}, {
  nativeOnly: {
    onChange: true
  }
}
*/
