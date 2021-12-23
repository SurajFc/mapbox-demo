import React, { useState } from "react";
import ReactMapGL, {
  FullscreenControl,
  GeolocateControl,
  FlyToInterpolator,
} from "react-map-gl";

//button position for going to user current location
const geolocateControlStyle = {
  left: 10,
  top: 10,
};

//btn Posiiton of full screen toggle
const fullscreenControlStyle = {
  right: 10,
  top: 10,
};

const GeoLocateMap = ({ token }) => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 18.5204,
    longitude: 73.8567,
    zoom: 8,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        transitionDuration={2000}
        transitionInterpolator={new FlyToInterpolator()}
      >
        <FullscreenControl style={fullscreenControlStyle} />
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto={false}
        />
      </ReactMapGL>
    </div>
  );
};

export default GeoLocateMap;
