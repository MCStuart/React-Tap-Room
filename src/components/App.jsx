import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Beer from './Beer';
import Taplist from './Taplist';
import Navbar from './Navbar';
import Page404 from './ErrorPage';
import Admin from './Admin';
import NewBeerKegForm from './NewBeerKeg';
// import { BeerDetail } from './BeerDetail';


function App(){
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
        <Route exact path='/beer' component={Taplist} />
        <Route exact path='/' component={Beer} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/add' component={NewBeerKegForm} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;