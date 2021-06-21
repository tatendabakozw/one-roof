import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

interface Props{
    ht?:number,
    wt?: number
}

function Map(props: Props) {
  const [viewport, setViewport] = useState({
    width: 900,
    height: 1000,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/tatendazw/ck7uze5kw03vh1isac80epmam'
      mapboxApiAccessToken='pk.eyJ1IjoidGF0ZW5kYXp3IiwiYSI6ImNrcTc2b3l4aTAzOHkydW93dTVkMTg1bTMifQ.lidh6UhOY7K4AkTSxfG4uA'
      onViewportChange={(nextViewport: React.SetStateAction<{ width: number; height: number; latitude: number; longitude: number; zoom: number; }>) => setViewport(nextViewport)}
    />
  );
}

export default Map