/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    height: 310,
  },
  imageStyle: {
    width: null,
    height: 300,
    flex: 1,
  },
});

const AlbumImage = (props) => {
  const { viewStyle, imageStyle } = styles;
  const { image } = props.album;
  const pic = {
    uri: image,
  };

  return (<View style={viewStyle}><Image source={pic} style={imageStyle} /></View>);
};
export default AlbumImage;
