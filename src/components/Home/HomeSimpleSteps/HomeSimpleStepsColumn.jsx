import React from 'react';
import PropTypes from 'prop-types';

export default function HomeSimpleStepsColumn({
  imgSrc = '',
  imgAlt = '',
  firstText = '',
  secondText = '',
}) {
  return (
    <div className="simple-steps__column">
      {/* FIXME wartość props do before'a? */}
      <img src={imgSrc} alt={imgAlt} />
      <p className="simple-steps__column--title">{firstText}</p>
      <p>{secondText}</p>
    </div>
  );
}

HomeSimpleStepsColumn.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
};
