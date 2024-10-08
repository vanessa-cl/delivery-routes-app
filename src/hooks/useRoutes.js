import { MapWrapperContext } from "@/context/MapWrapperContext";
import { geocodingService } from "@/services/GeocodingService";
import { branch1, branch2 } from "@/utils/branch";
import { routeBranch1, routeBranch2 } from "@/utils/routeBranches";
import { useCallback, useContext } from "react";
import {
  standardMax,
  standardMin,
  standardWeights,
} from "@/utils/standardParams";

const fuelPerL = 49.1;

const start1 = branch1.place_id;
const start2 = branch2.place_id;

export default function useRoutes() {
  const { updatePolylines, updateRoutes, routes } =
    useContext(MapWrapperContext);

  const formattedRouteData = (route, orders) => {
    const format = route.routes[0].legs.map((item) => {
      return {
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
    const distance = getTotalDistance(format);
    const fuel = Number(getFuel(distance).toFixed(2));
    const cost = Number(getTotalCost(fuel).toFixed(2));
    const approximateTime = getTotalApproximateTime(format);

    const formattedData = {
      id: route.id,
      distance,
      cost,
      fuel,
      approximateTime,
      details: format,
      orders,
      weight: calcRouteWeight(
        { cost, fuel, distance, approximateTime },
        standardWeights
      ),
    };

    updateRoutes((routes) => [...routes, formattedData]);
  };

  const createRoute = (selectedOrders) => {
    formattedRouteData(routeBranch1, selectedOrders);
    formattedRouteData(routeBranch2, selectedOrders);
  };

  const getRoutePolylines = useCallback(
    (route) => {
      const getRouteSteps = route?.details?.map((item) => item.steps);
      const testeConcat = getRouteSteps[0].concat(getRouteSteps[1]);
      const newPolylines = testeConcat.flatMap((item) => {
        return [item.startLocation, item.endLocation];
      });
      updatePolylines(newPolylines);
    },
    [updatePolylines]
  );

  const normalizeParams = (value, key) => {
    return (value - standardMin[key]) / (standardMax[key] - standardMin[key]);
  };

  const getTotalDistance = (route) => {
    return route
      .map((details) => details.distance.value)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
  };

  const getFuel = (distance) => {
    return distance / 1000 / fuelPerL;
  };

  const getTotalCost = (fuel) => {
    const gasValuePerL = 5.3;
    return fuel * gasValuePerL;
  };

  const getTotalApproximateTime = (route) => {
    const totalSeconds = route
      .map((route) => route.duration.value)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

    const minutes = Math.floor(totalSeconds / 60);
    const remainedSeconds = totalSeconds % 60;
    return minutes + remainedSeconds / 60;
  };

  const getBestRoute = useCallback(() => {
    return routes.sort((a, b) => a.weight - b.weight);
  }, [routes]);

  const calcRouteWeight = (values, weights) => {
    const normalizedParams = Object.entries(values).map(([key, value]) =>
      normalizeParams(value, key)
    );
    return normalizedParams.reduce(
      (sum, value, index) => sum + value * weights[index],
      0
    );
  };

  return {
    createRoute,
    routes,
    getRoutePolylines,
    calcRouteWeight,
    getBestRoute,
  };
}
