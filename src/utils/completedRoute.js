import { directionsResults } from "./directionsResults"
import { order } from "./order"

export const completedRoute = [
  {
    id: 456,
    statusId: 1,
    orders: order,
    totalDistance: 35,
    cost: 25.0,
    fuel: 1.5,
    approximateTime: 40,
    routes: directionsResults
  },
]