import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => <Header headerTitle="Albums!" />;

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
