import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import './Attractions.scss';

function Attractions({ city, lat, lon }) {
  const [attractions, setAttractions] = useState([]);
  const images = [];

  useEffect(() => {
    (async () => setAttractions(await bestPlaces()))();
  }, []);

  const bestPlaces = async () => {
    const getLocation = async () => {
      const result = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/geoname?apikey=5ae2e3f221c38a28845f05b62b5f1250a0843013e8f40d078305149c&name=${city}`
      );
      console.log('getLocation', result.data);

      return result.data;
    };

    const getArray = async () => {
      const data = await getLocation();
      const result = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/radius?apikey=5ae2e3f221c38a28845f05b62b5f1250a0843013e8f40d078305149c&radius=100000&limit=8&offset=0&lon=${lon}&lat=${lat}&rate=3h&kinds=architecture&format=json`
      );
      console.log('getArray', result.data);
      return result.data;
    };

    const getId = async () => {
      const array = [];

      const data = await getArray();
      for (let i = 0; i < data.length; i++) {
        const result = await axios.get(
          `https://api.opentripmap.com/0.1/en/places/xid/${data[i].xid}?apikey=5ae2e3f221c38a28845f05b62b5f1250a0843013e8f40d078305149c`
        );
        array.push(result.data);
      }

      console.log('getId', array);
      array.map((item) => {
        images.push({
          original: item.preview.source,
          thumbnail: item.preview.source,
          description: item.name,
        });
      });
      console.log(images);
      return images;
    };
    return await getId();
  };

  //1-я передать в ссылку столицу
  //2-я по широте и долготе даёт список достоприм.

  //и айди, 3 ф-ю выпилитьь и сделать по другому
  // сделать просмотр по одной достопримечательности при клике

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}

export default Attractions;
