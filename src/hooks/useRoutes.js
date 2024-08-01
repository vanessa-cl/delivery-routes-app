import { MapWrapperContext } from "@/context/MapWrapperContext";
import { geocodingService } from "@/services/GeocodingService";
import { branch1, branch2 } from "@/utils/branch";
import { completedRoute } from "@/utils/completedRoute";
import { directionsResults } from "@/utils/directionsResults";
import { routeBranch1, routeBranch2 } from "@/utils/routeBranches";
import { useContext, useState } from "react";

const fuelPerL = 49.1;

const start1 = branch1.place_id;
const start2 = branch2.place_id;

export default function useRoutes() {
  const { updatePolylines } = useContext(MapWrapperContext);
  const [routes, setRoutes] = useState([]);
  const [completedRoute, setCompletedRoute] = useState({});

  const formattedDirectionsResult = (directions) => {
    return directions.routes[0].legs.map((item) => {
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
  };

  const formattedDirectionsResult2 = (directions, order) => {
    const data = directions.routes[0].legs.map((item) => {
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
    return data[0];
  };

  const getRouteToBranchesPolylines = (routeBranch) => {
    const teste1 = formattedDirectionsResult(routeBranch);
    const getRouteSteps = teste1.map((item) => item.steps);
    const testeConcat = getRouteSteps[0].concat(getRouteSteps[1]);
    const newPolylines = testeConcat.flatMap((item) => {
      return [item.startLocation, item.endLocation];
    });
    updatePolylines(newPolylines);
  };

  const createRoute = (selectedOrders) => {
    console.log(selectedOrders)
    // criar rota para filial 1
    // getRouteToBranchesPolylines(routeBranch1);
    // criar rota para filial 2
    getRouteToBranchesPolylines(routeBranch2);

    // const formattedData = directionsResults.map((direction, idx) =>
    //   formattedDirectionsResult2(direction, orders[idx])
    // );
    // setRoutes([
    //   ...routes,
    //   {
    //     id: 456,
    //     statusId: 1,
    //     totalDistance: null,
    //     cost: null,
    //     fuel: null,
    //     approximateTime: null,
    //     details: [...formattedData],
    //   },
    // ]);
  };

  const getTotalDistance = () => {
    console.log(routes[0].details);
    return routes[0].details
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

  const getTotalApproximateTime = () => {
    const totalSeconds = routes[0].details
      .map((route) => route.duration.value)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

    const minutes = Math.floor(totalSeconds / 60);
    const remainedSeconds = totalSeconds % 60;
    return minutes + remainedSeconds / 60;
  };

  const setRouteData = () => {
    const distance = getTotalDistance();
    const totalFuel = getFuel(distance);
    setCompletedRoute({
      ...routes[0],
      totalDistance: distance,
      cost: getTotalCost(totalFuel).toFixed(2),
      fuel: totalFuel.toFixed(2),
      approximateTime: getTotalApproximateTime(),
    });
  };

  return {
    createRoute,
    routes,
    setRouteData,
    // completedRoute,
  };
}
