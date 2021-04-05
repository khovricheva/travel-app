import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="wrapper" data-testid="spinner">
      <div className="loadingio-spinner-ripple">
        <div className="ldio">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
