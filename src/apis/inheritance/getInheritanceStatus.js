import axiosInstance from "../axiosInstance";

export const getInheritanceStatus = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/living-trust/my");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
