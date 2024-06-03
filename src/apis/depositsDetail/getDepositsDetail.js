import axiosInstance from "../axiosInstance";

export const getDepositsDetail = async (id) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/deposits-products/detail?id="+id
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
