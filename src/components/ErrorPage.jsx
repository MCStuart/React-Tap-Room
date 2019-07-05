/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Page404(props) {
  return (
    <div>
      <h2>The page, {props.location.pathname} does not exist</h2>
      <h4>Please <Link to='/'>click here</Link> to return to the main page</h4>
    </div>
  );
}

Page404.PropTypes = {
  
  location: PropTypes.object
};

export default Page404;