import axiosInstance from "../axiosInstance";

export const createAccount = async (accountInfo) => {
  try {
    const response = await axiosInstance.post("/api/v1/account/create", {
      accountName: accountInfo.accountName,
      accountPassword: accountInfo.accountPassword,
      balance: 0,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
