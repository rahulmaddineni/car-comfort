/*
 *
 * CarPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_LOCATION_RESULTS,
  GET_LOCATION_RESULTS_SUCCEDED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getLocationResults(query) {
  return {
    type: GET_LOCATION_RESULTS,
    query,
  };
}

export function getLocationResultsSucceded(data) {
  return {
    type: GET_LOCATION_RESULTS_SUCCEDED,
    data,
  };
}
