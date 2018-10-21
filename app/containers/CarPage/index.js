import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCarPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import CarSvg from '../../components/CarSvg';
import Header from '../../components/Header';
import createLocationSearchForm from '../../components/LocationSearchForm';
import { getLocationResults } from './actions';

const LocationSearchForm = createLocationSearchForm('locationSearchForm');

/* eslint-disable react/prefer-stateless-function */
export class CarPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-sm-6">
            <CarSvg />
          </div>
          <div className="col-sm-6">
            <LocationSearchForm onChange={this.handleLocationSearchChange} />
          </div>
        </div>
      </div>
    );
  }
  handleLocationSearchChange = data => {
    const { dispatch } = this.props;
    const query = Object.entries(data)[1][1].entries[0][1];
    dispatch(getLocationResults(query));
  };
}

CarPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

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
