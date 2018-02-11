import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchContainer from './search/SearchContainer';
import MapContainer from './map/MapContainer';

const AppContainer = () => {
  return (
    <View style={{flex: 1}}>
      <MapContainer/>
      <SearchContainer style={styles.search}/>
    </View>
  )
};

const styles = StyleSheet.create({
  search: {
    marginHorizontal: 15,
    marginTop: 35,
    position: 'absolute'
  }
})

export default AppContainer;
