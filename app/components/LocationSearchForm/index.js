import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import './styles.css';
import LocationInput from './Fields/LocationInput';
// import styled from 'styled-components';

export const Form = props => {
  const { handleChange } = props;
  return (
    <div className="card location-input-card">
      <form>
        <div className="card-header">
          <div>
            <Field
              name="startingPoint"
              component={LocationInput}
              type="text"
              placeholder="Starting Point"
              onChange={handleChange}
            />
            <Field
              name="destination"
              component={LocationInput}
              type="text"
              placeholder="Destination"
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button type="submit">Go</button>
          </div>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func,
};

export default function createLocationSearchForm(namespace) {
  return reduxForm({ form: namespace })(Form);
}
