import { geocodingService } from "@/services/GeocodingService";
import { locations } from "@/utils/locations";
import { useCallback, useState } from "react";

export default function useOrders() {
  const [allLocations, setAllLocations] = useState([]);

  const getOrderLocation = async (address) => {
    return await geocodingService
      .convertAddressToCoordinates(address)
      .then((res) => res[0]?.geometry?.location);
  };

  const setAllOrdersLocations = useCallback(async (orders) => {
    // const results = orders.map((order) => {
    //   return getOrderLocation(order.address);
    // });
    // Promise.all(results).then((res) => {
    //   const formattedValues = orders.map((order, idx) => {
    //     return {
    //       ...order,
    //       location: { lat: Number(res[idx].lat), lng: Number(res[idx].lng) },
    //     };
    //   });
    //   setAllLocations(formattedValues);
    // });

    setAllLocations(locations);
  }, []);

  return { allLocations, getOrderLocation, setAllOrdersLocations };
}
