import React from 'react';
import PropTypes from 'prop-types';
import WalkIn from '../WalkIn';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    WalkIn;
    this.state = {
      count: props.pintsLeft
    };
    this.decrement = this.decrement.bind(this);
    this.handleSellBeer = this.handleSellBeer.bind(this);
  }

  handleSellBeer(beer) {
    this.setState({ beerSelected: beer });
  }

  decrement() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  render() {
    return (
      <div>
        <h3>Pints Remaining: {this.state.count}</h3>
        <button onClick={this.decrement}>Gimmie Beer!</button>
      </div>
    );
  }
}

Counter.propTypes = {
  pintsLeft: PropTypes.number
};

export default Counter;