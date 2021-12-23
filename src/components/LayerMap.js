import React from "react";
import ReactMapGL, { Layer } from "react-map-gl";

//water Layer
const waterLayer = {
  id: "water",
  source: "mapbox-streets",
  "source-layer": "water",
  type: "fill",
  paint: {
    "fill-color": "yellow",
  },
};

//Park Layer
const parkLayer = {
  id: "landuse_park",
  type: "fill",
  source: "mapbox",
  "source-layer": "landuse",
  filter: ["==", "class", "park"],
};

const LayerMap = ({ token }) => {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",
    latitude: 18.5204,
    longitude: 73.8567,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={token}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
    >
      <Layer {...waterLayer} paint={{ "fill-color": "#77a" }} />
      <Layer {...parkLayer} paint={{ "fill-color": "#8fb" }} />
    </ReactMapGL>
  );
};

export default LayerMap;
