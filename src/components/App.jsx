import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Taplist from './Taplist';
import Navbar from './Navbar';
import Page404 from './ErrorPage';
import Admin from './Admin';
import NewBeerKegForm from './NewBeerKeg';
// import { BeerDetail } from './BeerDetail';


export default function App() {
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
        <Route exact path='/add' component={NewBeerKegForm} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}