import React, { useEffect, useState } from 'react';
import './CountryMap.scss';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Button from '@material-ui/core/Button';
import translate from '../../../translate';
import { useSelector } from 'react-redux';

function CountryMap({ lat, lon, countryName, capital, geoCoordinates }) {
  const code = useSelector((state) => state.code);
  const [polygon, setPolygon] = useState([]);
  const handle = useFullScreenHandle();

  useEffect(() => {
    if (geoCoordinates.length < 5) {
      setPolygon(
        geoCoordinates.map((row) => row.map((item) => [item[1], item[0]]))
      );
    } else {
      setPolygon(geoCoordinates.map((row) => [row[1], row[0]]));
    }
  }, [geoCoordinates]);

  return (
    <div className='countryMap' id='mapid'>
      <div className='heading'>
        <h3 className='mapHeading'>
          {countryName} {translate.mapHeading[code]}
        </h3>
        <Button
          className='fullScreenBtn'
          variant='contained'
          color='primary'
          onClick={handle.enter}
        >
          {translate.mapBtn[code]}
        </Button>
      </div>

      <FullScreen handle={handle}>
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
      </FullScreen>
    </div>
  );
}
export default CountryMap;
