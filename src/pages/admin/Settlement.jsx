import React, { useEffect, useState } from "react";
import BarChart from "../../components/common/Chart/BarChart";
import CountingCard from "../../components/common/Card/CountingCard";
import { calculateSettlement } from "../../apis/admin/calculateSettlement";


const Settlement = () => {
  const [settlementDetail, setSettlementDetail] = useState([]);

  const doCalculateSettlement = async () => {
    try {
      const response = await calculateSettlement();
      console.log(response);
      setSettlementDetail(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const totalAmount =
    settlementDetail.depositTotalCount +
    settlementDetail.withdrawalTotalCount;

  useEffect(() => {
    doCalculateSettlement();
  }, []);


  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          저번 주의{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            입출금 정산
          </span>{" "}
          현황입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          6월 1주차에 하나은행에서 발생한 입금과 출금의 정산 결과를
          확인해보세요! 🙌
        </p>
      </div>
      <div className="w-full grid grid-cols-6  gap-6">
        <div className="col-span-4">
          <BarChart />
        </div>
        <div className="col-span-2 w-full space-y-6 flex flex-col">
          <div>
            <p class="mb-2 text-lg leading-6 font-semibold text-gray-500 dark:text-sky-400">
              집계 데이터
            </p>
            <div class="flex items-center">
              <h1 class="inline-block text-xl sm:text-2xl font-extrabold text-emerald-500 tracking-tight dark:text-slate-200">
                거래 건수 합계
              </h1>
            </div>

            <ul role="list" className="mt-4">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  {settlementDetail.startDate} ~ {settlementDetail.endDate}
                </span>
              </li>
            </ul>
          </div>
          <CountingCard title="전체 거래" count={totalAmount} />
          <CountingCard
            title="입금 이체"
            count={settlementDetail.depositTotalCount}
          />
          <CountingCard
            title="출금 이체"
            count={settlementDetail.withdrawalTotalCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Settlement;
