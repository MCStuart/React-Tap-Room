import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Taplist from './Taplist';
import Navbar from './Navbar';
import Page404 from './ErrorPage';
import Admin from './Admin';
import NewBeerKeg from './NewBeerKeg';
import { WalkIn } from '../Models/WalkIn';
// import { BeerDetail } from './BeerDetail';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WalkIn: WalkIn
    };
    this.handleAddingNewKegToTaplist = this.handleAddingNewKegToTaplist.bind(this);
  }

  handleAddingNewKegToTaplist(newKeg) {
    var newTaplist = this.state.WalkIn.slice();
    newTaplist.push(newKeg);
    this.setState({
      WalkIn: newTaplist
    });
    // eslint-disable-next-line no-console
    console.log(newTaplist);
    
  }


  // handleSellPint(i) {
  //   const selectedBeer = this.state.beers.slice(i, i + 1);
  //   const BeerValue = Object.values(selectedBeer);
  //   console.log(BeerValue);
  // }


  render() {
    return (
      <div>
        <style jsx global>{`
      body, div#react-app-root {
        display: contents;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
      `}</style>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Taplist WalkIn={this.state.WalkIn} />} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/add' render={() => <NewBeerKeg OnNewBeerKeg={this.handleAddingNewKegToTaplist} />} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}