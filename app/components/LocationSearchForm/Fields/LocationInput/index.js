import React from 'react';
import PropTypes from 'prop-types';

export const LocationInput = props => {
  const { type, placeholder, name } = props;
  return (
    <div>
      <input
        {...props.input}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};

LocationInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.any,
};

export default LocationInput;
