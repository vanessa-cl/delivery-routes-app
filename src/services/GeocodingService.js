import { ApiService } from "./ApiService";

class GeocodingService {
  apiService = new ApiService(process.env.NEXT_PUBLIC_MAPS_API_URL);
  apiKey = process.env.NEXT_PUBLIC_API_KEY;

  async convertAddressToCoordinates(address) {
    return this.apiService
      .get(`/geocode/json?address=${address},&key=${this.apiKey}`)
      .then((res) => res.results);
  }
}

export const geocodingService = new GeocodingService();
