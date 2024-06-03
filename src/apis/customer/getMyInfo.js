import axiosInstance from "../axiosInstance";

export const getMyInfo = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/customer/me");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
