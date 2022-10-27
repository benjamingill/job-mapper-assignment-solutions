import React from "react";

import LOW_PRIORITY_ICON from "../img/green-marker.svg";
import MEDIUM_PRIORITY_ICON from "../img/orange-marker.svg";
import HIGH_PRIORITY_ICON from "../img/red-marker.svg";

const Marker = ({ job, lat, lng }) => {
  switch (job.priority) {
    case "high":
      return <img src={HIGH_PRIORITY_ICON} alt="marker" width={18} />;
    case "medium":
      return <img src={MEDIUM_PRIORITY_ICON} alt="marker" width={18} />;
    case "low":
      return <img src={LOW_PRIORITY_ICON} alt="marker" width={18} />;
  }
};

export default Marker;
