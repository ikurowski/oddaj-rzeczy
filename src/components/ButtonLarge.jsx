import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ButtonLarge({ text = '' }) {
  return (
    <Link className="btn--large" to="rejestracja">
      {text}
    </Link>
  );
}

ButtonLarge.propTypes = {
  text: PropTypes.string.isRequired,
};
