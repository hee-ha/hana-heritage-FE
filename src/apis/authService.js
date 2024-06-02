import axiosInstance from "./axiosInstance";

export const postLogin = async ({ phoneNumber, password }) => {
  try {
    const response = await axiosInstance.post("/login", {
      phoneNumber,
      password,
    });
    if (response.data.accessToken && response.data.refreshToken) {
      localStorage.setItem("jwtToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
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
