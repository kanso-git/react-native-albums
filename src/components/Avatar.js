/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 5,
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
});

const Avatar = (props) => {
  const { viewStyle, imageStyle } = styles;
  const { thumbnail_image } = props.album;

  const pic = {
    uri: thumbnail_image,
    resizeMode: Image.resizeMode.contain,
  };

  return (
    <View style={viewStyle}>
      <Image source={pic} style={imageStyle} />
    </View>);
};

export default Avatar;
