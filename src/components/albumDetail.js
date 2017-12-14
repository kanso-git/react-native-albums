/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlbumHeader from './AlbumHeader';
import AlbumImage from './AlbumImage';
import AlbumFooter from './AlbumFooter';

const styles = StyleSheet.create({
  albumStyle: {
    height: 400,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'gray',
    marginBottom: 5,
    borderRadius: 8,
  },
});

const AlbumDetail = (props) => {
  const { albumStyle } = styles;
  return (
    <View style={albumStyle}>
      <AlbumHeader album={props.album} />
      <AlbumImage  album={props.album} />
      <AlbumFooter />
    </View>
  );
};

export default AlbumDetail;
