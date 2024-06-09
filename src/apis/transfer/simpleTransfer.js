import axiosInstance from "../axiosInstance";

export const Transfer = async (requestBody) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/account/simple",
      requestBody,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
