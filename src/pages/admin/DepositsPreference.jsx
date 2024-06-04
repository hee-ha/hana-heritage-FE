import React from "react";
import { Card } from "flowbite-react";
import CardWithButton from "../../components/common/Card/CardWithButton";
import LineChart from "../../components/common/Chart/LineChart";

const DepositsPreference = () => {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            예적금 상품 선호도
          </span>{" "}
          통계입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          6월 1주차 예적금 상품 선호도를 분석한 내용입니다. 확인해보세요! 👀
        </p>
      </div>
      <div className="w-full space-y-6">
        <div class="grid sm:grid-cols-2 gap-6 md:grid-cols-3">
          <CardWithButton
            rank="1"
            count="216"
            title="3·6·9 정기예금"
            buttonText="상세페이지로 가기"
            buttonLink="/admin"
          />
          <CardWithButton
            rank="2"
            count="172"
            title="하나 청년도약계좌"
            buttonText="상세페이지로 가기"
            buttonLink="/admin"
          />
          <CardWithButton
            rank="3"
            count="113"
            title="행복knowhow 연금예금"
            buttonText="상세페이지로 가기"
            buttonLink="/admin"
          />
        </div>
      </div>
      <div className="h-80">
        <LineChart />
      </div>
    </div>
  );
};

export default DepositsPreference;
