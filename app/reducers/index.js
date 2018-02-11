import {combineReducers} from 'redux';
import * as searchReducers from './searchReducers';
import * as mapReducers from './mapReducers';

export default combineReducers({
  ...searchReducers,
  ...mapReducers
});

 // reducer;
