import React, { useEffect, useState } from "react";
import BankButtons from "./component/Bankbtn";
import TransferAmount from "./component/TransferAmount";
import { Link } from "react-router-dom";
import axios from "axios";

function SimpleTransfer() {
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
    memo: "",
  });

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    let url = "http://localhost/api/v1/transfer/get";
    console.log(url);

    axios
      .post(url, {
        id: 1,
      })
      .then((res) => {
        console.log("받아온 데이터: ", res.data.result);
        setAccounts(res.data.result);
      })
      .catch((error) => {
        console.log("에러: ", error);
      });
  }, []); // id를 의존성 배열에 추가

  // const accounts = [
  //   {
  //     id: 1,
  //     name: "Young 하나통장",
  //     number: "하나 111-111111-111111",
  //     balance: "1원",
  //   },
  //   {
  //     id: 2,
  //     name: "Savings Account",
  //     number: "국민 222-222222-222222",
  //     balance: "500,000원",
  //   },
  //   {
  //     id: 3,
  //     name: "Business Account",
  //     number: "신한 333-333333-333333",
  //     balance: "1,000,000원",
  //   },
  // ];
  const firstAccountName =
    accounts.length > 0 ? accounts[0].name : "No name available";
  const firstAccountValue =
    accounts.length > 0
      ? accounts[0].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "No balance available";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-24">
      <header className="sectionHead">
        <h2 className="font-hana2 font-semibold text-6xl z-10">
          <span className="text-hanaGreen">계좌이체</span>를 진행합니다.
        </h2>
        <hr />
      </header>
      <div>
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
            id="fromAccount"
            name="fromAccount"
            value={formData.fromAccount}
            onChange={handleChange}
            className="w-full border border-gray-300 text-3xl rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          >
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.account_number}
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
            htmlFor="toAccount"
            className="font-hana2 font-semibold text-5xl block mb-12"
          >
            누구에게 보낼까요?
          </label>
          <input
            type="text"
            name="toAccount"
            value={formData.toAccount}
            onChange={handleChange}
            placeholder="은행/계좌번호 입력"
            className="w-full font-noto text-3xl border border-gray-300 rounded-md mb-6"
          />
          <BankButtons />
        </div>

        <div className="form-group mb-6">
          <label
            htmlFor="amount"
            className="font-hana2 font-semibold text-5xl block mb-12"
          >
            얼마를 보낼까요?
          </label>
          <TransferAmount
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        </div>

        <div className="form-group memo mb-6">
          <label className="font-hana2 font-semibold text-5xl block mb-12">
            통장에 표기할 내용 입력하기
          </label>
          <input
            type="text"
            name="memoToRecipient"
            value={formData.memoToRecipient}
            onChange={handleChange}
            placeholder="받는 분에게 표기"
            className="w-full text-3xl font-noto border border-gray-300 rounded-md mb-2"
          />
          <input
            type="text"
            name="memoToSelf"
            value={formData.memoToSelf}
            onChange={handleChange}
            placeholder="나에게 표기"
            className="w-full text-3xl font-noto border border-gray-300 rounded-md mb-2"
          />
          <input
            type="text"
            name="memo"
            value={formData.memo}
            onChange={handleChange}
            placeholder="메모"
            className="w-full text-3xl font-noto border border-gray-300 rounded-md"
          />
        </div>
        <Link to={{ pathname: "/transfer/confirm", state: { data: formData } }}>
          <button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            다음
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SimpleTransfer;
