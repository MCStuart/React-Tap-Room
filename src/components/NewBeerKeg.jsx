/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

export default function NewBeerKeg(props) {
  let _name = null;
  let _brewery = null;
  let _price = null;
  let _ABV = null;


  function handleNewBeerKegFormSubmit(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brewery.value);
    console.log(_price.value);
    console.log(_ABV.value);
    
    props.OnNewBeerKeg({ name: _name.value, brewery: _brewery.value, price: _price.value, ABV: _ABV.value, id: v4() });
    _name.value = '';
    _brewery.value = '';
    _price.value = '';
    _ABV.value = '';
  }

  return (
    <div className="container">
      <form onSubmit={handleNewBeerKegFormSubmit}>
        <label htmlFor="name">Beer Name</label>
        <input placeholder="Beer Name" id="name" type="text" className="validate" ref={(input) => {_name = input;}}/>
        <label htmlFor="brewery">Brewery Name</label>
        <input placeholder="Brewery Name" id="brewery" type="text" className="validate" ref={(input) => {_brewery = input;}}/>
        <label htmlFor="price">Price</label>
        <input placeholder="Price" id="price" type="text" className="validate" ref={(input) => {_price = input;}}/>
        <label htmlFor="ABV">ABV</label>
        <input placeholder="ABV" id="ABV" type="text" className="validate" ref={(input) => {_ABV = input;}}/>
        <button type='submit'>Add New Keg</button>
      </form>
    </div>
  );
}

NewBeerKeg.propTypes = {
  onNewKeg: PropTypes.func,
  OnNewBeerKeg: PropTypes.func
};
