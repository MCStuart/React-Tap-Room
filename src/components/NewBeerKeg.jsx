import React from 'react';

function NewBeerKegForm(){
  return (
    <div className="container">
      <form>
        <label htmlFor="name">Beer Name</label>
        <input placeholder="Beer Name" id="name" type="text" className="validate"/>
        <label htmlFor="brewery">Brewery Name</label>
        <input placeholder="Brewery Name" id="brewery" type="text" className="validate"/>
        <label htmlFor="price">Price</label>
        <input placeholder="Price" id="price" type="text" className="validate"/>         
        <label htmlFor="ABV">ABV</label>
        <input placeholder="ABV" id="ABV" type="text" className="validate"/>
        <button type='submit'>Add New Keg</button>
      </form>
    </div>
  );
}

export default NewBeerKegForm;