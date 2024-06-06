import axiosInstance from "../axiosInstance";

export const searchDepositsList = async (searchWord) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/deposits-products/search?searchword="+searchWord
      );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
