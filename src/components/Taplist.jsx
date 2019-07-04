import React from 'react';
import PropTypes from 'prop-types';

function Taplist(props) {
  return (
    <div>
      <h2>{props.brand}</h2>
      <h2>{props.name}</h2>
      <h2>{props.ABV}</h2>
      <h2>{props.price}</h2>
    </div>
  );
}

Taplist.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  ABV: PropTypes.string.isRequired,
  pintsLeft: PropTypes.string.isRequired
};

export default Taplist;