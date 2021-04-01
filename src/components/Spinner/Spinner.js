import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='wrapper'>
      <div class='loadingio-spinner-ripple'>
        <div class='ldio'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
