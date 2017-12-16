import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: [],
    loading: false,
    error: false,
  }
  componentWillMount() {
    this.getAlbums();
  }
  getAlbums = async () => {
    const url = 'https://rallycoding.herokuapp.com/api/music_albums';
    try {
      this.setState(() => ({ error: false }));
      this.setState(() => ({ loading: true }));
      const res = await axios.get(url);
      this.setState(() => ({ loading: false }));
      const albums = res.data;
      this.setState(() => ({
        albums,
      }));
    } catch (e) {
      this.setState(() => ({ loading: false }));
      this.setState(() => ({ error: true }));
      console.log(`An error occured while getting the ablmus data : ${e}`);
    }
  }
  styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20,
    },
  });
  displayAlbumsIfNoErros = () => (this.state.error
    ? <Text> Error loading data from server </Text> : this.renderAlbums())
  renderAlbums = () => this.state
    .albums
    .map(album => <AlbumDetail key={album.title} album={album} />);

  render() {
    return (
      <ScrollView contentContainerStyle={this.styles.contentContainer}>
        {this.state.loading ? <Text> Loading ...</Text> : this.displayAlbumsIfNoErros() }
      </ScrollView>
    );
  }
}

export default AlbumList;

