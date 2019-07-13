import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Taplist from './Taplist';
import Navbar from './Navbar';
import Page404 from './ErrorPage';
import Admin from './Admin';
import NewBeerKegForm from './NewBeerKeg';
import { WalkIn } from '../Models/WalkIn';
// import { BeerDetail } from './BeerDetail';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WalkIn: []
    };
    this.handleAddingNewKegToTaplist = this.handleAddingNewKegToTaplist.bind(this);
  }

  handleAddingNewKegToTaplist(newKeg){
    console.log("handleAddingNewKegToTaplist Fired");
    console.log(newKeg);
    
    
    var newTaplist = this.state.WalkIn.slice();
    newTaplist.push(newKeg);
    this.setState({WalkIn: newTaplist});
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
          <Route exact path='/' component={Taplist} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/add' render={() => <NewBeerKegForm OnNewBeerKegSubmit={this.handleAddingNewKegToTaplist} />} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}