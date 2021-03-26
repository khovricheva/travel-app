import React from 'react';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import translate from '../../../translate';
import './Video.scss';

function Video({ countryName, videoId }) {
  const code = useSelector((state) => state.code);

  return (
    <div className='video'>
      <h3 className='videoHeading'>
        {translate.videoHeading[code]} {countryName}
      </h3>
      <div className='videoContainer'>
        <YouTube videoId={videoId} />
      </div>
    </div>
  );
}

export default Video;
