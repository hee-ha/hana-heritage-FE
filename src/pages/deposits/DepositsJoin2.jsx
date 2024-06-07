import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getMyAccount } from "../../apis/transfer/TransferHistory";

function DepositsJoin2() {
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [subscriptionPeriod, setSubscriptionPeriod] = useState("1년");
  const [depositMethod, setDepositMethod] = useState("정액적립식");
  const [autoTransfer, setAutoTransfer] = useState(false);
  const [autoTransferAccount, setAutoTransferAccount] = useState("");
  const [autoTransferPassword, setAutoTransferPassword] = useState("");
  const [autoTransferAmount, setAutoTransferAmount] = useState("");
  const [autoTransferStartDate, setAutoTransferStartDate] = useState("");
  const [expiryHandling, setExpiryHandling] = useState("만기시 자동해지");
  const [autoTermination, setAutoTermination] = useState("만기일");
  const [smsNotification, setSmsNotification] = useState(null);

  const [dropdownVisibility1, setDropdownVisibility1] = useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = useState(false);
  const [selectedItem, setSelectedItem] = useState("계좌를 선택해주세요");
  const [selectedTransfer, setSelectedTransfer] =
    useState("계좌를 선택해주세요");
  const [myAccounts, setMyAccounts] = useState([]);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setAccountNumber(item.accountNumber);
    setDropdownVisibility1(false);
  };
  const handleTransferClick = (item) => {
    setSelectedTransfer(item);
    setAutoTransferAccount(item.accountNumber);
    setDropdownVisibility2(false);
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

  useEffect(() => {}, []);

  const location = useLocation();
  const productDetail = location.state?.product || {};

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
      accountId: selectedItem.id,
      accountNumber,
      password,
      newAmount,
      subscriptionPeriod,
      depositMethod,

      autoTransfer: {
        toAccountNumber: autoTransferAccount,
        id: selectedTransfer.id,
        amount: autoTransferAmount,
        password: autoTransferPassword,
        startDate: autoTransferStartDate,
      },

      expiryHandling,
      autoTermination,
      smsNotification,
    };

    navigate("/deposits/join/3", {
      state: { formData: formData, productDetail: productDetail },
    });
  };

  const addAmount = (amount, setAmount) => {
    setAmount((prevAmount) => {
      const newAmount = Number(prevAmount) + Number(amount);
      return newAmount;
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

  const handleAutoTransferButton = () => {
    if (productDetail.type === "예금") {
      alert("예금가입은 자동이체가 불가능 합니다.");
      setAutoTransfer(false);
      return;
    }
    setAutoTransfer(true);
    return;
  };

  console.log(selectedItem);
  return (
    <div className="mx-auto px-24 rounded-lg border-2 border-gray-300 p-4">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          선택하신{" "}
          <span className="text-hanaGreen">{productDetail.finPrdtNm}</span> 가입
          중입니다.
        </h2>
        <hr />
      </header>

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

      <form className="rounded-lg">
        <div className="space-y-10 mb-10 rounded-lg overflow-hidden">
          <div className="bg-hanaGold text-white p-5 text-5xl rounded-t-lg font-hana2">
            기본정보
          </div>
          <div className="mb-2">
            <button
              onClick={() => setDropdownVisibility1(!dropdownVisibility1)}
              className="flex justify-between items-center w-full px-6 py-6 border-hanaGreen border rounded-md font-hana2 font-semibold text-5xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-hanaGreen"
            >
              <span>
                {selectedItem.name ? selectedItem.name : "계좌를 선택해 주세요"}
              </span>
            </button>
            <div
              className={`${dropdownVisibility1 ? "block" : "hidden"} mt-2 border border-hanaGreen border-opacity-30 rounded-md bg-white shadow-lg font-hana2 font-semibold text-4xl`}
            >
              <ul>
                {myAccounts.map((account) => (
                  <li
                    key={account?.id}
                    className="px-6 py-4 hover:bg-hanaGreen hover:bg-opacity-30 cursor-pointer"
                    onClick={() => handleItemClick(account)}
                  >
                    {account.name ? account.name : "계좌를 선택해 주세요"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>출금계좌번호</label>
            <input
              type="text"
              value={selectedItem.accountNumber}
              className="w-full p-5 border rounded mt-2"
            />
          </div>
          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>계좌 비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-5 border rounded mt-2"
            />
          </div>
        </div>

        <div className="space-y-10 mb-6 rounded-lg overflow-hidden">
          <div className="bg-hanaGold text-white p-5 text-5xl rounded-t-lg font-hana2">
            상품정보
          </div>
          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label className="text-4xl">신규금액</label>
            <div className="grid w-full gap-6 grid-cols-2">
              <div className="relative ">
                <input
                  type="text"
                  value={newAmount.toLocaleString()}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="w-full p-5 border rounded text-right pr-16"
                  placeholder="10만원 이상~50만원 이하"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  원
                </span>
              </div>
              <div className="grid w-full gap-6 grid-cols-3">
                <button
                  type="button"
                  onClick={() => addAmount(100000, setNewAmount)}
                  className="p-2 border rounded bg-hanaGreen text-white C"
                >
                  +10만원
                </button>
                <button
                  type="button"
                  onClick={() => addAmount(50000, setNewAmount)}
                  className="p-2 border rounded bg-hanaGreen text-white right"
                >
                  +5만원
                </button>

                <button
                  type="button"
                  onClick={() => setNewAmount("")}
                  className="p-2 border rounded bg-hanaGreen text-white right"
                >
                  지우기
                </button>
              </div>
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
                    value={subscriptionPeriod}
                    className="hidden peer"
                    onChange={(e) => setSubscriptionPeriod(1)}
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
                    value={subscriptionPeriod}
                    className="hidden peer"
                    onChange={(e) => setSubscriptionPeriod(2)}
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
                    value={subscriptionPeriod}
                    className="hidden peer"
                    onChange={(e) => setSubscriptionPeriod(3)}
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
                    value={depositMethod}
                    className="hidden peer"
                    onChange={(e) => setDepositMethod("정액적립식")}
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
                    value={depositMethod}
                    className="hidden peer"
                    onChange={(e) => setDepositMethod("자유적립식")}
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
            </div>
          </div>

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
                    onChange={() => handleAutoTransferButton()}
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
              <div className="mb-2">
                <button
                  onClick={() => setDropdownVisibility2(!dropdownVisibility2)}
                  className="flex justify-between items-center w-full px-6 py-6 border-hanaGreen border rounded-md font-hana2 font-semibold text-5xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-hanaGreen"
                >
                  <span>
                    {selectedTransfer.name
                      ? selectedTransfer.name
                      : "계좌를 선택해 주세요"}
                  </span>
                </button>
                <div
                  className={`${dropdownVisibility2 ? "block" : "hidden"} mt-2 border border-hanaGreen border-opacity-30 rounded-md bg-white shadow-lg font-hana2 font-semibold text-4xl`}
                >
                  <ul>
                    {myAccounts.map((account) => (
                      <li
                        key={account?.id}
                        className="px-6 py-4 hover:bg-hanaGreen hover:bg-opacity-30 cursor-pointer"
                        onClick={() => handleTransferClick(account)}
                      >
                        {account.name ? account.name : "계좌를 선택해 주세요"}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>{" "}
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
                  // onChange={(e) => setAutoTransferPassword(e.target.value)}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 금액</label>
                <div className="grid w-full gap-6 grid-cols-2">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={autoTransferAmount.toLocaleString()}
                      onChange={(e) => setAutoTransferAmount(e.target.value)}
                      className="w-full p-2 border rounded text-right pr-16"
                      placeholder="10만원 이상~50만원 이하"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      원
                    </span>
                  </div>
                  <div class="grid w-full gap-6 grid-cols-3">
                    <button
                      type="button"
                      onClick={() => addAmount(100000, setAutoTransferAmount)}
                      className="p-2 border rounded bg-hanaGreen text-white"
                    >
                      +10만원
                    </button>
                    <button
                      type="button"
                      onClick={() => addAmount(50000, setAutoTransferAmount)}
                      className="p-2 border rounded bg-hanaGreen text-white"
                    >
                      +5만원
                    </button>

                    <button
                      type="button"
                      onClick={() => setAutoTransferAmount("")}
                      className="p-2 border rounded bg-hanaGreen text-white"
                    >
                      지우기
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 시작일</label>
                <input
                  type="date"
                  value={autoTransferStartDate}
                  onChange={(e) => setAutoTransferStartDate(e.target.value)} //자동이체 테이블에 저장?
                  className="w-full p-2 border rounded mt-2"
                />
              </div>
              <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
                <label>자동이체 간격</label>
                <div className="flex space-x-4 mt-2 text-hanaGreen">
                  <p>1 개월</p>
                </div>
              </div>
            </div>
          )}

          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>만기해지구분</label>
            <div className="flex space-x-4 mt-2">
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small6"
                    name="hosting6"
                    value={expiryHandling}
                    className="hidden peer"
                    onChange={(e) => setExpiryHandling("직접 해지")}
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
                    value={expiryHandling}
                    className="hidden peer"
                    onChange={(e) => setExpiryHandling("만기 시 자동해지")}
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
                    value={autoTermination}
                    className="hidden peer"
                    onChange={(e) => setAutoTermination("만기일")}
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
                    value={autoTermination}
                    className="hidden peer"
                    onChange={(e) => setAutoTermination("이연만기일")}
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

          <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
            <label>예/적금 만기 SMS 통보</label>
            <div className="flex space-x-4 mt-2">
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small7"
                    name="hosting7"
                    value={smsNotification}
                    className="hidden peer"
                    onChange={(e) => setSmsNotification(true)}
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
                    value={smsNotification}
                    className="hidden peer"
                    onChange={(e) => setSmsNotification(false)}
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

        <div className="flex justify-between">
          <Link onClick={handleSubmit} className="flex-grow">
            <button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
              다음
            </button>
          </Link>
          <Link to={"/deposits"} className="flex-grow ml-4">
            <button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
              취소
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default DepositsJoin2;
