import React from 'react';
import {Provider} from 'react-redux';

import configureStore from '../config/configureStore'
import AppContainer from './AppContainer';

const Root = () => {
  return (
    <Provider store={configureStore()}>
      <AppContainer/>
    </Provider>
  )
};

export default Root;
