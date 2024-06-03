import axiosInstance from "../axiosInstance";

export const Transfer = async (requestBody) => {
  try {
    await axiosInstance.post("/api/v1/account/simple", requestBody);
    window.location.href = "/";
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
