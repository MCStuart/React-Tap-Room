import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Beer } from './Beer';
import { BeerDetail } from './BeerDetail';
import { Taplist } from './Taplist';
import { Navbar } from './Navbar';
// import { ErrorPage } from './ErrorPage';

function App(){
  return (
    <div>
      <h1>Tap Room</h1>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Taplist} />
        <Route exact path='/beer' component={Beer} />
      </Switch>
    </div>
  );
}

export default App;