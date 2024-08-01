import { ApiService } from "./ApiService";

class DirectionsService {
  apiService = new ApiService(process.env.NEXT_PUBLIC_MAPS_API_URL);
  apiKey = process.env.NEXT_PUBLIC_API_KEY;

  async getRoute(origin, destination) {
    return this.apiService
      .get(`/directions/json?origin=${origin},&destination=${destination}&key=${this.apiKey}`)
      .then((res) => res.results);
  }
}

export const directionsService = new DirectionsService();
