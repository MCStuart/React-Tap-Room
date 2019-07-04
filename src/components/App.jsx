import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Beer } from './Beer';
import { BeerDetail } from './BeerDetail';
import { Taplist } from './Taplist';
import { Navbar } from './Navbar';
import { ErrorPage } from './ErrorPage';

function App(){
  return (
    <div>
      <h1>Tap Room</h1>
      <Switch>

      </Switch>
    </div>
  );
}

export default App;