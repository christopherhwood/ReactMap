import * as types from './types';

export const receiveAutocomplete = (response) => ({
  type: types.RECEIVE_AUTOCOMPLETE,
  response
});

export const receiveSearchResults = (response) => ({
  type: types.RECEIVE_SEARCH_RESULTS,
  response
});
