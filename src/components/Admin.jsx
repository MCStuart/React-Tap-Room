import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div>
      <h1>Choose a selection to modify</h1>
      <Link to='/add'>Add Beer</Link>
      <Link to='/edit'>Edit Beer</Link>
      <Link to='/'>Home</Link>
    </div>
  );
}