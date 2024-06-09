import axiosInstance from "../axiosInstance";

export const checkPassword = async (accountId, accountPassword) => {
  try {
    const response = await axiosInstance.post("/api/v1/account/validate", {
      accountId: accountId,
      accountPassword: accountPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
