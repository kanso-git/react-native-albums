/* eslint-disable react/prop-types */
import React from 'react';
import { Text, Image, View, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  coverImageStyle: {
    width: null,
    height: 350,
    flex: 1,
  },
});

const AlbumDetail = ({ album }) => {
  const {
    textContainer,
    thumbnailStyle, thumbnailContainer,
    coverImageStyle, headerTextStyle,
  } = styles;
  const {
    title, artist, thumbnail_image, image, url,
  } = album;
  const thumbnailImage = {
    uri: thumbnail_image,
  };
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image source={thumbnailImage} style={thumbnailStyle} />
        </View>
        <View style={textContainer}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={coverImageStyle} />
      </CardSection>
      <CardSection>
        <Button press={() => Linking.openURL(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
