import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.pintsLeft
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleSellBeer = this.handleSellBeer.Bind(this);
  }

  handleSellBeer(beer) {
    this.setState({ beerSelected: beer });
    console.log('new Select', this.state.beerSelected);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h2>Pints Remaining: {this.state.count}</h2>
        <button onClick={this.increment}></button>
        <button onClick={this.decrement}></button>
      </div>
    );
  }
}

export default Counter;