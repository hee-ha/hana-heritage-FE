import axiosInstance from "../axiosInstance";

export const Transfer = async (requestBody) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/transfer/simple", requestBody
    );
    window.location.href = "/";
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
