import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ButtonLarge({ text = '', link = 'logowanie' }) {
  return (
    <Link className="btn--large" to={link}>
      {text}
    </Link>
  );
}

ButtonLarge.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ButtonLarge.defaultProps = {
  link: 'logowanie',
};
