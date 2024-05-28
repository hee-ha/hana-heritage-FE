import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FormControl } from "@mui/material";
import classNames from "classnames";

function TransferHistory() {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState("해당계좌없음");
  const [sortOrder, setSortOrder] = useState("최근거래먼저");
  const [resultCount, setResultCount] = useState("30건");
  const [selectedContent, setSelectedContent] = useState("전체(입금+출금)");
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownVisibility(false);
  };

  const handleDateQuickSelect = (days, label) => {
    const newStartDate = dayjs().subtract(days, "day");
    setStartDate(newStartDate);
    setEndDate(dayjs());
    setSelectedPeriod(label);
  };

  const handleSearch = () => {
    // Dummy data
    const dummyTransactions = [
      {
        date: "2024-05-26 14:12:10",
        type: "체크카드",
        description: "오마카세오사이",
        amountOut: "-11,500",
        amountIn: "",
        balance: "803,921",
        location: "자금결제부",
      },
      {
        date: "2024-05-26 00:22:19",
        type: "대체",
        description: "네이버파이낸셜",
        amountOut: "-37,780",
        amountIn: "",
        balance: "815,421",
        location: "청량리금융센터",
      },
      {
        date: "2024-05-25 20:32:39",
        type: "대체",
        description: "네이버페이충전",
        amountOut: "",
        amountIn: "+18,780",
        balance: "853,201",
        location: "분당정자금융센터",
      },
      {
        date: "2024-05-25 20:27:03",
        type: "대체",
        description: "네이버파이낸셜",
        amountOut: "-18,780",
        amountIn: "",
        balance: "834,421",
        location: "청량리금융센터",
      },
      {
        date: "2024-05-24 08:56:51",
        type: "대체",
        description: "네이버파이낸셜",
        amountOut: "-414",
        amountIn: "",
        balance: "853,201",
        location: "청량리금융센터",
      },
    ];
    setTransactions(dummyTransactions);
  };

  return (
    <div className="px-10 mt-10">
      <h1 className="font-hana2 text-6xl mb-8">거래내역조회</h1>
      <div className="mb-2">
        <button
          onClick={() => setDropdownVisibility(!dropdownVisibility)}
          className="flex justify-between items-center w-full px-6 py-6 border-hanaGreen border rounded-md font-noto font-semibold text-5xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-hanaGreen"
        >
          <span>{selectedItem}</span>
          {/* <ChevronDownIcon className="w-5 h-5 text-gray-500" /> */}
        </button>
        <div
          className={`${
            dropdownVisibility ? "block" : "hidden"
          } mt-2 border border-hanaGreen border-opacity-30 rounded-md bg-white shadow-lg text-3xl`}
        >
          <ul>
            {["item 1", "item 2", "item 3", "item 4"].map((item) => (
              <li
                key={item}
                className="px-4 py-2 hover:bg-hanaGreen hover:bg-opacity-30 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 bg-white shadow rounded-md">
        <div className="mb-12">
          <FormControl component="fieldset" className="w-full">
            <div className="text-5xl font-semibold mb-2">조회기간</div>

            <div className="flex items-center space-x-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => (
                    <input
                      {...params}
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
                    <input
                      {...params}
                      className="w-40 p-2 border rounded"
                      placeholder="조회기간 끝"
                    />
                  )}
                />
              </LocalizationProvider>
              <div className="flex h-14 space-x-2">
                {[
                  { label: "당일", days: 0 },
                  { label: "3일", days: 3 },
                  { label: "1주", days: 7 },
                  { label: "2주", days: 14 },
                  { label: "1개월", days: 30 },
                  { label: "3개월", days: 90 },
                  { label: "6개월", days: 180 },
                  { label: "1년", days: 365 },
                ].map((period) => (
                  <button
                    key={period.label}
                    onClick={() =>
                      handleDateQuickSelect(period.days, period.label)
                    }
                    className={classNames(
                      "px-3 py-2 border rounded text-3xl text-gray-600 hover:bg-hanaGreen hover:bg-opacity-30",
                      {
                        "text-hanaGreen bg-hanaGreen bg-opacity-10 font-bold border-hanaGreen border-2":
                          selectedPeriod === period.label,
                      }
                    )}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-2 text-gray-500 text-3xl">
              연월일 8자리로 입력 (예)20210501
            </p>
          </FormControl>
        </div>

        <div className="mb-12">
          <div className="text-5xl font-semibold mb-2">조회내용</div>
          <FormControl component="fieldset" className="w-full">
            <div className="flex h-14 space-x-2">
              {["전체(입금+출금)", "출금내역", "입금내역", "이자납입내역"].map(
                (label) => (
                  <button
                    key={label}
                    onClick={() => setSelectedContent(label)}
                    className={classNames(
                      "px-3 py-2 border rounded text-3xl text-gray-600 hover:bg-hanaGreen hover:bg-opacity-30",
                      {
                        "bg-hanaGreen bg-opacity-10 text-hanaGreen font-bold border-hanaGreen border-2":
                          selectedContent === label,
                      }
                    )}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </FormControl>
        </div>

        <div className="mb-6 flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <span className="text-5xl font-semibold">정렬방식</span>
            <div className="flex space-x-4">
              <label
                className={classNames(
                  "px-4 py-3 border rounded text-3xl text-gray-600 cursor-pointer hover:bg-hanaGreen hover:text-white transition-colors duration-200",
                  {
                    "text-hanaGreen font-bold border-hanaGreen border-2":
                      sortOrder === "최근거래먼저",
                  }
                )}
              >
                <input
                  type="radio"
                  name="sortOrder"
                  value="최근거래먼저"
                  checked={sortOrder === "최근거래먼저"}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="hidden"
                />
                최근거래먼저
              </label>
              <label
                className={classNames(
                  "px-4 py-3 border rounded text-3xl text-gray-600 cursor-pointer hover:bg-hanaGreen hover:text-white transition-colors duration-200",
                  {
                    "text-hanaGreen font-bold border-hanaGreen border-2":
                      sortOrder === "과거거래먼저",
                  }
                )}
              >
                <input
                  type="radio"
                  name="sortOrder"
                  value="과거거래먼저"
                  checked={sortOrder === "과거거래먼저"}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="hidden"
                />
                과거거래먼저
              </label>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-5xl font-semibold">건수</span>
            <div className="flex space-x-4">
              <label
                className={classNames(
                  "px-4 py-3 border rounded text-3xl text-gray-600 cursor-pointer hover:bg-hanaGreen hover:text-white transition-colors duration-200",
                  {
                    "text-hanaGreen font-bold border-hanaGreen border-2":
                      resultCount === "15건",
                  }
                )}
              >
                <input
                  type="radio"
                  name="resultCount"
                  value="15건"
                  checked={resultCount === "15건"}
                  onChange={(e) => setResultCount(e.target.value)}
                  className="hidden"
                />
                15건
              </label>
              <label
                className={classNames(
                  "px-4 py-3 border rounded text-3xl text-gray-600 cursor-pointer hover:bg-hanaGreen hover:text-white transition-colors duration-200",
                  {
                    "text-hanaGreen font-bold border-hanaGreen border-2":
                      resultCount === "30건",
                  }
                )}
              >
                <input
                  type="radio"
                  name="resultCount"
                  value="30건"
                  checked={resultCount === "30건"}
                  onChange={(e) => setResultCount(e.target.value)}
                  className="hidden"
                />
                30건
              </label>
              <label
                className={classNames(
                  "px-4 py-3 border rounded text-3xl text-gray-600 cursor-pointer hover:bg-hanaGreen hover:text-white transition-colors duration-200",
                  {
                    "text-hanaGreen font-bold border-hanaGreen border-2":
                      resultCount === "50건",
                  }
                )}
              >
                <input
                  type="radio"
                  name="resultCount"
                  value="50건"
                  checked={resultCount === "50건"}
                  onChange={(e) => setResultCount(e.target.value)}
                  className="hidden"
                />
                50건
              </label>
              <label
                className={classNames(
                  "px-4 py-3 border rounded text-3xl text-gray-600 cursor-pointer hover:bg-hanaGreen hover:text-white transition-colors duration-200",
                  {
                    "text-hanaGreen font-bold border-hanaGreen border-2":
                      resultCount === "100건",
                  }
                )}
              >
                <input
                  type="radio"
                  name="resultCount"
                  value="100건"
                  checked={resultCount === "100건"}
                  onChange={(e) => setResultCount(e.target.value)}
                  className="hidden"
                />
                100건
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-6">
          <button
            className="text-white font-hana2 font-semibold text-3xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
            onClick={handleSearch}
          >
            조회
          </button>
          <button className="border border-hanaRed text-hanaRed font-semibold text-3xl py-3 px-8 z-10 mt-4 rounded-lg hover:bg-hanaRed-light transition-transform transform hover:animate-bubbly ml-4">
            상세검색 닫기
          </button>
        </div>

        {transactions.length > 0 && (
          <div className="mt-12">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-3xl text-gray-700 border-r">
                    거래일시
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-3xl text-gray-700 border-r">
                    구분
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-3xl text-gray-700 border-r">
                    적요
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-3xl text-gray-700 border-r">
                    출금액
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-3xl text-gray-700 border-r">
                    입금액
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-3xl text-gray-700 border-r">
                    잔액
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-3xl text-gray-700">
                    거래점
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className="text-2xl text-gray-700 hover:bg-gray-100 border-t"
                  >
                    <td className="text-left py-3 px-4 border-r">
                      {transaction.date}
                    </td>
                    <td className="text-left py-3 px-4 border-r">
                      {transaction.type}
                    </td>
                    <td className="text-left py-3 px-4 border-r">
                      {transaction.description}
                    </td>
                    <td className="text-right py-3 px-4 text-red-500 border-r">
                      {transaction.amountOut}
                    </td>
                    <td className="text-right py-3 px-4 text-blue-500 border-r">
                      {transaction.amountIn}
                    </td>
                    <td className="text-right py-3 px-4 text-green-500 border-r">
                      {transaction.balance}
                    </td>
                    <td className="text-left py-3 px-4">
                      {transaction.location}
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