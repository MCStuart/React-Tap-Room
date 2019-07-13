import React from 'react';
import Beer from './Beer';
import WalkIn from '../WalkIn';
import PropTypes from 'prop-types';

export default function Taplist(props) {

  function sellPint() {
    props.handleSellPint({ id: props.id });
  }

  function deleteKeg() {
    props.handleDeleteKeg({ id: props.id });
  }

  return (
    <div>
      <style jsx>{`
        .tap-display {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-gap: 1rem;
        }
      `}</style>
      <style jsx>{`
        // CSS Goes Here
      `}</style>
      <div className='tap-display'>
        {WalkIn.map((beer, index) =>
          <Beer name={beer.name}
            brand={beer.brand}
            price={beer.price}
            ABV={beer.ABV}
            pintsLeft={beer.pintsLeft}
            key={index}
          />
        )}
        <button onClick={sellPint}>Take a Pint!</button>
        <button onClick={deleteKeg}>Remove from Taplist</button>
      </div>
    </div>
  );
}

Taplist.propTypes = {
  handleSellPint: PropTypes.func,
  handleDeleteKeg: PropTypes.func,
  id: PropTypes.number.isRequired
};