import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Location from "../location.png";

const MarkerMap = ({ token }) => {
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
      >
        <Marker
          latitude={18.5081359}
          longitude={73.79993}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img src={Location} alt="pin" height="40px" width="30px" />
          <p>MindBowser</p>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default MarkerMap;
