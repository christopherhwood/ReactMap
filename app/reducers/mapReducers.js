import * as types from '../actions/types';

export const region = (state = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  }, action) => {
  if (action.type === types.SET_REGION) {
    return action.region;
  }
  return state;
};
