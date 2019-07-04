import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Beer from './Beer';
import Taplist from './Taplist';
import Navbar from './Navbar';
// import { BeerDetail } from './BeerDetail';
// import { ErrorPage } from './ErrorPage';

function App(){
  return (
    <div>
      <h1>Test</h1>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Taplist} />
        <Route exact path='/beer' component={Beer} />
      </Switch>
    </div>
  );
}

export default App;