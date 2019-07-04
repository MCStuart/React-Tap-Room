import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Page404(props) {
  return (
    <div>
      <h1>The page, {props.location.pathname} does not exist</h1>
      <h3>Please <Link to='/'>click here</Link> to return to the main page</h3>
    </div>
  );
}

Page404.PropTypes = {
  location: PropTypes.object
};

export default Page404;