import React, { useEffect, useState } from 'react';
import './CountryMap.scss';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';

function CountryMap({ lat, lon, capital, geoCoordinates }) {
  const [polygon, setPolygon] = useState([]);

  useEffect(() => {
    if (geoCoordinates.length < 5) {
      setPolygon(
        geoCoordinates.map((row) => row.map((item) => [item[1], item[0]]))
      );
    } else {
      setPolygon(geoCoordinates.map((row) => [row[1], row[0]]));
    }
  }, []);

  return (
    <div className='countryMap' id='mapid'>
      <MapContainer
        center={[lat, lon]}
        zoom={5}
        scrollWheelZoom={false}
        className='mapContainer'
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
          }
        />
        <Polygon
          positions={polygon}
          stroke={false}
          fillColor={'lime'}
          weight={2}
          lineCap='round'
          lineJoin='round'
        />

        <Marker position={[lat, lon]}>
          <Popup>{capital}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default CountryMap;
