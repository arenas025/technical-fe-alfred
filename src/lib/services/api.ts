import axios from "axios";

const API_URL = "/api/airports";


export const fetchAirports = async (page: number) => {
  try {
    const response = await axios.get(API_URL, { params: { page } });
    return response.data;
  } catch (error) {
    console.error("Error fetching airports from API:", error);
    throw new Error("Failed to fetch airports from API");
  }
};
