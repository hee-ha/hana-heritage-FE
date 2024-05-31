import React from "react";

function SavingList() {
  const savingAccount = [
    {
      id: 1,
      withdrawalAcoount: 1,
      customerId: 1,
      firstDeposit: 300000,
      installmentMethod: 1,
      contractPeriod: 2,
      autoTransferApply: 0,
      autoRedeposit: 1,
      maturityClassification: 1,
      autoCancellationPoint: 2,
      MaturityNotice: 1,
    },
  ];

  const account = savingAccount[0];

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
          111-1244-12432
        </div>
        <ul role="list" class="divide-y divide-hanaSilver">
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-3xl text-hanaGreen">
              상품명
            </p>
            <p className="text-5xl mb-5 leading-snug">펫적금</p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">과목명</p>
            <p className="text-5xl mb-5 leading-snug">정기적금</p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">잔액</p>
            <p className="text-5xl mb-5 leading-snug">300,000원</p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">신규일자</p>
            <p className="text-5xl mb-5 leading-snug">2024-05-27</p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaRed">만기일자</p>
            <p className="text-5xl mb-5 leading-snug ">2025-05-27</p>
          </li>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">적립형태</p>
            <p className="text-5xl mb-5 leading-snug">
              {account.installmentMethod === 1 ? "정액적립식" : "기타"}
            </p>
          </li>
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaRed">
              적용이율(연)
            </p>
            <p className="text-5xl mb-5 leading-snug">2.80%</p>
          </li>
        </ul>
      </div>
      <button
        type="submit"
        className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-8 transition-transform transform hover:animate-bubbly rounded-lg"
      >
        닫기
      </button>
    </div>
  );
}

export default SavingList;
