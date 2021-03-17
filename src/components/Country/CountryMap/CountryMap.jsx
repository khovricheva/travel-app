import React, { useEffect, useState } from 'react';
import './CountryMap.scss';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
// import poly from './polygon.js'

function CountryMap({ lat, lon, capital }) {
  const [baseMap, setBaseMap] = useState('hot');

  //add selector
  const basemapsDict = {
    jhl:
      'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}',
    hfdh:
      'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
    ksdhfj:
      'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',
    osm: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    hot: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
    cycle: 'https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
  };

  const poly = [
    [3.314971, 51.345781],
    [4.047071, 51.267259],
    [4.973991, 51.475024],
    [5.606976, 51.037298],
    [6.156658, 50.803721],
    [6.043073, 50.128052],
    [5.782417, 50.090328],
    [5.674052, 49.529484],
    [4.799222, 49.985373],
    [4.286023, 49.907497],
    [3.588184, 50.378992],
    [3.123252, 50.780363],
    [2.658422, 50.796848],
    [2.513573, 51.148506],
    [3.314971, 51.345781],
  ];
  let coordinates = poly.map((row) => [row[1], row[0]]);
  return (
    <div className='countryMap' id='mapid'>
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        scrollWheelZoom={false}
        className='mapContainer'
        bounds={coordinates}
        boundsOptions={{ padding: [1, 1] }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          url={basemapsDict[baseMap]}
        />
        <Polygon positions={coordinates} />
        <Marker position={[lat, lon]}>
          <Popup>{capital}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default CountryMap;
