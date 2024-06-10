import React, { useEffect, useState } from "react";
import { getContractDetail } from "../../../apis/inheritance/getContractDetail";

function Contract() {
  const [contractDetail, setContractDetail] = useState([]);
  const [postBeneficiary, setPostBeneficiary] = useState([]);
  const [deathNotifiers, setDeathNotifiers] = useState([]);

  const doGetContractDetail = async () => {
    try {
      const response = await getContractDetail();
      console.log(response);
      setContractDetail(response.result);
      setPostBeneficiary(response.result.postBeneficiary);
      setDeathNotifiers(response.result.deathNotifiers);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    doGetContractDetail();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="px-24 font-noto text-3xl">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          보유하신 <span className="text-hanaGreen">계약정보</span>{" "}
          안내드립니다.
        </h2>
        <hr />
      </header>

      {/* 일반계약 정보 섹션 */}
      <div className="bg-gray-100 rounded-lg p-10 mt-10">
        <h1 className="font-hana2 font-semibold text-hanaGreen text-4xl">
          일반계약 정보
        </h1>
      </div>
      <ul role="list" className="divide-y divide-hanaSilver">
        <li className="justify-between gap-x-6 py-5">
          <p className="my-5 font-hana2 text-3xl text-hanaBlack">계약번호</p>
          <p className="text-5xl mb-5 leading-snug">
            {contractDetail?.contractNumber}
          </p>
        </li>
        <li className="justify-between gap-x-6 py-5">
          <p className="my-5 font-hana2 text-3xl text-hanaBlack">
            계약시작일자
          </p>
          <p className="text-5xl mb-5 leading-snug">
            {formatDate(contractDetail?.trustContractStartDate)}
          </p>
        </li>
        <>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 text-3xl text-hanaBlack">
              계약종료일자
            </p>
            <p className="text-5xl mb-5 leading-snug">
              {formatDate(contractDetail?.trustContractEndDate)}{" "}
            </p>
          </li>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 text-3xl text-hanaBlack">위탁자</p>
            <p className="text-5xl mb-5 leading-snug">
              {contractDetail?.settlor}
            </p>
          </li>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 text-3xl text-hanaBlack">수탁자</p>
            <p className="text-5xl mb-5 leading-snug">
              {contractDetail?.trustee}
            </p>
          </li>
        </>
      </ul>

      {/* 사후수익자 정보 섹션 */}
      <div className="bg-gray-100 rounded-lg p-10 mt-10">
        <h3 className="font-hana2 font-semibold text-4xl text-hanaGreen">
          사후수익자 정보
        </h3>
      </div>
      {postBeneficiary.map((notifier, index) => (
        <div
          key={index}
          className="grid grid-cols-2 py-7  border-b border-hanaSilver"
        >
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">이름</p>
          <p className="font-hana2 text-3xl text-hanaBlack  mb-4">
            {notifier.name}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">연락처</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.phoneNumber}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">주소</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.address}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">생년월일</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {formatDate(notifier.birthdate)}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            위탁자와의 관계
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.relation}
          </p>
        </div>
      ))}

      {/* 사망통지인 정보 섹션 */}
      <div className="bg-gray-100 rounded-lg p-10 mt-10">
        <h3 className="font-hana2 font-semibold text-4xl text-hanaGreen">
          사망통지인 정보
        </h3>
      </div>
      {deathNotifiers.map((notifier, index) => (
        <div
          key={index}
          className="grid grid-cols-2 py-7  border-b border-hanaSilver"
        >
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">이름</p>
          <p className="font-hana2 text-3xl text-hanaBlack  mb-4">
            {notifier.name}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">연락처</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.phoneNumber}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">주소</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.address}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">생년월일</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {formatDate(notifier.birthdate)}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            위탁자와의 관계
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.relation}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Contract;
