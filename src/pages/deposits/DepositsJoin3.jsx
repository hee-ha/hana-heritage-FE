import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function DepositsJoin3() {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    navigate("/deposits/join/4", { state: { formData } });
  };
  return (
    <div className="mx-auto px-24 rounded-lg border-2 border-gray-300 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        예금상품 가입 정보확인
      </h1>
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
        <li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
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
        <li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
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

      <div className="mb-6 rounded-lg overflow-hidden">
        <div className="bg-[#AD9A5F] p-4 text-4xl h-16 rounded-t-lg font-hana2">
          기본정보
        </div>
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>출금계좌번호: {formData.accountNumber}</label>
        </div>
      </div>

      <div className="mb-6 rounded-lg overflow-hidden">
        <div className="bg-[#AD9A5F] p-4 text-4xl h-16 rounded-t-lg font-hana2">
          상품정보
        </div>
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>신규금액: {formData.newAmount} 원</label>
        </div>
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>가입기간: {formData.subscriptionPeriod}</label>
        </div>
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>적립방법: {formData.depositMethod}</label>
        </div>
        {formData.autoTransfer && (
          <>
            <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
              <label>자동이체 신청: 신청함</label>
            </div>
            <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
              <label>
                자동이체 출금계좌번호: {formData.autoTransferAccount}
              </label>
            </div>
            <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
              <label>자동이체 금액: {formData.autoTransferAmount} 원</label>
            </div>
            <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
              <label>자동이체 시작일: {formData.autoTransferStartDate}</label>
            </div>
            <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
              <label>자동이체 지정일: {formData.autoTransferDay}</label>
            </div>
            <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
              <label>자동이체 간격: {formData.autoTransferInterval}</label>
            </div>
          </>
        )}
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>만기해지구분: {formData.expiryHandling}</label>
        </div>
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>자동해지시점: {formData.autoTermination}</label>
        </div>
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>예/적금 만기 SMS 통보: {formData.smsNotification}</label>
        </div>
        {/* {formData.petDoc && (
          <>
            <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
              <label>반려동물 이름: {formData.petName}</label>
            </div>
            <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
              <label>
                반려동물 배상책임보험서비스 가입: {formData.insurance}
              </label>
            </div>
          </>
        )} */}
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>반려동물 이름: {formData.petName}</label>
        </div>
        <div className="p-4 border-b border-gray-300 text-4xl font-hana2">
          <label>반려동물 배상책임보험서비스 가입: {formData.insurance}</label>
        </div>
      </div>
      {/* <form className="flex justify-center" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="p-3 bg-[#008485] text-white font-hana2 rounded hover:bg-[#007373]"
        >
          확인
        </button>
      </form> */}
      <div className="flex justify-between">
        <Link to={"/deposits/join/4"} className="flex-grow">
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
    </div>
  );
}

export default DepositsJoin3;
