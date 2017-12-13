/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image } from 'react-native';


const AlbumDetail = (props) => {
  const { imageUrl } = props;
  return (
    <View>
      <Image src={imageUrl} />
    </View>
  );
};


export default AlbumDetail;
