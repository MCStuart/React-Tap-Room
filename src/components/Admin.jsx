import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div>
      <style jsx>{`
      after:h2 {
        display: inline-block;
        color: #000000;
      }
      `}</style>
      <h2>Choose a selection to modify</h2>
      <Link to='/add' >Add Beer</Link>
      <br/>
      <Link to='/edit'>Edit Beer</Link>
      <br/>
      <Link to='/'>Home</Link>
    </div>
  );
}