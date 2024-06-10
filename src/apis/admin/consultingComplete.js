import axiosInstance from "../axiosInstance";

export const consultingComplete = async (id) => {
  try {
    const response = await axiosInstance.put(
      "/api/v1/consulting/reservation/complete?id="+id
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
