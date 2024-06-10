import axiosInstance from "../axiosInstance";

export const approveLivingTrustContract = async (id) => {
  try {
    const response = await axiosInstance.put(
      "/api/v1/living-trust/contract/complete?id="+id
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
