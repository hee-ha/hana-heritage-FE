import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

function AccountCreation4() {
  const navigate = useNavigate();
  const location = useLocation();
  const accountNumber = location.state.accountNumber;

  const accountNumberFormatter = (accountNumber) => {
    let number = accountNumber.toString();

    // 첫 번째 그룹: 첫 3자리
    let part1 = number.substring(0, 3);

    // 두 번째 그룹: 다음 2자리
    let part2 = number.substring(3, 5);

    // 세 번째 그룹: 나머지 모든 자리
    let part3 = number.substring(5);

    // 포매팅된 문자열 조합
    let formatted = `${part1}-${part2}-${part3}`;

    return formatted;
  };

  return (
    <div className="px-24 font-noto text-3xl">
      <header className="my-10">
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          <span className="text-hanaGreen">계좌 개설</span>을 완료했습니다!
        </h2>
        <hr />
      </header>

      {/* Stepper */}
      <ol className="my-10 flex items-center w-full p-4 space-x-4 text-sm font-medium text-center bg-white border border-hanaSilver rounded-lg shadow-sm sm:text-base  rtl:space-x-reverse">
        <li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
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
        <li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
            4
          </span>
          개설완료
        </li>
      </ol>

      <div className="my-20 flex flex-col items-center justify-center">
        <img src="/png/wallet.png" width="200px" />
        <h1 className="mt-5 text-hanaGreen font-hana2 font-semibold text-4xl z-10">
          계좌 개설이 성공적으로 처리되었습니다.
        </h1>
        <p className="leading-snug my-5 font-noto text-3xl">
          생성된 계좌번호는{" "}
          <span className="font-bold">
            {accountNumberFormatter(accountNumber)}
          </span>
          입니다.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-16 text-white font-hana2 font-semibold text-3xl bg-hanaRed py-3 px-8 z-10 transition-transform transform hover:animate-bubbly rounded-lg"
        >
          홈으로 가기
        </button>
      </div>
    </div>
  );
}

export default AccountCreation4;
