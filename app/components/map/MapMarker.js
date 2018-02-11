import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';

const MapMarker = () => {
  return (
    <Marker>
      <View style={styles.wrapper}>
        <View style={styles.ring}/>
        <View style={styles.point}/>
      </View>
    </Marker>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  ring: {
    backgroundColor: '#ADD8E699',
    borderRadius: 15,
    height: 30,
    width: 30
  },
  point: {
    backgroundColor: '#0000A0',
    borderRadius: 3,
    height: 6,
    width: 6
  }
});

export default MapMarker;
