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
          justify-content: space-between;
        }

        .navbar-text div {
           justify-content: space-between; 
        }

        .title {
          font-size: 3 rem;
          line-height: 40 % ;
          letter-spacing: 0.060 rem;
          font-weight: 400;
          font-style: normal;
        }

        h1 {
          margin-top: 1rem;
          margin-bottom: 0;
        }

        h3 {
          margin-top: 0;
          text-align: center;
        }

        .links {
          float: right;
          text-align: center;
          font-size: 2rem;
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