import { geocodingService } from "@/services/GeocodingService";
import { selectedOrders } from "@/utils/orders";
import { useState } from "react";

export default function useOrders() {
  const [allLocations, setAllLocations] = useState(selectedOrders);

  const getOrderLocation = async (address) => {
    return await geocodingService
      .convertAddressToCoordinates(address)
      .then((res) => res[0]?.geometry?.location);
  };

  return { allLocations, getOrderLocation, setAllLocations };
}
