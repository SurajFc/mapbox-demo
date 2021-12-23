import { useState } from "react";
import ReactMapGL, { NavigationControl, FlyToInterpolator } from "react-map-gl";
import axios from "axios";
import SearchBox from "../common/searchBox/SearchBox";

const NavigationControlMap = ({ token }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  // const [coordinates, setCoordinates] = useState([18.5204, 73.8567]);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 18.5204,
    longitude: 73.8567,
    zoom: 8,
  });

  //Position of Navigation Control
  const navControlStyle = {
    right: 10,
    top: 10,
  };

  const handleSearch = async () => {
    try {
      let res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${token}`
      );
      setResult(res.data.features);
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        transitionDuration={100}
        transitionInterpolator={new FlyToInterpolator()}
      >
        <NavigationControl
          style={navControlStyle}
          showCompass={true}
          showZoom={true}
        />
      </ReactMapGL>
      <div className="search-map ">
        <SearchBox
          value={search}
          placeholder="search"
          onChange={setSearch}
          search={handleSearch}
        />
        {result && result.length > 0 ? (
          <ul className="results">
            {result?.map((x, index) => (
              <li
                key={index}
                className="result-list"
                onClick={() => {
                  setViewport({
                    ...viewport,
                    latitude: x.center[1],
                    longitude: x.center[0],
                  });
                  setResult([]);
                }}
              >
                {x?.place_name}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavigationControlMap;
