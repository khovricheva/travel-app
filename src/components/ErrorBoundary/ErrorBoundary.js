import React from 'react';
const ErrorBoundary = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className='error'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>On home page</button>
    </div>
  );
};

export default ErrorBoundary;
