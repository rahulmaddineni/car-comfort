/*
 *
 * CarPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, GET_LOCATION_RESULTS_SUCCEDED } from './constants';

export const initialState = fromJS({});

function carPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_LOCATION_RESULTS_SUCCEDED:
      return { ...state, locations: action.data };
    default:
      return state;
  }
}

export default carPageReducer;
