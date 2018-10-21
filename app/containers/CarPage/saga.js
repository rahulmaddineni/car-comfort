import { takeEvery, put, apply } from 'redux-saga/effects';
import { API_KEY, GET_LOCATION_RESULTS } from './constants';
import { getLocationResultsSucceded } from './actions';

export function* fetchLocations(action) {
  try {
    const PLACES_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${
      action.query
    }&key=${API_KEY}`;
    const response = yield fetch(PLACES_URL, {
      headers: { 'Content-Type': 'application/json' },
    });
    const results = yield apply(response, response.json);
    yield put(getLocationResultsSucceded(results));
  } catch (e) {
    console.log(e);
  }
}

export default function* locationSearchSaga() {
  yield [takeEvery(GET_LOCATION_RESULTS, fetchLocations)];
}
