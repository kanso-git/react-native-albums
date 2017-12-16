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
    borderColor: 'white',
    marginBottom: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
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
