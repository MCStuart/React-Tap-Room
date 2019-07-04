import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <style jsx>{`
        // CSS styles go here
      `}</style>
      <h1>Tap Reactor</h1>
      <h3>Let beer desorb</h3>
      <Link to='/'>Taplist Home</Link>
      <Link to='/beer'>All Beers</Link>
      <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default Navbar;