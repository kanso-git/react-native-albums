import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
});

const Button = props => (
  <TouchableOpacity
    style={styles.btnStyle}
    onPress={() => props.press()}
  >
    <Text style={styles.textStyle}> {props.children} </Text>
  </TouchableOpacity>);

export default Button;
