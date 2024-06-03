import axiosInstance from "../axiosInstance";

export const autoTransfer = async (requestBody) => {
  try {
    await axiosInstance.post("/api/v1/autoTransfer/register", requestBody);
    window.location.href = "/";
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
