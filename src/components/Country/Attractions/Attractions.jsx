import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ErrorFallback from '../../ErrorBoundary/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import ImageGallery from 'react-image-gallery';
import translate from '../../../translate';
import './Attractions.scss';

function Attractions({ attractions }) {
  const code = useSelector((state) => state.code);
  const [images, setImages] = useState([]);

  useEffect(() => {
    let images = [];
    attractions.map((item) => {
      let desc = `${item.name[code]}. ${item.info[code]}`;
      return images.push({
        original: item.photo,
        thumbnail: item.photo,
        originalTitle: item.name[code],
        originalAlt: item.name[code],
        description: desc,
      });
    });
    setImages(images);
  }, [attractions, code]);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
        localStorage.clear();
      }}
    >
      <div className='attractions'>
        <h3 className='countryHeading attractionsHeading'>
          {translate.headingAttractions[code]}
        </h3>
        <ImageGallery items={images} lazyLoad={true} />
      </div>
    </ErrorBoundary>
  );
}

export default Attractions;
