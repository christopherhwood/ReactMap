import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const SearchButton = ({onPress, style}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles.container}>
        <Image source={require('../../images/search.png')}/>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  }
});

export default SearchButton;
