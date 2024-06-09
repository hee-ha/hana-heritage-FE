import axiosInstance from "../axiosInstance";

export const calculateConsulting = async () => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/consulting/reservation"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
