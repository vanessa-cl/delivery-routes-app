import { createContext, useCallback, useState } from "react";

export const MapWrapperContext = createContext(null);

function MapWrapperProvider({ children }) {
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);

  const updateCenter = useCallback((props) => {
    setCenter(props);
  }, []);

  const updateMarkers = useCallback((props) => {
    setMarkers(props);
  }, []);

  return (
    <MapWrapperContext.Provider
      value={{ center, markers, updateCenter, updateMarkers }}
    >
      {console.log(center)}
      {children}
    </MapWrapperContext.Provider>
  );
}

export default MapWrapperProvider;
