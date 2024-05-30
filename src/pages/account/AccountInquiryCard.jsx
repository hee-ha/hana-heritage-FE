import React from "react";
import { useNavigate } from "react-router-dom";

function AccountInquiryCard({ account }) {
  const navigate = useNavigate();

  const navigateToPurchase = () => {
    navigate("/account/detail");
  };

  return (
    <div className="d-flex flex-column bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="text-center">
        <h5 className="mt-3 text-5xl font-hana2 font-bold tracking-tight text-gray-900 dark:text-white">
          {account.number}
        </h5>
        <p className="mb-3 font-hana2 text-3xl text-gray-700 dark:text-gray-400">
          {account.name}
        </p>
      </div>
      <div className="text-center mx-3">
        <p className="font-hana2 text-gray-700 text-4xl dark:text-gray-400">
          잔액 : {account.balance} 원
        </p>
      </div>
      <div className="flex justify-center space-x-2 pb-2">
        <button
          onClick={navigateToPurchase}
          className="mt-5 mb-2 px-4 py-2 text-3xl font-hana2 text-center text-white bg-hanaRed rounded-lg"
        >
          조회
        </button>
        <button className="mt-5 mb-2 px-4 py-2 text-3xl font-hana2 text-center text-white bg-hanaRed rounded-lg">
          이체
        </button>
      </div>
    </div>
  );
}

export default AccountInquiryCard;
