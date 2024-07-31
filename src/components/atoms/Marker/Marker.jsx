import { useState, useEffect } from "react";

export default function Marker(options) {
  const [marker, setMarker] = useState();

  useEffect(() => {
    setMarker(new window.google.maps.Marker());
  }, []);

  if (marker) {
    marker.setOptions({
      position: options.position,
      title: options.title,
      map: options.map,
    });
  }

  return null;
}
