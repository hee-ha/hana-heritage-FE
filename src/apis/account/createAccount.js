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

export const createSaving = async (savingInfo) => {
  try {
    const response = await axiosInstance.post("/api/v1/signsaving/create", {
      savingProductId: savingInfo.productId,
      withdrawAccountId: savingInfo.withdrawAccount,
      depositAmount: savingInfo.depositAmount,
      accountPassword: savingInfo.accountPassword,
      contractYears: savingInfo.contractYears,
      interestRate: 0,
      snsNotice: savingInfo.snsNotice,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};

export const createDeposit = async (depositInfo) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/signdeposit/create",
      depositInfo,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch history:", error);
    throw error;
  }
};
