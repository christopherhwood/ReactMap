import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ThrottledMapView from './ThrottledMapView';
import * as mapActions from '../../actions/mapActions';


const MapContainer = ({region, markers, setRegion}) => {
  return (
    <ThrottledMapView
      markers={markers}
      onRegionChange={setRegion}
      region={region}
      style={styles.map}
    />
  )
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

const mapStateToProps = (state) => ({
  region: state.region,
  markers: state.searchResults
});

export default connect(
  mapStateToProps,
  mapActions
)(MapContainer);
