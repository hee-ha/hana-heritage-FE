import React, { useEffect, useState } from "react";
import { getContractDetail } from "../../../apis/inheritance/getContractDetail";

function Contract() {
  const [contractDetail, setContractDetail] = useState([]);

  const doGetContractDetail = async () => {
    try {
      const response = await getContractDetail();
      console.log(response);
      setContractDetail(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    doGetContractDetail();
  }, []);

  function formattedDate(date) {
    new Date(date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  // const deathNotifiers = [
  //   {
  //     name: "김말숙",
  //     phone: "010-2224-1235",
  //     address: "영등포구",
  //     birthdate: "1970-03-11",
  //     relationship: "자녀",
  //   },
  //   {
  //     name: "이름2",
  //     phone: "010-0000-0000",
  //     address: "주소2",
  //     birthdate: "1980-05-22",
  //     relationship: "친구",
  //   },
  // ];

  // const postBeneficiary = [
  //   {
  //     name: "김말숙",
  //     phone: "010-2224-1235",
  //     address: "영등포구",
  //     birthdate: "1970-03-11",
  //     relationship: "자녀",
  //   },
  //   {
  //     name: "이름2",
  //     phone: "010-0000-0000",
  //     address: "주소2",
  //     birthdate: "1980-05-22",
  //     relationship: "친구",
  //   },
  // ];

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
            {contractDetail.contractNumber}
          </p>
        </li>
        <li className="justify-between gap-x-6 py-5">
          <p className="my-5 font-hana2 text-3xl text-hanaBlack">
            계약시작일자
          </p>
          <p className="text-5xl mb-5 leading-snug">
            {formattedDate(contractDetail.trustContractStartDate)}
          </p>
        </li>
        <>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 text-3xl text-hanaBlack">
              계약종료일자
            </p>
            <p className="text-5xl mb-5 leading-snug">
              {formattedDate(contractDetail.trustContractEndDate)}{" "}
            </p>
          </li>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 text-3xl text-hanaBlack">위탁자</p>
            <p className="text-5xl mb-5 leading-snug">
              {contractDetail.settlor}
            </p>
          </li>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 text-3xl text-hanaBlack">수탁자</p>
            <p className="text-5xl mb-5 leading-snug">
              {contractDetail.trustee}
            </p>
          </li>
        </>
      </ul>

      {/* 사후수익자 정보 섹션 */}
      <div className="bg-gray-100 rounded-lg p-10 mt-10">
        <h3 className="font-hana2 font-semibold text-4xl text-hanaBlack">
          사후수익자 정보
        </h3>
      </div>
      {contractDetail.map((notifier, index) => (
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
            {notifier.phone}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">주소</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.address}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">생년월일</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.birthdate}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            위탁자와의 관계
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.relationship}
          </p>
        </div>
      ))}

      {/* 사망통지인 정보 섹션 */}
      <div className="bg-gray-100 rounded-lg p-10 mt-10">
        <h3 className="font-hana2 font-semibold text-4xl text-hanaBlack">
          사망통지인 정보
        </h3>
      </div>
      {contractDetail.map((notifier, index) => (
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
            {notifier.phone}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">주소</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.address}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">생년월일</p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.birthdate}
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            위탁자와의 관계
          </p>
          <p className="font-hana2 text-3xl text-hanaBlack mb-4">
            {notifier.relationship}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Contract;
