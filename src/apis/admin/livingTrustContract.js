import axiosInstance from "../axiosInstance";

export const livingTrustContract = async () => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/living-trust/contract/list"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
