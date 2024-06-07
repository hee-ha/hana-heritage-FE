import axiosInstance from "../axiosInstance";

export const getChartData = async (livingtrustId) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/livingtrust/property/chartData",
      {
        params: { livingtrustId },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
