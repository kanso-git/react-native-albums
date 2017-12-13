import React from 'react';
import { View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';


const getAlbums = () => {
  const albums = [{ image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg' },
    { image: 'https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg' }, { image: 'https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg' }];
  return albums.map(album => <AlbumDetail imageUrl={album.image} />);
};

const AlbumList = () => (<View></View>);


export default AlbumList;

