import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <style jsx>{`
        .navbar {
          margin: 0;
          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-wrap: nowrap;
          font-size: 1 rem;
          justify-content: space-between;
          line-height: 1.5 rem;
          white-space: nowrap;
          overflow: hidden;
          background-color: #11172b;
        }

        .navbar-text {
          margin-left: 1rem;  
          color: #ffffff;
          text-decoration: none;
          display: flex;
          flex-wrap: nowrap;
        }

        .title {
          line-height: .5rem;
          text-align: left;
        }

        .links {
          line-height: rem;
          float: right;
          text-align: center;
          padding:
          font-size: 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

        }

      `}</style>
      <div className='navbar'>
        <div className='navbar-text'> 
          <div className='title'>
            <h1>Tap Reactor</h1>
            <h3>Let beer desorb</h3>
          </div>
          <div className='links'>
            <Link to='/'><a className='navbar-text'>Taplist Home</a></Link>
            <Link to='/beer'><a className='navbar-text'>All Beers</a></Link>
            <Link to='/admin'><a className='navbar-text'>Admin</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;