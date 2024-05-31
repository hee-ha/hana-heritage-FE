import React from "react";
import { Link } from "react-router-dom";

function DepositsJoin4() {
  return (
    <div className="mx-auto px-24">
      <ol className="my-10 flex justify-center w-full p-4 space-x-4 text-sm font-medium text-center bg-white shadow-sm sm:text-base  rtl:space-x-reverse">
        <h1 className="text-6xl font-hana2 text-hanaGreen">
          가입이 완료되었습니다!
        </h1>
      </ol>
      <div className="flex justify-between">
        <Link to="/deposits" className="flex-grow ml-4">
          <button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            예적금 목록
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DepositsJoin4;
