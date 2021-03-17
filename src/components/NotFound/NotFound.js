import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Nothing here, sorry</h1>
      <Link to="/">
        <input type="submit" value="go home" />
      </Link>
    </div>
  );
};

export default NotFound;
