import axiosInstance from "../axiosInstance";

export const getCustomerContact = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/customer/contact");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
