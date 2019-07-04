import React from 'react';
import Beer from './Beer';

var WalkIn = [
  {
    name: 'Free Range Red',
    brand: 'Laurelwood',
    price: '$6',
    ABV: '6.1%',
    pintsLeft: '124'
  },
  {
    name: 'Rise Up Red',
    brand: 'Hopworks',
    price: '$6',
    ABV: '6.1%',
    pintsLeft: '124'
  },
  {
    name: 'Ripstop Rye Pils',
    brand: 'Base Camp',
    price: '$5',
    ABV: '5.7%',
    pintsLeft: '124'
  },
  {
    name: 'Free Range Red',
    brand: 'Laurelwood',
    price: '$6',
    ABV: '6.1%',
    pintsLeft: '124'
  },
  {
    name: 'Wanderlust IPA',
    brand: 'Breakside',
    price: '$7',
    ABV: '6.6%',
    pintsLeft: '124'
  },
  {
    name: 'Ginormous',
    brand: 'Gigantic',
    price: '$8',
    ABV: '8.8%',
    pintsLeft: '124'
  },
  {
    name: 'C-Note',
    brand: 'Lompoc',
    price: '$7',
    ABV: '6.9%',
    pintsLeft: '124'
  },
  {
    name: 'Helix',
    brand: 'Ecliptic',
    price: '$5',
    ABV: '5.8%',
    pintsLeft: '124'
  },
];

export default function TapList() {
  return (
    <div>
      <style jsx>{`
        // CSS Goes Here
      `}</style>
      {WalkIn.map((beer, index) =>
        <Beer name={beer.name}
          brand={beer.brand}
          price={beer.price}
          ABV={beer.ABV}
          pintsLeft={beer.pintsLeft}
          key={index} 
        />
      )}
    </div>
  )
}