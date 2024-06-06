// utils.js
import dayjs from "dayjs";

export const formatDate = (date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

// 전화번호 포맷터: 01057783842 -> 010-5778-3842
export const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 11) {
    throw new Error("Invalid phone number length");
  }
  return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};

// 전화번호 포맷터: 010-5778-3842 -> 01057783842
export const unformatPhoneNumber = (formattedPhoneNumber) => {
  return formattedPhoneNumber.replace(/-/g, "");
};

// 세 자리마다 ,을 찍어주는 포매터
export const formatNumberWithCommas = (number) => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};
