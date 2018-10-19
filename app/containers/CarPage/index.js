import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCarPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import CarSvg from '../../components/CarSvg';
import Header from '../../components/Header';

/* eslint-disable react/prefer-stateless-function */
export class CarPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CarSvg width="50%" height="50%" />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  carpage: makeSelectCarPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'carPage', reducer });
const withSaga = injectSaga({ key: 'carPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CarPage);
