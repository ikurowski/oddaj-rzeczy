import React from 'react';
import PropTypes from 'prop-types';

export default function HomeColumn({ number, title, text }) {
  return (
    <div className="home-column">

      <p className="home-column__number">{number}</p>
      <p className="home-column__title">{title}</p>
      {/* FIXME może h3 tu? */}
      <p className="home-column__text">{text}</p>
    </div>
  );
}

HomeColumn.propTypes = PropTypes.string.isRequired;
