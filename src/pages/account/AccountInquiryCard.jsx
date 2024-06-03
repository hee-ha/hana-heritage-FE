import React from "react";
import { useNavigate } from "react-router-dom";

function AccountInquiryCard({ account, accountId }) {
  const navigate = useNavigate();

  const navigateToPurchase = () => {
    navigate("/account/detail", { state: { accountId: accountId } });
  };

  return (
    <div className="d-flex flex-column w-auto px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="text-center">
        <h5 className="mt-4 text-5xl font-hana2 font-bold tracking-tight text-gray-900 dark:text-white">
          {account.number}
        </h5>
        <p className="mb-4 mt-4 font-hana2 text-3xl text-gray-700 dark:text-gray-400">
          {account.name}
        </p>
      </div>
      <div className="text-center mx-4">
        <p className="font-hana2 text-gray-700 text-4xl dark:text-gray-400">
          잔액 : {account.balance} 원
        </p>
      </div>
      <div className="flex justify-center space-x-4 pb-4">
        <button
          onClick={() => navigateToPurchase(accountId)}
          className="flex-1 mt-4 mb-2 px-4 py-2 text-4xl font-hana2 text-center text-white bg-hanaRed rounded-lg"
        >
          조회
        </button>
        <button className="flex-1 mt-4 mb-2 px-4 py-2 text-4xl font-hana2 text-center text-white bg-hanaRed rounded-lg">
          이체
        </button>
      </div>
    </div>
  );
}

export default AccountInquiryCard;
