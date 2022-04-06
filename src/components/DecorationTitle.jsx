import React from 'react';
import PropTypes from 'prop-types';

export default function DecorationTitle({ firstText = '', secondText = '' }) {
  return (
    <h1 className="decoration-title">
      {firstText}
      {secondText && <p>{secondText}</p>}
    </h1>
  );
}

DecorationTitle.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string,
};

DecorationTitle.defaultProps = {
  secondText: '',
};
