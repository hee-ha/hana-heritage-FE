import axiosInstance from "./axiosInstance";

export const postLogin = async ({ phoneNumber, password }) => {
  try {
    const response = await axiosInstance.post("/login", {
      phoneNumber,
      password,
    });
    if (response.data.result.accessToken && response.data.result.refreshToken) {
      localStorage.setItem("jwtToken", response.data.result.accessToken);
      localStorage.setItem("refreshToken", response.data.result.refreshToken);
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const logout = async () => {
  await axiosInstance.post("/logout");
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("refreshToken");
};
