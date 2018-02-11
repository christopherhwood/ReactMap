import {GOOGLE_API_KEY} from '../config/env.js';

export const fetchAutocompletes = (text, region) => (
  fetch(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${GOOGLE_API_KEY}&input=${text}&location=${region.latitude},${region.longitude}&radius=2000`)
    .then(response => response.json())
    .then(responseJson => responseJson.predictions.map(resp => resp.description))
)

export const fetchSearchResults = (query, region) => (
  fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_API_KEY}&location=${region.latitude},${region.longitude}&radius=2000&keyword=${query}`)
    .then(response => response.json())
    .then(responseJson => responseJson.results)
)
