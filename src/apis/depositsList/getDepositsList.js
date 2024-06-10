import axiosInstance from "../axiosInstance";

export const getDepositsList = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/deposits-products/list");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
