import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import classNames from "classnames";
import {
  getHistoryByAccountId,
  getMyAccount,
} from "../../apis/transfer/TransferHistory";
import { formatDate, formatNumberWithCommas } from "../../utils/utils";

function TransferHistory() {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState("계좌를 선택해주세요");
  const [selectedContent, setSelectedContent] = useState("전체(입금+출금)");
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [myAccounts, setMyAccounts] = useState([]);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownVisibility(false);
  };

  const handleDateQuickSelect = (days, label) => {
    const newStartDate = dayjs().subtract(days, "day").startOf("day");
    const newEndDate = dayjs().endOf("day");
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    setSelectedPeriod(label);
  };

  const handleSearch = async () => {
    if (!selectedItem) return;
    try {
      const history = await getHistoryByAccountId(selectedItem.id);
      const filteredTransactions = history.result.filter((transaction) => {
        const transactionDate = dayjs(transaction.dealdate);
        return (
          transactionDate.isAfter(startDate) &&
          transactionDate.isBefore(endDate)
        );
      });
      setTransactions(filteredTransactions);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  useEffect(() => {
    const fetchMyAccounts = async () => {
      try {
        const response = await getMyAccount();
        setMyAccounts(response.data.result);
      } catch (error) {
        console.error("Failed to fetch my accounts:", error);
      }
    };

    fetchMyAccounts();
  }, []);

  useEffect(() => {}, [selectedItem, startDate, endDate]);

  return (
    <div className="px-24 font-noto text-3xl">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          고객님의 <span className="text-hanaGreen">거래내역 목록</span>을
          안내드립니다.
        </h2>
        <hr />
      </header>
      <div className="mb-2">
        <button
          onClick={() => setDropdownVisibility(!dropdownVisibility)}
          className="flex justify-between items-center w-full px-6 py-6 border-hanaGreen border rounded-md font-hana2 font-semibold text-5xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-hanaGreen"
        >
          <span>
            {selectedItem.name ? selectedItem.name : "계좌를 선택해 주세요"}
          </span>
        </button>
        <div
          className={`${dropdownVisibility ? "block" : "hidden"} mt-2 border border-hanaGreen border-opacity-30 rounded-md bg-white shadow-lg font-hana2 font-semibold text-4xl`}
        >
          <ul>
            {myAccounts?.map((account) => (
              <li
                key={account?.id}
                className="px-6 py-4 hover:bg-hanaGreen hover:bg-opacity-30 cursor-pointer"
                onClick={() => handleItemClick(account)}
              >
                {account?.name ? (
                  <>
                    {account.name}{" "}
                    <span className="text-hanaRed">
                      ({account.accountNumber})
                    </span>
                  </>
                ) : (
                  "계좌를 선택해 주세요"
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 bg-hanaSilver/20 shadow rounded-md mt-12">
        <div className="mb-12">
          <FormControl component="fieldset" className="w-full">
            <div className="font-hana2 text-5xl font-semibold mb-2">
              조회기간
            </div>

            <div className="flex items-center space-x-4 h-20">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        style: {
                          height: "3.5rem", // corresponds to h-14 in Tailwind CSS
                          fontFamily: "hana2, sans-serif",
                          fontSize: "2.25rem", // corresponds to text-4xl in Tailwind CSS
                          fontWeight: "bold",
                        },
                      }}
                      className="w-40 p-2 border rounded"
                      placeholder="조회기간 시작"
                    />
                  )}
                />
                <span>-</span>
                <DatePicker
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        style: {
                          height: "3.5rem", // corresponds to h-14 in Tailwind CSS
                          fontFamily: "hana2, sans-serif",
                          fontSize: "2.25rem", // corresponds to text-4xl in Tailwind CSS
                          fontWeight: "bold",
                        },
                      }}
                      className="w-40 p-2 border rounded"
                      placeholder="조회기간 끝"
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div>
              <div className="flex h-20 space-x-2">
                <ul className="grid w-full gap-3 md:grid-cols-5">
                  {[
                    { label: "당일", days: 0 },
                    // { label: "3일", days: 3 },
                    { label: "1주", days: 7 },
                    { label: "1개월", days: 30 },
                    { label: "3개월", days: 90 },
                    { label: "6개월", days: 180 },
                  ].map((period) => (
                    <li key={period.label}>
                      <input
                        type="radio"
                        id={`period-${period.label}`}
                        name="period"
                        value={period.label}
                        className="hidden peer"
                      />
                      <label
                        for={`period-${period.label}`}
                        className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                        onClick={() =>
                          handleDateQuickSelect(period.days, period.label)
                        }
                      >
                        <div className="block">
                          <div className="w-full">{period.label}</div>
                        </div>
                        <svg
                          className="h-8 w-8 rtl:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="leading-snug mb-5 text-gray-500">
              <strong>연월일 8자리로 입력 (예)20210501</strong>
            </p>
          </FormControl>
        </div>

        <div className="mb-12">
          <div className="font-hana2 text-5xl font-semibold mb-5">조회내용</div>
          <FormControl component="fieldset" className="w-full">
            <div className="flex h-14 space-x-2">
              <ul className="grid w-full gap-6 md:grid-cols-4">
                {[
                  "전체(입금+출금)",
                  "출금내역",
                  "입금내역",
                  "이자납입내역",
                ].map((label) => (
                  <li key={label}>
                    <input
                      type="radio"
                      id={`content-${label}`}
                      name="content"
                      value={label}
                      className="hidden peer"
                    />
                    <label
                      for={`content-${label}`}
                      className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                      onClick={() => setSelectedContent(label)}
                    >
                      <div className="block">
                        <div className="w-full">{label}</div>
                      </div>
                      <svg
                        className="h-8 w-8 rtl:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </FormControl>
        </div>

        <div className="flex items-center justify-end mt-6">
          <button
            className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
            onClick={handleSearch}
          >
            조회
          </button>
          <button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg ml-4">
            상세검색 닫기
          </button>
        </div>

        {transactions?.length > 0 && (
          <div className="mt-12">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="bg-hanaGold rounded-t-lg text-left py-3 px-4 font-hana2 font-semibold text-3xl text-gray-700 border-r">
                    거래일시
                  </th>
                  <th className="bg-hanaGold text-left py-3 px-4 font-hana2 font-semibold text-3xl text-gray-700 border-r">
                    받는사람
                  </th>
                  <th className="bg-hanaGold text-right py-3 px-4 font-hana2 font-semibold text-3xl text-gray-700 border-r">
                    나간돈
                  </th>
                  <th className="bg-hanaGold text-right py-3 px-4 font-hana2 font-semibold text-3xl text-gray-700 border-r">
                    들어온돈
                  </th>
                  <th className="bg-hanaGold text-right py-3 px-4 font-hana2 font-semibold text-3xl text-gray-700 border-r">
                    잔액
                  </th>
                  <th className="bg-hanaGold rounded-t-lg text-left py-3 px-4 font-hana2 font-semibold text-3xl text-gray-700">
                    보낸사람
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className="text-2xl text-gray-700 hover:bg-gray-100 border-t"
                  >
                    <td className="text-left py-3 font-semibold px-4 border-r">
                      {formatDate(transaction.dealdate)}
                    </td>

                    <td className="text-left py-3 px-4  font-semibold border-r">
                      {transaction.recipientRemarks}
                    </td>
                    <td className="text-right py-3 px-4 font-semibold text-red-500 border-r">
                      {transaction.dealClassification == "출금"
                        ? formatNumberWithCommas(transaction.amount)
                        : ""}
                    </td>
                    <td className="text-right py-3 px-4 font-semibold text-blue-500 border-r">
                      {transaction.dealClassification == "입금"
                        ? formatNumberWithCommas(transaction.amount)
                        : ""}
                    </td>
                    <td className="text-right py-3 px-4 font-semibold text-green-500 border-r table-cell-nowrap">
                      {formatNumberWithCommas(transaction.remainBalance)}
                    </td>
                    <td className="text-left py-3 px-4 font-semibold">
                      {transaction.dealClassification == "입금"
                        ? transaction.senderRemarks
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TransferHistory;
