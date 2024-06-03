import axiosInstance from "../axiosInstance";

export const getSavingAccountDetail = async (accountId) => {
  try {
    const response = await axiosInstance.get("/api/v1/signSaving/" + accountId);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};

export const getDepositAccountDetail = async (accountId) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/signdeposit/" + accountId,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
