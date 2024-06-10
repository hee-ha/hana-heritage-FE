import axiosInstance from "../axiosInstance";

export const getContractDetail = async (id) => {
  try {
    const response = await axiosInstance.get(
      "api/v1/living-trust/my?customerId=" + id,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
