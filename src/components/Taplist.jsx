import React from 'react';
import PropTypes from 'prop-types';

function Taplist(props) {
  return (
    <div className='individual-tap'>
      <style jsx global>{`
        .tap-display {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-gap: 1rem;
        }
      `}</style> 
      <style jsx>{`
        
        div.individual-tap {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 1rem;
          
        }
        h2 {
          font-size: 2rem;
          margin-bottom: .5rem;
          margin-top:0;
        }
        
        div.individual-tap:first-child, div.individual-tap:nth-child(5) {
          margin-left: 20px;
        }

        div.individual-tap:nth-child(4), div.individual-tap:last-child {
          margin-right: 20px;
        }

        div.individual-tap > h2:first-child {
          margin-top: 10px;
          font-weight: bold;
          font-variant: small-caps;
        }

        div.individual-tap > h2:nth-child(2) {
          font-style: italic;
          font-variant: small-caps;
        }

        .beer-deets {
          display: flex;
          justify-content: space-between;
        }
        .beer-deets h2 {
          margin-top: 0;
        }

      `}</style>
      <h2>{props.brand}</h2>
      <h2>{props.name}</h2>
      <div className='beer-deets'>
        <h2>{props.ABV}</h2>
        <h2>{props.price}</h2>
      </div>
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