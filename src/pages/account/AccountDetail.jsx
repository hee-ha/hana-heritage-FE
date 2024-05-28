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
    <div className="px-24">
      <div className="flex flex-col mt-20 font-hana2 font-semibold text-6xl">
        계좌정보보기
      </div>
      <hr className="mt-12 mb-12"></hr>
      <div className="flex flex-row mt-12 font-hana2 font-semibold text-5xl items-center ">
        <img
          className="finImg"
          src="https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_HANA_Profile.png"
        />
        <span className="text-hanaGreen ml-5">계좌번호</span> &nbsp;
        111-1244-12432
      </div>
      <div className="flex flex-row mt-12 font-hana2 font-semibold text-5xl">
        <span className="text-hanaGreen ">상품명</span> &nbsp; 펫적금
      </div>
      <div className="flex flex-row mt-12 font-hana2 font-semibold text-5xl">
        <span className="text-hanaGreen">과목명</span> &nbsp; 정기적금
      </div>
      <div className="flex flex-row mt-12 font-hana2 font-semibold text-5xl">
        <span className="text-hanaGreen">잔액</span> &nbsp; 300,000원
      </div>
      <div className="flex flex-row mt-12 font-hana2 font-semibold text-5xl">
        <span className="text-hanaGreen">신규일자</span> &nbsp; 2024-05-27
        <span className="text-hanaRed  ml-16">만기일자</span> &nbsp; 2025-05-27
      </div>
      <div className="flex flex-row mt-12 font-hana2 font-semibold text-5xl">
        <span className="text-hanaGreen">적립형태</span> &nbsp;{" "}
        {account.installmentMethod === 1 ? "정액적립식" : "기타"}
      </div>
      <div className="flex flex-row mt-12 font-hana2 font-semibold text-5xl">
        <span className="text-hanaRed">적용이율(연)</span> &nbsp; 2.80%
      </div>
      <button
        type="submit"
        className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-14 transition-transform transform hover:animate-bubbly rounded-lg"
      >
        닫기
      </button>
    </div>
  );
}

export default SavingList;
