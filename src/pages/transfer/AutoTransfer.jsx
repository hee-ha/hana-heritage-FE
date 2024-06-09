import React, { useEffect, useState } from "react";
import BankButtons from "./component/Bankbtn";
import TransferAmount from "./component/TransferAmount";
import { Link, useNavigate } from "react-router-dom";
import { getMyAccount } from "../../apis/account/getMyAccount";

function AutoTransfer() {
  const [formData, setFormData] = useState({
    amount: "",
    recipientBank: "",
    toAccountNumber: "",
    recipientRemarks: "",
    senderRemarks: "",
    autoTransferDay: "",
    startDate: "",
    endDate: "",
    password: "",
    accountId: "",
  });
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    doAccounts();
  }, []);

  const doAccounts = async () => {
    try {
      const res = await getMyAccount();
      setAccounts(res.result);
      if (res.result.length > 0) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          accountId: res.result[0].id,
        }));
        setSelectedAccountNumber(res.result[0].accountNumber);
        setFirstAccountName(res.result[0].name);
        setFirstAccountValue(
          res.result[0].balance
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        );
      }
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const [firstAccountName, setFirstAccountName] = useState("No name available");
  const [firstAccountValue, setFirstAccountValue] = useState(
    "No balance available",
  );
  const [selectedAccountNumber, setSelectedAccountNumber] = useState("");

  const accountChange = (e) => {
    const selectedAccountId = e.target.value;
    setFormData({ ...formData, [e.target.name]: selectedAccountId });
    console.log(selectedAccountId);
    // 선택한 계좌의 정보 가져오기
    const selectedAccount = accounts.find(
      (account) => account.id == selectedAccountId,
    );
    console.log(selectedAccount);
    if (selectedAccount) {
      setFirstAccountName(selectedAccount.name);
      setFirstAccountValue(
        selectedAccount.balance
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      ); // 또는 적절한 계좌 정보로 업데이트
      setSelectedAccountNumber(selectedAccount.accountNumber);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleFormdata = () => {
    navigate("/transfer/confirm", {
      state: { formData, type: "auto", selectedAccount: selectedAccountNumber },
    });
  };

  return (
    <div className="px-24">
      <header className="sectionHead">
        <h2 className="font-hana2 font-semibold text-6xl z-10">
          <span className="text-hanaGreen">자동이체</span>를 등록합니다.
        </h2>
        <hr />
      </header>
      <div className="form-group mt-6 mb-6">
        <label
          htmlFor="fromAccount"
          className="font-hana2 font-semibold text-5xl block mb-12"
        >
          어디서 보낼까요?
        </label>
        <div className="font-hana2 text-4xl">
          <h4 className="mb-6">
            <img
              className="finImg"
              src="https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_HANA_Profile.png"
            />
            {firstAccountName}
          </h4>
        </div>
        <select
          id="accountId"
          name="accountId"
          value={formData.accountId}
          onChange={accountChange}
          className="w-full border border-gray-300 text-3xl rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        >
          {accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.accountNumber}
            </option>
          ))}
        </select>
        <div className="balance font-hana2 mt-4">
          <span className="text-3xl mr-4">통장 잔액 </span>
          <span className="text-3xl"> {firstAccountValue}원</span>
        </div>
      </div>
      <div className="form-group mb-6">
        <label
          htmlFor="password"
          className="font-hana2 font-semibold text-5xl block mb-12"
        >
          출금 계좌 비밀번호를 입력하세요
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="계좌 비밀번호 4자리 입력"
          className="w-full font-noto text-3xl border border-gray-300 rounded-md mb-6"
        />
      </div>
      <div className="form-group mb-6">
        <label
          htmlFor="toAccount"
          className="font-hana2 font-semibold text-5xl block mb-12"
        >
          누구에게 보낼까요?
        </label>
        <input
          type="text"
          name="toAccountNumber"
          value={formData.toAccountNumber}
          onChange={handleChange}
          placeholder="은행/계좌번호 입력"
          className="w-full font-noto text-3xl border border-gray-300 rounded-md mb-6"
        />

        <BankButtons handleChange={handleChange} />
      </div>
      <div className="form-group mb-6">
        <label className="font-hana2 font-semibold text-5xl block mb-12">
          얼마를 보낼까요?
        </label>
        <TransferAmount
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="font-hana2 font-semibold text-5xl block mb-12">
          언제부터 언제까지 보낼까요?
        </label>
        <div className="p-5">
          <div className="font-noto text-3xl flex items-center mb-8">
            <div className="p-4 bg-hanaGreen rounded-md text-white">
              <span className="font-hana2 text-4xl font-semibold  mx-2">
                자동이체 시작일
              </span>
            </div>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md ml-16"
            />
          </div>
          <div className="font-noto text-3xl flex items-center mb-8">
            <div className="p-4 bg-hanaGreen rounded-md text-white">
              <span className="font-hana2 text-4xl font-semibold mx-2">
                자동이체 종료일
              </span>
            </div>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md ml-16"
            />
          </div>
          <div className="font-noto text-3xl flex items-center">
            <div className="w-96 text-center p-4 bg-hanaGreen rounded-md text-white">
              <span className="font-hana2 text-4xl font-semibold mx-2">
                매&nbsp;&nbsp;&nbsp;&nbsp;달
              </span>
            </div>
            <select
              name="autoTransferDay"
              value={formData.autoTransferDay}
              onChange={handleChange}
              className="ml-16 w-full p-3 border font-noto rounded-lg text-3xl"
            >
              {[...Array(31)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}일
                </option>
              ))}
            </select>
          </div>
          <div></div>
        </div>
      </div>
      <div className="form-group memo mb-6">
        <label className="font-hana2 font-semibold text-5xl block mb-12">
          통장에 표기할 내용 입력하기
        </label>
        <input
          type="text"
          name="recipientRemarks"
          value={formData.recipientRemarks}
          onChange={handleChange}
          placeholder="받는 분에게 표기"
          className="w-full text-3xl font-noto border border-gray-300 rounded-md mb-2"
        />
        <input
          type="text"
          name="senderRemarks"
          value={formData.senderRemarks}
          onChange={handleChange}
          placeholder="나에게 표기"
          className="w-full text-3xl font-noto border border-gray-300 rounded-md mb-2"
        />
      </div>
      <button
        onClick={handleFormdata}
        className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
      >
        다음
      </button>
    </div>
  );
}

export default AutoTransfer;
