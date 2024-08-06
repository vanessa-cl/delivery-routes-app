import { MapWrapperContext } from "@/context/MapWrapperContext";
import { branch1, branch2 } from "@/utils/branch";
import { useCallback, useContext } from "react";
import {
  standardMax,
  standardMin,
  standardWeights,
} from "@/utils/standardParams";
import { selectedOrders } from "@/utils/orders";
import { edge1, edge2, edge4, edge5 } from "@/utils/edges";
import { mockGraph } from "@/utils/createGraph";

const fuelPerL = 49.1;
const branch1Node = {
  id: branch1.id,
  place_id: branch1.place_id,
  address: branch1.formatted_address,
  location: branch1.geometry.location,
};
const branch2Node = {
  id: branch2.id,
  place_id: branch2.place_id,
  address: branch2.formatted_address,
  location: branch2.geometry.location,
};

const branchNodes = [branch1Node, branch2Node];

const normalizeParams = (value, key) => {
  return (value - standardMin[key]) / (standardMax[key] - standardMin[key]);
};

const calcEdgeWeight = (values, weights) => {
  const normalizedParams = Object.entries(values).map(([key, value]) =>
    normalizeParams(value, key)
  );
  return normalizedParams.reduce(
    (sum, value, index) => sum + value * weights[index],
    0
  );
};

const getTotalDistance = (edgesList) => {
  return edgesList
    .map((edge) => edge.distance)
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

const getTotalApproximateTime = (edgesList) => {
  const totalSeconds = edgesList
    .map((edge) => edge.duration)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  const minutes = Math.floor(totalSeconds / 60);
  const remainedSeconds = totalSeconds % 60;
  return minutes + remainedSeconds / 60;
};

const formatEdgeData = (edge, node1, node2) => {
  return edge.routes[0].legs.map((item) => {
    const distance = item.distance.value;
    const approximateTime = item.duration.value;
    const fuel = Number(getFuel(item.distance.value).toFixed(2));
    const cost = Number(getTotalCost(fuel).toFixed(2));
    return {
      id: `${node1.id} até ${node2.id}`,
      startNode: node1.id,
      endNode: node2.id,
      distance,
      duration: approximateTime,
      fuel,
      cost,
      startAddress: item.start_address,
      startLocation: item.start_location,
      endAddress: item.end_address,
      endLocation: item.end_location,
      weight: calcEdgeWeight(
        { cost, fuel, distance, approximateTime },
        standardWeights
      ),
      steps: item.steps.map((step) => {
        return {
          startLocation: step.start_location,
          endLocation: step.end_location,
        };
      }),
    };
  });
};

const dijkstra = (graph, start) => {
  const newGraph = { ...graph };
  const anotherBranch = Object.keys(newGraph).filter(
    (item) => item.includes("Filial") && item !== start
  );

  if (anotherBranch.length > 0) {
    delete newGraph[anotherBranch];
  }
  const distances = {};
  const visited = new Set();
  const notVisited = new Set(Object.keys(newGraph));

  for (const vertice in newGraph) {
    distances[vertice] = Infinity;
  }
  distances[start] = 0;

  let currentNode = start;

  while (notVisited.size > 0) {
    visited.add(currentNode);
    notVisited.delete(currentNode);

    for (const neighbor of newGraph[currentNode]) {
      const totalDistance = distances[currentNode] + neighbor.weight;

      if (totalDistance < distances[neighbor.node]) {
        distances[neighbor.node] = totalDistance;
      }
    }

    let shortestDistance = Infinity;
    let nextNode = null;

    for (const node of notVisited) {
      if (distances[node] < shortestDistance) {
        shortestDistance = distances[node];
        nextNode = node;
      }
    }

    if (nextNode === null) break;
    currentNode = nextNode;
  }

  return distances;
};

export default function useDijkstraAlgorithm() {
  const {
    updateMarkers,
    updatePolylines,
    ordersNodes,
    updateOrdersNodes,
    routes,
    updateRoutes,
  } = useContext(MapWrapperContext);

  const getRouteComposition = useCallback((branch, edgesList) => {
    const distance = getTotalDistance(edgesList);
    const approximateTime = getTotalApproximateTime(edgesList);
    const fuel = Number(getFuel(distance).toFixed(2));
    const cost = Number(getTotalCost(fuel).toFixed(2));

    return {
      id: `Rota partindo da ${branch.id}`,
      distance,
      approximateTime,
      fuel,
      cost,
      edges: edgesList,
    };
  }, []);

  const placeRoutePolylinesOnMap = useCallback(
    (route) => {
      const getRouteSteps = route?.edges.map((edge) => edge.steps);
      
      const joinAllSteps = getRouteSteps[0]
        .concat(getRouteSteps[1])
        .concat(getRouteSteps[2]);
      const filteredSteps = joinAllSteps.filter((item) => item !== undefined);
      const newPolylines = filteredSteps.flatMap((item) => {
        return [item.startLocation, item.endLocation];
      });
      console.log(newPolylines);
      updatePolylines(newPolylines);
    },
    [updatePolylines]
  );

  const getEdges = useCallback(
    (nodes) => {
      const edge1Data = formatEdgeData(edge1, branchNodes[0], nodes[0]);
      const edge2Data = formatEdgeData(edge2, nodes[0], nodes[1]);

      const edgesForBranch1 = [...edge1Data, ...edge2Data];

      const edge4Data = formatEdgeData(edge4, branchNodes[1], nodes[0]);
      const edge5Data = formatEdgeData(edge5, nodes[0], nodes[1]);

      const edgesForBranch2 = [...edge4Data, ...edge5Data];

      updateRoutes([
        getRouteComposition(branch1, edgesForBranch1),
        getRouteComposition(branch2, edgesForBranch2),
      ]);
    },
    [getRouteComposition, updateRoutes]
  );

  const placeNodeMarkersOnMap = useCallback(
    (nodes) => {
      const formattedMarkersLocations = nodes.map((node) => {
        return { id: node.id, location: node.location };
      });
      const allNodes = formattedMarkersLocations.concat(branchNodes);
      updateMarkers(allNodes);
    },
    [updateMarkers]
  );

  const getNodes = useCallback(() => {
    const formatOrdersNodes = selectedOrders.map((order) => {
      return {
        id: `Pedido N°${order.id}`,
        place_id: order.placeId,
        address: order.address,
        location: order.location,
      };
    });
    placeNodeMarkersOnMap(formatOrdersNodes);
    updateOrdersNodes(formatOrdersNodes);
  }, [placeNodeMarkersOnMap, updateOrdersNodes]);

  const findBestRoute = useCallback(() => {
    const distancesBranch1 = dijkstra(mockGraph, "Filial Olívia");
    const distancesBranch2 = dijkstra(mockGraph, "Filial Candeias");
    console.log(distancesBranch1);
    console.log(distancesBranch2);
  }, []);

  return { getNodes, getEdges, placeRoutePolylinesOnMap, findBestRoute };
}
