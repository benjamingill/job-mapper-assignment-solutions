import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = () => (
  <GoogleMapReact
    style={{ height: "100vh", flex: 1 }}
    bootstrapURLKeys={{ key: "AIzaSyCJli8pDDnA-mHXXf_0iyH9rb90LDyrNmM" }}
    defaultCenter={{
      lat: 42.396308,
      lng: -71.272355
    }}
    defaultZoom={11}
    options={{ disableDoubleClickZoom: true, fullscreenControl: false }}
    resetBoundsOnResize={true}
  >
    {/* render collection of markers */}
    <Marker lat={42.396308} lng={-71.272355} />
  </GoogleMapReact>
);

export default Map;
