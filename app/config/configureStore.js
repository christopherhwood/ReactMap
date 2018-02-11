import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import reducer from '../reducers';

const initialState = {
  region: {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  },
};

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}

export default configureStore;
