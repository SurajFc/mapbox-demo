import React from "react";
import StarterMap from "./components/Starter";
import NavigationControlMap from "./components/NavigationControlMap";
import GeoLocateMap from "./components/GeoLocateMap";
import LayerMap from "./components/LayerMap";
import MarkerMap from "./components/MarkerMap";

//MapBox Token
const MAPBOX_TOKEN = "";

const App = () => {
  return (
    <>
      {/* Map eg with Some theme */}
      <StarterMap token={MAPBOX_TOKEN} />

      {/* Map eg with Search and navigation control */}
      {/* <NavigationControlMap token={MAPBOX_TOKEN} /> */}

      {/* User Location and Fullscreen Mode */}
      {/* <GeoLocateMap token={MAPBOX_TOKEN} /> */}

      {/* Custom Layers */}
      {/* <LayerMap token={MAPBOX_TOKEN} /> */}

      {/* custom Markers */}
      {/* <MarkerMap token={MAPBOX_TOKEN} /> */}

      {/* dynamic styles */}
    </>
  );
};

export default App;
