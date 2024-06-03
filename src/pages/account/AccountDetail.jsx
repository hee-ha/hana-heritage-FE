import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { getSavingAccountDetail } from "../../apis/account/getDepositsAccountDetail.js";
import { getDepositAccountDetail } from "../../apis/account/getDepositsAccountDetail.js";

function calculateMaturityDate(startDate, contractMonths) {
  const date = new Date(startDate);
  date.setMonth(date.getMonth() + contractMonths);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function SavingList() {
  const navigate = useNavigate();
  const location = useLocation();

  const accountId = location.state.accountId;
  const type = location.state.type;

  const navigateToPurchase = () => {
    navigate("/account");
  };

  const [accountDetail, setAccountDetail] = useState([]);

  const doGetSavingAccountDetail = async () => {
    try {
      const response = await getSavingAccountDetail(accountId);
      console.log(response);
      setAccountDetail(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const doGetDepositAccountDetail = async () => {
    try {
      const response = await getDepositAccountDetail(accountId);
      console.log(response);
      setAccountDetail(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    console.log(type);
    if (type === "saving") {
      doGetSavingAccountDetail();
    } else {
      doGetDepositAccountDetail();
    }
  }, [type, accountId]);

  const formattedDate = new Date(accountDetail.creatdAt).toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
  );

  const maturityDate =
    accountDetail.creatdAt && accountDetail.contractYears
      ? calculateMaturityDate(
          accountDetail.creatdAt,
          accountDetail.contractYears,
        )
      : "";

  return (
    <div className="px-24 font-noto text-3xl">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          선택하신 <span className="text-hanaGreen">계좌정보</span>{" "}
          안내드립니다.
        </h2>
        <hr />
      </header>
      <div className="bg-gray-100 rounded-lg p-10 mt-10 ">
        <div className="flex flex-row  font-hana2 font-semibold text-5xl items-center mb-10">
          <img
            className="finImg"
            src="https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_HANA_Profile.png"
          />
          <span className="text-hanaGreen ml-5 text-5xl">계좌번호</span> &nbsp;
          {accountDetail.accountNumber}
        </div>
        <ul role="list" class="divide-y divide-hanaSilver">
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-3xl text-hanaGreen">
              상품명
            </p>
            <p className="text-5xl mb-5 leading-snug">
              {accountDetail.finPrditNm}
            </p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">과목명</p>
            <p className="text-5xl mb-5 leading-snug">
              {accountDetail.type === "SAVING" ? "예금" : "적금"}
            </p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">잔액</p>
            <p className="text-5xl mb-5 leading-snug">
              {accountDetail.balance}원
            </p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">신규일자</p>
            <p className="text-5xl mb-5 leading-snug">{formattedDate}</p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaRed">만기일자</p>
            <p className="text-5xl mb-5 leading-snug ">{maturityDate}</p>
          </li>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">적립형태</p>
            <p className="text-5xl mb-5 leading-snug">
              {accountDetail.installmentMethod === "FIXED"
                ? "정액적립식"
                : "자유적립식"}
            </p>
          </li>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaRed">
              적용이율(연)
            </p>
            <p className="text-5xl mb-5 leading-snug">
              {accountDetail.interestRate}%
            </p>
          </li>
        </ul>
      </div>
      <button
        type="submit"
        onClick={navigateToPurchase}
        className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-8 transition-transform transform hover:animate-bubbly rounded-lg"
      >
        닫기
      </button>
    </div>
  );
}

export default SavingList;
