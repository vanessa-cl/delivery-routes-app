import { useState, useEffect } from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function BranchMarker(options) {
  const [marker, setMarker] = useState();

  useEffect(() => {
    setMarker(new window.google.maps.Marker());
  }, []);

  if (marker) {
    marker.setOptions({
      position: options.position,
      title: options.title,
      map: options.map,
      icon: {
        path: faMapMarkerAlt.icon[4],
        fillColor: "#FFD700",
        fillOpacity: 1,
        anchor: new google.maps.Point(
          faMapMarkerAlt.icon[0] / 2, 
          faMapMarkerAlt.icon[1] 
        ),
        strokeWeight: 1,
        strokeColor: "#333333",
        scale: 0.075,
      },
    });
  }

  return null;
}
