import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Counter({ kegLevel }) {

  let [count, setCount] = useState(kegLevel);

  function sellPint() {
    if (count < 0) {
      ;
    } else {
      setCount - 1;
    }
  }
  return (
    <div>
      <h2>h2ints Remaining: {kegLevel}</h2>
      <button onClick={sellPint}>Sell Pint</button>
    </div>
  )
}