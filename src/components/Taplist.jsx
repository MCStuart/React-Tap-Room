import React from 'react';
import Beer from './Beer';
import { WalkIn } from '../Models/WalkIn';

export default function Tapist() {

  return (
    <div>
      <h1>Now on Tap:</h1>
      <hr />
      {WalkIn.map((beer, index) =>
        <Beer name={beer.name}
          brand={beer.brand}
          price={beer.price}
          ABV={beer.ABV}
          key={index}
          pintsLeft={beer.pintsLeft}
          sellPint={() => this.handleSellPint({ index })}
        />
      )}
    </div>
  );
}