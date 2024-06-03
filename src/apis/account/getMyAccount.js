import axiosInstance from "../axiosInstance";

export const getMyAccount = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/account/my");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
