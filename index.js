import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// Create a component
const App = () => (
  <View>
    <Header headerTitle="Albums!" />
    <AlbumList />
  </View>);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
