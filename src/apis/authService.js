import axiosInstance from "./axiosInstance";

export const postLogin = async ({ phoneNumber, password }) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/login", {
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

export const sendSms = async (phoneNumber) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/sms/send?phoneNumber=" + phoneNumber,
    );
    return response.data;
  } catch (error) {
    console.error("SMS 전송 실패 : ", error);
    throw error;
  }
};

export const certificate = async (certInfo) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/certification", {
      phoneNumber: certInfo.phoneNumber,
      certificationCode: certInfo.certCode,
    });
    return response.data;
  } catch (error) {
    console.error("인증 전송 실패 ", error);
    throw error;
  }
};

export const logout = async () => {
  await axiosInstance.post("/logout");
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("refreshToken");
};
