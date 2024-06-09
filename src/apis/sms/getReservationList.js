import axiosInstance from "../axiosInstance";

export const getReservationList = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/sms/reservation/list");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
