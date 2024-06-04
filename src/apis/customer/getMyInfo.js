import axiosInstance from "../axiosInstance";

export const getMyInfo = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/customer/me");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/customer/signup", {
      name: data.name,
      password: data.password,
      phoneNumber: data.phoneNumber,
      identificationNumber: data.identificationNumber,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
