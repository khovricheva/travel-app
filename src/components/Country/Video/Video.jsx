import React from 'react';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import ErrorFallback from '../../ErrorBoundary/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import translate from '../../../translate';
import './Video.scss';

function Video({ countryName, videoId }) {
  const code = useSelector((state) => state.code);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
        localStorage.clear();
      }}
    >
      <div className='video'>
        <h3 className='countryHeading videoHeading'>
          {translate.videoHeading[code]} {countryName}
        </h3>
        <div className='videoContainer'>
          <YouTube videoId={videoId} />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Video;
