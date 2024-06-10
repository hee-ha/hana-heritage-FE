import axiosInstance from "../axiosInstance";

export const getPreference = async () => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/deposits-products/preference",
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};

export const getPerDay = async (name) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/deposits-products/preference/perday?productName=" + name,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
