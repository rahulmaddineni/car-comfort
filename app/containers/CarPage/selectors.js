import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the carPage state domain
 */

const selectCarPageDomain = state => state.get('carPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CarPage
 */

const makeSelectCarPage = () =>
  createSelector(selectCarPageDomain, substate => substate.toJS());

export default makeSelectCarPage;
export { selectCarPageDomain };
