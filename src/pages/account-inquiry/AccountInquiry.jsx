import React, { useState, useEffect } from "react";
import AccountCard from "./AccountCard";

const accounts = {
  예금: [
    {
      id: 1,
      name: "Fixed Deposit",
      number: "9012-3456-7890",
      balance: 10000.0,
    },
    {
      id: 2,
      name: "Investment Account",
      number: "1234-5678-9101",
      balance: 15200.0,
    },
  ],
  적금: [
    {
      id: 3,
      name: "Savings Account",
      number: "2345-6789-0123",
      balance: 4800.0,
    },
  ],
  입출금: [
    {
      id: 4,
      name: "Checking Account",
      number: "3456-7890-1234",
      balance: 1200.0,
    },
    {
      id: 5,
      name: "Daily Expense Account",
      number: "4567-8901-2345",
      balance: 2500.0,
    },
  ],
};

const calculateTotalBalance = (accounts) => {
  return Object.values(accounts)
    .flat()
    .reduce((acc, account) => acc + account.balance, 0);
};

function AccountInquiry() {
  const totalBalance = calculateTotalBalance(accounts);
  const [showDeposit, setShowDeposit] = useState(true);
  const [showSavings, setShowSavings] = useState(true);
  const [showChecking, setShowChecking] = useState(true);
  /**
   * 
    ----- API 생성 후 연결하는 코드 ------
    const [accounts, setAccounts] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("url");
          const data = await response.json();
          setAccounts(data);
        } catch (error) {
          alert(error.message);
        }
      };

      fetchData();
    }, []);

    */
  return (
    <div className="px-24">
      <section>
        <header className="flex justify-between items-center pt-10">
          <h1 className="text-5xl font-hana2 font-medium">계좌 조회</h1>
        </header>

        <div className="px-20 mb-8 mt-8 d-flex flex-column">
          <div>
            <h1 className="text-3xl font-hana2 mb-5">김할배 고객님,</h1>
            <h2 className="text-2xl font-hana2 mb-3 ">
              매일 매일 좋은일만 가득하세요.
            </h2>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold font-hana2">
              총 잔액: {totalBalance.toFixed(2)}
            </h2>
          </div>
        </div>
      </section>
      <section className="my-4">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold pb-5">
              예금({accounts.예금.length})
            </h2>
            <button
              className="bg-hanaGreen px-4 py-2 rounded"
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
              {accounts.예금.map((account) => (
                <AccountCard key={account.id} account={account} />
              ))}
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold pb-5">
              적금({accounts.적금.length})
            </h2>
            <button
              className="bg-hanaGreen px-4 py-2 rounded"
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
              {accounts.적금.map((account) => (
                <AccountCard key={account.id} account={account} />
              ))}
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold pb-5">
              입출금({accounts.입출금.length})
            </h2>
            <button
              className="bg-hanaGreen px-4 py-2 rounded"
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
              {accounts.입출금.map((account) => (
                <AccountCard key={account.id} account={account} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default AccountInquiry;
