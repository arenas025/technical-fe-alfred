import axios from "axios";

const API_URL = "/api/airports";

interface fetchAirportsParams {
  offset: number;
}

export const fetchAirports = async (params: fetchAirportsParams) => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching airports from API:", error);
    throw new Error("Failed to fetch airports from API");
  }
};
