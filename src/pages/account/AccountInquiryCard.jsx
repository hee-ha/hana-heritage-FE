import React from "react";
import { useNavigate } from "react-router-dom";

const formatCurrency = (number) => {
  // 입력값을 문자열로 변환
  let str = number.toString();

  // 정규식을 사용하여 콤마를 추가
  let formatted = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formatted;
};

function AccountInquiryCard({ account }) {
  const navigate = useNavigate();

  const accountNumberFormatter = (accountNumber) => {
    let number = accountNumber.toString();

    // 첫 번째 그룹: 첫 3자리
    let part1 = number.substring(0, 3);

    // 두 번째 그룹: 다음 2자리
    let part2 = number.substring(3, 5);

    // 세 번째 그룹: 나머지 모든 자리
    let part3 = number.substring(5);

    // 포매팅된 문자열 조합
    let formatted = `${part1}-${part2}-${part3}`;

    return formatted;
  };
  const navigateToPurchase = () => {
    navigate("/account/detail", {
      state: { accountId: account.id, type: account.productType },
    });
  };

  const navigateToTransfer = () => {
    navigate("/transfer/simple");
  };
  return (
    <div className="d-flex flex-column w-auto px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="text-center">
        <h5 className="mt-4 text-5xl font-hana2 font-bold tracking-tight text-gray-900 dark:text-white">
          {accountNumberFormatter(account.accountNumber)}
        </h5>
        <p className="mb-4 mt-4 font-hana2 text-3xl text-gray-700 dark:text-gray-400">
          {account.name}
        </p>
      </div>
      <div className="text-center mx-4">
        <p className="font-hana2 text-gray-700 text-4xl dark:text-gray-400">
          잔액: {formatCurrency(account.balance)} 원
        </p>
      </div>
      <div className="flex justify-center space-x-4 pb-4">
        <button
          onClick={navigateToPurchase}
          className="flex-1 mt-4 mb-2 px-4 py-2 text-4xl font-hana2 text-center text-white bg-hanaRed rounded-lg"
        >
          조회
        </button>
        <button
          onClick={navigateToTransfer}
          className="flex-1 mt-4 mb-2 px-4 py-2 text-4xl font-hana2 text-center text-white bg-hanaRed rounded-lg"
        >
          이체
        </button>
      </div>
    </div>
  );
}

export default AccountInquiryCard;
