import axiosInstance from "../axiosInstance";

export const getAccountDetail = async (accountId) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/accountinfo/" + accountId
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
