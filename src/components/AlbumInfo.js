/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  infoStyle: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 40,
  },
  textStyle: {
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
