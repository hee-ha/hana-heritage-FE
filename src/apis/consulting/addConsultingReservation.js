import axiosInstance from "../axiosInstance";

export const addConsultingReservation = async (requestBody) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/consulting/reservation", requestBody
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
