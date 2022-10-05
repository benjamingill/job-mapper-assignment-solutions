import React from "react";

import LOW_PRIORITY_ICON from "../img/green-marker.svg";
import MEDIUM_PRIORITY_ICON from '../img/orange-marker.svg';
import HIGH_PRIORITY_ICON from '../img/red-marker.svg';

const Marker = (props) => (
  <img src={LOW_PRIORITY_ICON} alt="marker" width={18} />
);

export default Marker;
