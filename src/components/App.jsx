import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Beer from './Beer';
import Taplist from './Taplist';
import Navbar from './Navbar';
import Page404 from './ErrorPage';
// import { BeerDetail } from './BeerDetail';

function App(){
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/beer' component={Taplist} />
        <Route exact path='/' component={Beer} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;