import * as types from '../actions/types';

export const autocompletes = (state = [], action) => {
  if (action.type === types.RECEIVE_AUTOCOMPLETE) {
    return action.response;
  }
  return state;
};

export const searchResults = (state = [], action) => {
  if (action.type === types.RECEIVE_SEARCH_RESULTS) {
    return action.response;
  }
  return state;
};
