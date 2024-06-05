import React, { useState, useEffect } from "react";
import AccountInquiryCard from "./AccountInquiryCard";
import { getMyAccount } from "../../apis/account/getMyAccount";
import { getMyInfo } from "../../apis/customer/getMyInfo";

const formatCurrency = (number) => {
  // 입력값을 문자열로 변환
  let str = number.toString();

  // 정규식을 사용하여 콤마를 추가
  let formatted = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formatted;
};

const calculateTotalBalance = (accounts) => {
  let totalBalance = 0;
  for (var key in accounts) {
    totalBalance += accounts[key].balance;
  }
  return formatCurrency(totalBalance);
};

const extractNormal = (accounts) => {
  let normal = [];
  for (var key in accounts) {
    if (accounts[key].productType === "03") {
      normal.push(accounts[key]);
    }
  }
  return normal;
};

const extractSaving = (accounts) => {
  let saving = [];
  for (var key in accounts) {
    if (accounts[key].productType === "01") {
      saving.push(accounts[key]);
    }
  }
  return saving;
};

const extractDeposit = (accounts) => {
  let deposit = [];
  for (var key in accounts) {
    if (accounts[key].productType === "02") {
      deposit.push(accounts[key]);
    }
  }
  return deposit;
};

function AccountInquiry() {
  const [showDeposit, setShowDeposit] = useState(true);
  const [showSavings, setShowSavings] = useState(true);
  const [showChecking, setShowChecking] = useState(true);
  const [totalBalance, setTotalBalance] = useState(0);
  const [accounts, setAccounts] = useState({});
  const [saving, setSaving] = useState([]);
  const [deposit, setDeposit] = useState([]);
  const [normal, setNormal] = useState([]);
  const [name, setName] = useState("");

  const doMyInfo = async () => {
    try {
      const response = await getMyInfo();
      setName(response.result.name);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const doAccounts = async () => {
    try {
      const response = await getMyAccount();
      setAccounts(response.result);
      setTotalBalance(calculateTotalBalance(response.result));
      setNormal(extractNormal(response.result));
      setSaving(extractSaving(response.result));
      setDeposit(extractDeposit(response.result));
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    doAccounts();
    doMyInfo();
  }, []);

  return (
    <div className="px-24">
      <section>
        <header className="flex justify-between items-center pt-10 pb-10 border-b border-hanaGreen ">
          <h1 className="text-6xl font-hana2 font-semibold">
            <span className="text-hanaGreen">계좌 조회</span> 페이지 입니다.
          </h1>
        </header>

        <div className="px-12 pt-8 mb-8 mt-8 flex flex-col  border border-2 rounded border-hanaGreen h-72">
          <div>
            <h1 className="text-5xl font-hana2 mb-5">
              <span className="font-semibold text-hanaGreen">{name}</span>{" "}
              고객님,
            </h1>
            <h2 className="text-3xl font-hana2 mb-3">
              매일 매일 좋은일만 가득하세요.
            </h2>
          </div>
          <div className="flex-grow"></div>{" "}
          {/* 자식 요소들 사이의 공간을 채우기 위한 요소 */}
          <div className="text-right mb-4">
            <h2 className="text-4xl font-hana2">
              총 잔액:{" "}
              <span className="font-semibold text-hanaGreen">
                {totalBalance} 원
              </span>
            </h2>
          </div>
        </div>
      </section>
      <section className="my-4 py-4">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-semibold pb-5">
              예금({saving?.length})
            </h2>
            <button
              className="bg-hanaRed px-4 py-2 rounded"
              onClick={() => setShowDeposit(!showDeposit)}
            >
              {showDeposit ? (
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              ) : (
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              )}
            </button>
          </div>
          {showDeposit && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {saving?.map((account) => (
                <AccountInquiryCard key={account.id} account={account} />
              ))}
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-semibold pb-5">
              적금({deposit?.length})
            </h2>
            <button
              className="bg-hanaRed px-4 py-2 rounded"
              onClick={() => setShowSavings(!showSavings)}
            >
              {showSavings ? (
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              ) : (
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              )}
            </button>
          </div>
          {showSavings && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deposit?.map((account) => (
                <AccountInquiryCard key={account.id} account={account} />
              ))}
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-semibold pb-5">
              입출금({normal?.length})
            </h2>
            <button
              className="bg-hanaRed px-4 py-2 rounded"
              onClick={() => setShowChecking(!showChecking)}
            >
              {showChecking ? (
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              ) : (
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              )}
            </button>
          </div>
          {showChecking && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {normal?.map((account) => (
                <AccountInquiryCard key={account.id} account={account} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default AccountInquiry;
