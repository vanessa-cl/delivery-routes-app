import { MapWrapperContext } from "@/context/MapWrapperContext";
import { geocodingService } from "@/services/GeocodingService";
import { directionsResults } from "@/utils/directionsResults";
import { useContext } from "react";

export default function useRoutes() {
  const { updatePolylines } = useContext(MapWrapperContext);

  const formattedDirectionsResult = (directions, order) => {

    const getDirections = directions.filter((item) => item.id === order.id);
    // console.log(getDirections)
    return getDirections[0].routes[0].legs.map((item) => {
      return {
        orderId: order.id,
        distance: item.distance,
        duration: item.duration,
        startLocation: item.start_location,
        endLocation: item.end_location,
        steps: item.steps.map((step) => {
          return {
            startLocation: step.start_location,
            endLocation: step.end_location,
          };
        }),
      };
    });
  };

  // const getRouteDirections = (order) => {
  //   return formattedDirectionsResult(directionsResults, order);
  // };

  const setRoutePolylines = (order) => {
    const route = formattedDirectionsResult(directionsResults, order);
    const newPolylines = route[0].steps.flatMap((item) => {
      return [item.startLocation, item.endLocation];
    });
    updatePolylines(newPolylines);
  };

  return {
    setRoutePolylines,
  };
}
