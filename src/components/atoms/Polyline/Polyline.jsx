import { useState, useEffect } from "react";

export default function Polyline(options) {
  const [polyline, setPolyline] = useState();

  useEffect(() => {
    setPolyline(new window.google.maps.Polyline());
  }, []);

  if (polyline) {
    polyline.setOptions({
      path: options.path,
      strokeColor: options.strokeColor,
      strokeOpacity: 1,
      strokeWeight: 2,
      map: options.map,
      geodesic: true,
    });
  }

  return null;
}
