
import React from 'react';
import { WalkIn } from '../Models/WalkIn';
import Beer from './Beer';

export default class Tapist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: WalkIn
    };
  }

  handleSellPint(i) {
    const selectedBeer = this.state.beers.slice(i, i + 1);
    const BeerValue = Object.values(selectedBeer);


    console.log(BeerValue);
  }

  render() {
    return (
      <div>
        <h1>Now on Tap:</h1>
        <hr />
        {this.state.beers.map((beer, index) =>
          <Beer name={beer.name}
            brand={beer.brand}
            price={beer.price}
            ABV={beer.ABV}
            key={index}
            pintsLeft={beer.pintsLeft}
            sellPint={() => this.handleSellPint({index})}
          />
        )}
      </div>
    );
  }
}