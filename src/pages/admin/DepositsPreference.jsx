import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import CardWithButton from "../../components/common/Card/CardWithButton";
import LineChart from "../../components/common/Chart/LineChart";
import { getPreference } from "../../apis/admin/getPreference";

const DepositsPreference = () => {
  const [topThree, setTopThree] = useState([]);

  const getTop3 = async () => {
    try {
      const response = await getPreference();
      setTopThree(response.result);
      console.log("상품 선호도가 업데이트 되었습니다.");
      console.log(response.result);
    } catch (error) {
      console.error("Failed to fetch my accounts:", error);
    }
  };

  useEffect(() => {
    getTop3();
    const intervalId = setInterval(getTop3, 3000);

    return () => clearInterval(intervalId);
  }, []);
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
            count={topThree[1]?.viewCount}
            title={topThree[1]?.productName}
            buttonText="상세페이지로 가기"
            buttonLink="/admin"
          />
          <CardWithButton
            rank="2"
            count={topThree[2] ? topThree[2].viewCount : 1}
            title={topThree[2] ? topThree[2].productName : "하나예금"}
            buttonText="상세페이지로 가기"
            buttonLink="/admin"
          />
          <CardWithButton
            rank="3"
            count={topThree[3] ? topThree[3].viewCount : 1}
            title={topThree[3] ? topThree[3].productName : "하나적금"}
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
