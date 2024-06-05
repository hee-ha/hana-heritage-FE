import axiosInstance from "../axiosInstance";

export const getHistoryByAccountId = async (accountId) => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/history/account/${accountId}`,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};

export const getMyAccount = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/account/my`);
    // console.log(response.data);
    return response;
  } catch (error) {
    console.error("Failed to fetch get my account:", error);
    throw error;
  }
};
