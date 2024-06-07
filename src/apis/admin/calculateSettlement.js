import axiosInstance from "../axiosInstance";

export const calculateSettlement = async () => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/statistics/settlement"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
