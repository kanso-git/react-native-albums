import React from 'react';
import { AppRegistry, View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// Create a component
const App = () => (
  <View style={styles.container}>
    <Header headerTitle="Albums!" />
    <AlbumList />
  </View>);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
