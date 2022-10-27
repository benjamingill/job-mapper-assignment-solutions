import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = ({ jobs = [] }) => (
  <GoogleMapReact
    style={{ height: "100vh", flex: 1 }}
    bootstrapURLKeys={{ key: "AIzaSyCJli8pDDnA-mHXXf_0iyH9rb90LDyrNmM" }}
    defaultCenter={{
      lat: 42.396308,
      lng: -71.272355,
    }}
    defaultZoom={11}
    options={{ disableDoubleClickZoom: true, fullscreenControl: false }}
    resetBoundsOnResize={true}
  >
    {jobs.map((j) => (
      <Marker key={j.id} lat={j.lat} lng={j.long} job={j} />
    ))}
  </GoogleMapReact>
);

export default Map;
