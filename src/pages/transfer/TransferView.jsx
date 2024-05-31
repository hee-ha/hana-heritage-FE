import React from "react";
import { Link, useLocation } from "react-router-dom";

function TransferView() {
  return (
    <div className="px-24">
      <header className="sectionHead">
        <h2 className="font-hana2 font-semibold text-6xl z-10">
          작성하신 이체 정보입니다.
        </h2>
        <hr />
      </header>
      <main className="flex flex-col items-center flex-grow p-4">
        <div className="text-5xl font-noto font-semibold mb-10">
          <span className="text-hanaGreen">국민은행</span>{" "}
          <span className="text-hanaGreen">김하나</span>
          님께 <sapn className="text-hanaGreen">1</sapn>원을 이체합니다.
        </div>
        <div className="bg-white font-noto text-3xl rounded-lg shadow-lg p-6 mt-6 w-full">
          <div className="space-y-8">
            <div className="flex justify-between">
              <span className="font-hana2 text-gray-400 text-4xl">
                입금계좌
              </span>
              <span>
                국민은행 <span> 93800200281364</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-hana2 text-gray-400 text-4xl">
                출금계좌
              </span>
              <span>Young하나통장 113-910374-06707</span>
            </div>
            <div className="flex justify-between">
              <span className="font-hana2 text-gray-400 text-4xl">수수료</span>
              <span>면제</span>
            </div>
            <div className="flex justify-between">
              <span className="font-hana2 text-gray-400 text-4xl">
                받는분에게 표기
              </span>
              <span>변정흠</span>
            </div>
            <div className="flex justify-between">
              <span className="font-hana2 text-4xl text-gray-400">
                나에게 표기
              </span>
              <span>변정흠</span>
            </div>
          </div>
        </div>
        <button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
          김하나님께 이체
        </button>
      </main>
    </div>
  );
}

export default TransferView;
