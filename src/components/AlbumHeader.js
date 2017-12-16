/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import AlbumInfo from './AlbumInfo';

const styles = StyleSheet.create({
  headerStyle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const AlbumHeader = (props) => {
  const { headerStyle } = styles;
  return (
    <View style={headerStyle}>
      <Avatar album={props.album} />
      <AlbumInfo album={props.album} />
    </View>
  );
};
export default AlbumHeader;
