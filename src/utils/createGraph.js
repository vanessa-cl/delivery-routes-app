export const createGraph = (routes) => {
  const newRoutes = routes.map((route) => {
    return route.edges.map((edge) => ({
      id: edge.id,
      startNode: edge.startNode,
      endNode: edge.endNode,
      weight: edge.weight,
    }));
  });

  const graph = {};

  newRoutes.forEach((route) => {
    route.forEach((edge) => {
      const { startNode, endNode, weight } = edge;

      if (!graph[startNode]) {
        graph[startNode] = [];
      }
      if (!graph[endNode]) {
        graph[endNode] = [];
      }

      graph[startNode].push({ node: endNode, weight });
      graph[endNode].push({ node: startNode, weight });
    });
  });

  return graph;
};

export const mockGraph = {
  "Filial Olívia": [
    { node: "Pedido N°1", weight: 132.07866666666666 },
    { node: "Pedido N°2", weight: 280.896 },
  ],
  "Pedido N°1": [
    { node: "Filial Olívia", weight: 132.07866666666666 },
    { node: "Pedido N°2", weight: 94.75566666666667 },
    { node: "Filial Candeias", weight: 86.198 },
  ],
  "Pedido N°2": [
    { node: "Pedido N°1", weight: 94.75566666666667 },
    { node: "Filial Olívia", weight: 280.896 },
    { node: "Filial Candeias", weight: 198.41466666666665 },
  ],
  "Filial Candeias": [
    { node: "Pedido N°1", weight: 86.198 },
    { node: "Pedido N°2", weight: 198.41466666666665 },
  ],
};
