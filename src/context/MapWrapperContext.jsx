import { createContext, useCallback, useEffect, useState } from "react";
import { branch1, branch2 } from "@/utils/branch";

export const MapWrapperContext = createContext(null);

function MapWrapperProvider({ children }) {
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [polylines, setPolylines] = useState([]);

  const updateCenter = useCallback((props) => {
    setCenter(props);
  }, []);

  const updateMarkers = useCallback((props) => {
    setMarkers(props);
  }, []);

  const updatePolylines = useCallback((props) => {
    setPolylines(props);
  }, []);

  useEffect(() => {
    if (!center) {
      setCenter(branch1.geometry.location);
    }
  }, [center]);

  useEffect(() => {
    if (markers.length < 1) {
      setMarkers([
        { id: "Filial Olívia", location: branch1.geometry.location },
        { id: "Filial Candeias", location: branch2.geometry.location },
      ]);
    }
  }, [markers]);

  return (
    <MapWrapperContext.Provider
      value={{
        center,
        markers,
        polylines,
        updateCenter,
        updateMarkers,
        updatePolylines,
      }}
    >
      {/* {console.log(center)}
      {console.log(markers)} */}
      {children}
    </MapWrapperContext.Provider>
  );
}

export default MapWrapperProvider;
