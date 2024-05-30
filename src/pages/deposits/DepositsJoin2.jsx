import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";

function DepositsJoin2() {
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [subscriptionPeriod, setSubscriptionPeriod] = useState("1년");
  const [depositMethod, setDepositMethod] = useState("정액적립식");
  const [autoTransfer, setAutoTransfer] = useState(false);
  const [autoTransferAccount, setAutoTransferAccount] = useState("");
  const [autoTransferPassword, setAutoTransferPassword] = useState("");
  const [autoTransferAmount, setAutoTransferAmount] = useState("");
  const [autoTransferStartDate, setAutoTransferStartDate] = useState("");
  const [autoTransferDay, setAutoTransferDay] = useState("18일");
  const [autoTransferInterval, setAutoTransferInterval] = useState("1개월");
  const [expiryHandling, setExpiryHandling] = useState("만기시 자동해지");
  const [autoTermination, setAutoTermination] = useState("만기일");
  const [smsNotification, setSmsNotification] = useState("신청함");
  const [petDoc, setPetDoc] = useState(false);
  const [petName, setPetName] = useState("");
  const [insurance, setInsurance] = useState("신청함");

  const [showModal, setShowModal] = useState(false);
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      accountNumber,
      password,
      email,
      newAmount,
      subscriptionPeriod,
      depositMethod,
      autoTransfer,
      autoTransferAccount,
      autoTransferPassword,
      autoTransferAmount,
      autoTransferStartDate,
      autoTransferDay,
      autoTransferInterval,
      expiryHandling,
      autoTermination,
      smsNotification,
      petDoc,
      petName,
      insurance,
    };
    navigate("/deposits/join/3", { state: { formData } });
  };

  const addAmount = (amount, setAmount) => {
    setAmount((prevAmount) => {
      const numericPrevAmount = parseInt(prevAmount.replace(/,/g, "")) || 0;
      const newAmount = numericPrevAmount + amount;
      return newAmount.toLocaleString(); // 숫자에 쉼표 추가
    });
  };

  const handleMouseOver = (text, event) => {
    const rect = event.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: text,
      x: rect.right + 10,
      y: rect.top,
    });
  };

  const handleMouseOut = () => {
    setTooltip({ visible: false, text: "", x: 0, y: 0 });
  };

  return (
    <div className="mx-auto px-24 rounded-lg border-2 border-gray-300 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">예금상품 가입</h1>
      <h2 className="text-xl font-semibold text-center mb-6">펫사랑 적금</h2>

      <ol className="my-10 flex items-center w-full p-4 space-x-4 text-sm font-medium text-center bg-white border border-hanaSilver rounded-lg shadow-sm sm:text-base  rtl:space-x-reverse">
        <li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
            1
          </span>
          약관동의
          <svg
            className="w-7 h-7 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
            2
          </span>
          정보입력
          <svg
            className="w-7 h-7 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
            3
          </span>
          정보확인
          <svg
            className="w-7 h-7 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
            4
          </span>
          가입완료
        </li>
      </ol>

      <form className="rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-6 rounded-lg overflow-hidden">
          <div className="bg-[#AD9A5F] p-4 text-4xl h-16 rounded-t-lg font-hana2">
            기본정보
          </div>
          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>출금계좌번호</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full p-2 border rounded mt-2"
            />
          </div>
          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>계좌 비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mt-2"
            />
          </div>
        </div>

        <div className="mb-6 rounded-lg overflow-hidden">
          <div className="bg-[#AD9A5F] p-4 text-4xl h-16 rounded-t-lg font-hana2">
            상품정보
          </div>
          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label className="text-4xl">신규금액</label>
            <div className="flex items-center space-x-4">
              <div className="relative w-full">
                <input
                  type="text"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="w-full p-2 border rounded text-right pr-16"
                  placeholder="10만원 이상~50만원 이하"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  원
                </span>
              </div>
              <button
                type="button"
                onClick={() => addAmount(500000, setNewAmount)}
                className="p-2 border rounded bg-yellow-200"
              >
                +50만원
              </button>
              <button
                type="button"
                onClick={() => addAmount(100000, setNewAmount)}
                className="p-2 border rounded bg-yellow-200"
              >
                +10만원
              </button>
              <button
                type="button"
                onClick={() => addAmount(50000, setNewAmount)}
                className="p-2 border rounded bg-yellow-200"
              >
                +5만원
              </button>
              <button
                type="button"
                onClick={() => addAmount(10000, setNewAmount)}
                className="p-2 border rounded bg-yellow-200"
              >
                +1만원
              </button>
              <button
                type="button"
                onClick={() => setNewAmount("")}
                className="p-2 border rounded bg-yellow-200"
              >
                정정
              </button>
            </div>
          </div>
          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>가입기간</label>
            <div className="flex space-x-4 mt-2">
              <ul className="grid w-full gap-6 md:grid-cols-3">
                <li>
                  <input
                    type="radio"
                    id="hosting-small"
                    name="hosting"
                    value="hosting-small"
                    className="hidden peer"
                    onChange={(e) => setSubscriptionPeriod(e.target.value)}
                    required
                  />
                  <label
                    for="hosting-small"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">1년</div>
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
                <li>
                  <input
                    type="radio"
                    id="hosting-medium"
                    name="hosting"
                    value="hosting-medium"
                    className="hidden peer"
                  />
                  <label
                    for="hosting-medium"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">2년</div>
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
                <li>
                  <input
                    type="radio"
                    id="hosting-big"
                    name="hosting"
                    value="hosting-big"
                    className="hidden peer"
                  />
                  <label
                    for="hosting-big"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">3년</div>
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
              </ul>
            </div>

            {/* <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => setSubscriptionPeriod("1년")}
                className={`p-2 border rounded ${
                  subscriptionPeriod === "1년"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
                onMouseOver={(e) =>
                  handleMouseOver("1년 가입시 금리는 2.5%", e)
                }
                onMouseOut={handleMouseOut}
              >
                1년
              </button>
              <button
                type="button"
                onClick={() => setSubscriptionPeriod("2년")}
                className={`p-2 border rounded ${
                  subscriptionPeriod === "2년"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
                onMouseOver={(e) =>
                  handleMouseOver("2년 가입시 금리는 3.0%", e)
                }
                onMouseOut={handleMouseOut}
              >
                2년
              </button>
              <button
                type="button"
                onClick={() => setSubscriptionPeriod("3년")}
                className={`p-2 border rounded ${
                  subscriptionPeriod === "3년"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
                onMouseOver={(e) =>
                  handleMouseOver("3년 가입시 금리는 3.5%", e)
                }
                onMouseOut={handleMouseOut}
              >
                3년
              </button>
            </div> */}
            {tooltip.visible && (
              <div
                style={{
                  display: "inline-block",
                  top: tooltip.y,
                  left: tooltip.x,
                  backgroundColor: "#B5B5B5",
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                }}
              >
                {tooltip.text}
              </div>
            )}
          </div>

          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>적립방법</label>
            <div className="flex space-x-4 mt-2">
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small2"
                    name="hosting2"
                    value="hosting-small2"
                    className="hidden peer"
                    required
                  />
                  <label
                    for="hosting-small2"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">정액적립식</div>
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
                <li>
                  <input
                    type="radio"
                    id="hosting-big2"
                    name="hosting2"
                    value="hosting-big2"
                    className="hidden peer"
                  />
                  <label
                    for="hosting-big2"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">자유적립식</div>
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
              </ul>
              {/* <button
                type="button"
                onClick={() => setDepositMethod("정액적립식")}
                className={`p-2 border rounded ${
                  depositMethod === "정액적립식"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
              >
                정액적립식
              </button>
              <button
                type="button"
                onClick={() => setDepositMethod("자유적립식")}
                className={`p-2 border rounded ${
                  depositMethod === "자유적립식"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
              >
                자유적립식
              </button> */}
            </div>
          </div>
          {/* <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label htmlFor="autoTransferYes" className="cursor-pointer mr-4">
              <input
                id="autoTransferYes"
                type="radio"
                name="autoTransfer"
                checked={autoTransfer === true}
                onChange={() => setAutoTransfer(true)}
                className="mr-2 transform scale-150"
              />
              자동이체 신청하기
            </label>
            <label htmlFor="autoTransferNo" className="cursor-pointer">
              <input
                id="autoTransferNo"
                type="radio"
                name="autoTransfer"
                checked={autoTransfer === false}
                onChange={() => setAutoTransfer(false)}
                className="mr-2 transform scale-150"
              />
              자동이체 신청 안함
            </label>
          </div> */}
          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>자동이체</label>
            <div className="flex space-x-4 mt-2">
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small3"
                    name="hosting3"
                    value="hosting-small3"
                    className="hidden peer"
                    onChange={() => setAutoTransfer(true)}
                    checked={autoTransfer === true}
                    required
                  />
                  <label
                    for="hosting-small3"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">자동이체 신청</div>
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
                <li>
                  <input
                    type="radio"
                    id="hosting-big3"
                    name="hosting3"
                    value="hosting-big3"
                    className="hidden peer"
                    onChange={() => setAutoTransfer(false)}
                    checked={autoTransfer === false}
                  />
                  <label
                    for="hosting-big3"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">자동이체 신청안함</div>
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
              </ul>
            </div>
          </div>

          {autoTransfer && (
            <div className="p-4 bg-gray-200 rounded-lg mt-4 max-w-6xl mx-auto">
              {" "}
              {/* 최대 넓이를 설정하고 가운데 정렬 */}
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 출금계좌번호</label>
                <input
                  type="text"
                  value={autoTransferAccount}
                  onChange={(e) => setAutoTransferAccount(e.target.value)}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 계좌 비밀번호</label>
                <input
                  type="password"
                  value={autoTransferPassword}
                  onChange={(e) => setAutoTransferPassword(e.target.value)}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 금액</label>
                <div className="flex items-center space-x-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={autoTransferAmount}
                      onChange={(e) => setAutoTransferAmount(e.target.value)}
                      className="w-full p-2 border rounded text-right pr-16"
                      placeholder="10만원 이상~50만원 이하"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      원
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => addAmount(500000, setAutoTransferAmount)}
                    className="p-2 border rounded bg-yellow-200"
                  >
                    +50만원
                  </button>
                  <button
                    type="button"
                    onClick={() => addAmount(100000, setAutoTransferAmount)}
                    className="p-2 border rounded bg-yellow-200"
                  >
                    +10만원
                  </button>
                  <button
                    type="button"
                    onClick={() => addAmount(50000, setAutoTransferAmount)}
                    className="p-2 border rounded bg-yellow-200"
                  >
                    +5만원
                  </button>
                  <button
                    type="button"
                    onClick={() => addAmount(10000, setAutoTransferAmount)}
                    className="p-2 border rounded bg-yellow-200"
                  >
                    +1만원
                  </button>
                  <button
                    type="button"
                    onClick={() => setAutoTransferAmount("")}
                    className="p-2 border rounded bg-yellow-200"
                  >
                    정정
                  </button>
                </div>
                {/* <input
                  type="text"
                  value={autoTransferAmount}
                  onChange={(e) => setAutoTransferAmount(e.target.value)}
                  className="w-full p-2 border rounded mt-2"
                /> */}
              </div>
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 시작일</label>
                <input
                  type="text"
                  value={autoTransferStartDate}
                  onChange={(e) => setAutoTransferStartDate(e.target.value)}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>
              {/* <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 지정일</label>
                <div className="flex space-x-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setAutoTransferDay("18일")}
                    className={`p-2 border rounded ${
                      autoTransferDay === "18일"
                        ? "bg-[#008485] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    18일
                  </button>
                  <button
                    type="button"
                    onClick={() => setAutoTransferDay("19일")}
                    className={`p-2 border rounded ${
                      autoTransferDay === "19일"
                        ? "bg-[#008485] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    19일
                  </button>
                  <button
                    type="button"
                    onClick={() => setAutoTransferDay("20일")}
                    className={`p-2 border rounded ${
                      autoTransferDay === "20일"
                        ? "bg-[#008485] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    20일
                  </button>
                </div>
              </div> */}
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 지정일</label>
                <div className="flex space-x-4 mt-2">
                  <ul className="grid w-full gap-6 md:grid-cols-3">
                    <li>
                      <input
                        type="radio"
                        id="hosting-small4"
                        name="hosting4"
                        value="hosting-small4"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="hosting-small4"
                        className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                      >
                        <div className="block">
                          <div className="w-full">18일</div>
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
                    <li>
                      <input
                        type="radio"
                        id="hosting-medium4"
                        name="hosting4"
                        value="hosting-medium4"
                        className="hidden peer"
                      />
                      <label
                        for="hosting-medium4"
                        className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                      >
                        <div className="block">
                          <div className="w-full">19일</div>
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
                    <li>
                      <input
                        type="radio"
                        id="hosting-big4"
                        name="hosting4"
                        value="hosting-big4"
                        className="hidden peer"
                      />
                      <label
                        for="hosting-big4"
                        className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                      >
                        <div className="block">
                          <div className="w-full">20일</div>
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
                  </ul>
                </div>

                {tooltip.visible && (
                  <div
                    style={{
                      display: "inline-block",
                      top: tooltip.y,
                      left: tooltip.x,
                      backgroundColor: "#B5B5B5",
                      border: "1px solid #ccc",
                      padding: "5px",
                      borderRadius: "5px",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                      zIndex: 10,
                    }}
                  >
                    {tooltip.text}
                  </div>
                )}
              </div>
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 간격</label>
                <div className="flex space-x-4 mt-2 text-hanaGreen">
                  <p>1 개월</p>
                  {/* <button
                    type="button"
                    onClick={() => setAutoTransferInterval("1개월")}
                    className={`p-2 border rounded ${
                      autoTransferInterval === "1개월"
                        ? "bg-[#008485] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    1개월
                  </button>
                  <button
                    type="button"
                    onClick={() => setAutoTransferInterval("2개월")}
                    className={`p-2 border rounded ${
                      autoTransferInterval === "2개월"
                        ? "bg-[#008485] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    2개월
                  </button> */}
                </div>
              </div>
            </div>
          )}
          {/* <div className="p-4 mt-4 border-b border-gray-300 text-4xl font-hana2">
            <label>만기해지구분</label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => setExpiryHandling("직접해지")}
                className={`p-2 border rounded ${
                  expiryHandling === "직접해지"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
              >
                직접해지
              </button>
              <button
                type="button"
                onClick={() => setExpiryHandling("만기시 자동해지")}
                className={`p-2 border rounded ${
                  expiryHandling === "만기시 자동해지"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
              >
                만기시 자동해지
              </button>
            </div>
          </div> */}

          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>만기해지구분</label>
            <div className="flex space-x-4 mt-2">
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small6"
                    name="hosting6"
                    value="hosting-small6"
                    className="hidden peer"
                    required
                  />
                  <label
                    for="hosting-small6"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">직접해지</div>
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
                <li>
                  <input
                    type="radio"
                    id="hosting-big6"
                    name="hosting6"
                    value="hosting-big6"
                    className="hidden peer"
                  />
                  <label
                    for="hosting-big6"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">만기시 자동해지</div>
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
              </ul>
            </div>
          </div>

          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>자동해지시점</label>
            <div className="flex space-x-4 mt-2">
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small5"
                    name="hosting5"
                    value="hosting-small5"
                    className="hidden peer"
                    required
                  />
                  <label
                    for="hosting-small5"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">만기일</div>
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
                <li>
                  <input
                    type="radio"
                    id="hosting-big5"
                    name="hosting5"
                    value="hosting-big5"
                    className="hidden peer"
                  />
                  <label
                    for="hosting-big5"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">이연만기일</div>
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
              </ul>
            </div>
          </div>

          {/* <div className="p-4 mt-4 border-b border-gray-300 text-4xl font-hana2">
            <label>자동해지시점</label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => setAutoTermination("만기일")}
                className={`p-2 border rounded ${
                  autoTermination === "만기일"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
              >
                만기일
              </button>
              <button
                type="button"
                onClick={() => setAutoTermination("이연만기일")}
                className={`p-2 border rounded ${
                  autoTermination === "이연만기일"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
              >
                이연만기일
              </button>
            </div>
          </div> */}

          {/* <div className="p-4 mt-4 text-4xl font-hana2">
            <label>예/적금 만기 SMS 통보</label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => setSmsNotification("신청함")}
                className={`p-2 border rounded ${
                  smsNotification === "신청함"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
              >
                신청함
              </button>
              <button
                type="button"
                onClick={() => setSmsNotification("신청안함")}
                className={`p-2 border rounded ${
                  smsNotification === "신청안함"
                    ? "bg-[#008485] text-white"
                    : "bg-white text-black"
                }`}
              >
                신청안함
              </button>
            </div>
          </div> */}

          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>예/적금 만기 SMS 통보</label>
            <div className="flex space-x-4 mt-2">
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small7"
                    name="hosting7"
                    value="hosting-small7"
                    className="hidden peer"
                    required
                  />
                  <label
                    for="hosting-small7"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">신청함</div>
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
                <li>
                  <input
                    type="radio"
                    id="hosting-big7"
                    name="hosting7"
                    value="hosting-big7"
                    className="hidden peer"
                  />
                  <label
                    for="hosting-big7"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white border-2 border-hanaRed rounded-lg cursor-pointer peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full">신청안함</div>
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
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6 font-hana2 text-4xl flex justify-center">
          <input
            id="petDocument"
            type="checkbox"
            checked={petDoc}
            onChange={(e) => setPetDoc(e.target.checked)}
            className="hidden"
          />
          <label
            htmlFor="petDocument"
            className={`cursor-pointer inline-block px-6 py-2 text-center rounded border-2 bg-[#AD9A5F] focus:outline-none focus:ring-2 focus:ring-[#008485] focus:border-[#008485]`}
            onClick={() => setShowModal(true)}
            style={{ outline: "none" }}
            tabIndex={0}
          >
            펫사랑 서약서 작성하기
          </label>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-auto">
                <h2 className="text-2xl font-bold mb-4">펫사랑 서약서</h2>
                <div className="mt-4">
                  <label className="block mb-2">반려동물 이름 작성하기</label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2">
                    반려동물 배상책임보험서비스 가입
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setInsurance("신청함")}
                      className={`p-2 border rounded ${
                        insurance === "신청함"
                          ? "bg-[#008485] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      신청함
                    </button>
                    <button
                      type="button"
                      onClick={() => setInsurance("신청안함")}
                      className={`p-2 border rounded ${
                        insurance === "신청안함"
                          ? "bg-[#008485] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      신청안함
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      setShowModal(false);
                      setPetDoc(false);
                    }}
                    className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="p-3 bg-[#008485] text-white font-hana2 rounded hover:bg-[#007373]"
          >
            확인
          </button>
          <button
            type="button"
            className="p-3 bg-gray-500 text-white font-hana2 rounded hover:bg-gray-600"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default DepositsJoin2;
