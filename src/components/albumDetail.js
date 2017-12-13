/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image } from 'react-native';

const styles = {
  cardViewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    margin: 10,
  },
  mainImageStyle: {
    width: '90%',
    height: '80%',
  },
};

const AlbumDetail = (props) => {
  const { cardViewStyle, mainImageStyle } = styles;
  const {
    image, title, artist, thumbnail_image,
  } = props.album;
  const pic = {
    uri: image,
  };
  const thumbnailPic = {
    uri: thumbnail_image,
  };
  return (
    <View style={cardViewStyle}>
      <Text > { title } </Text>
      <Text > { artist } </Text>
      <Image source={pic} style={mainImageStyle} />
      <Text > footer </Text>
    </View>
  );
};


export default AlbumDetail;
