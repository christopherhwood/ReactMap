import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import throttle from 'lodash/throttle';

import MapMarker from './MapMarker';

const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = 0.04;

export default class ThrottledMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: this.props.region
    };
    this._throttledChangeRegion = throttle(this.props.onRegionChange, 1000);
  }

  componentDidMount() {
    this._getUserLocation();
  }

  _animateToRegion = (region) => {
    setTimeout(() => this._map.animateToRegion(region), 10);
  }

  _getUserLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };
          this._animateToRegion(region);
        },
        (error) => {
          switch (error.code) {
            case 1:
              Alert.alert("", "Please allow this application to use your lcoation for a better experience.");
              break;
            default:
              Alert.alert("", "Error: Could not get current location");
          }
        }
      );
    } catch(e) {
      alert(e.message || "");
    }
  }

  _onRegionChange = (region) => {
    this.setState({region: region});
    this._throttledChangeRegion(region);
  }

  render() {
    const {markers, style} = this.props;

    return (
      <MapView
        data={markers}
        provider={PROVIDER_GOOGLE}
        region={this.state.region}
        onRegionChangeComplete={this._onRegionChange}
        style={style}
        ref={component => {this._map = component}}
      >
        {
          markers.map(marker => (
            <MapMarker
              key={marker.id}
              id={marker.id}
              coordinate={{latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng}}
            />
          ))
        }
      </MapView>
    )
  }
};
