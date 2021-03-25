import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import './Attractions.scss';

function Attractions({ countryName, attractions }) {
  const code = useSelector((state) => state.code);

  const heading =
    code === 'en'
      ? 'Top-5 plases to visit'
      : code === 'ru'
      ? 'Топ-5 мест к посещению'
      : code === 'ua'
      ? 'Топ-5 місць до відвідування'
      : '';

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
    <div>
      <h3>{heading}</h3>
      <ImageGallery items={images} lazyLoad={true} />
    </div>
  );
}

export default Attractions;
