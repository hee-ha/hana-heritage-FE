import axiosInstance from "../axiosInstance";

export const getSavingAccountDetail = async (accountId) => {
  try {
    const response = await axiosInstance.get("/api/v1/signsaving/" + accountId);
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

export const getCheckingAccountDetail = async (accountId) => {
  try {
    const response = await axiosInstance.get("/api/v1/account/get?accountId=" + accountId);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
