import React, { useRef, useState, useEffect } from "react";
import * as S from "./Map.styles";

export default function Map({ children, center }) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  const mapProps = {
    map,
  };

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    setMap(
      new window.google.maps.Map(ref.current, {
        center,
        zoom: 14,
      })
    );
  }, [center]);

  return (
    <S.Map ref={ref} id="map">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, mapProps);
        }
      })}
    </S.Map>
  );
}
