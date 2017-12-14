/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  infoStyle: {
    flex: 4,
  },
  textStyle: {
    color: 'white',
    fontSize: 13,
  },
});

const AlbumInfo = (props) => {
  const { infoStyle, textStyle } = styles;
  const { title, artist } = props.album;

  return (
    <View style={infoStyle}>
      <Text style={textStyle}>{title} </Text>
      <Text style={textStyle}>{artist} </Text>
    </View>);
};
export default AlbumInfo;
