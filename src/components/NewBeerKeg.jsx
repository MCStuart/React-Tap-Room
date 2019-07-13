import React from 'react';
import PropTypes from 'prop-types';

export default function NewBeerKegForm() {
  let _name = null;
  let _brewery = null;
  let _price = null;
  let _ABV = null;


  function handleNewBeerKegFormSubmit(event) {
    event.preventDefault();
    props.OnNewBeerKegSubmit({ name: _name.value, brewery: _brewery.value, price: _prive.value, ABV: _ABV.value })
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