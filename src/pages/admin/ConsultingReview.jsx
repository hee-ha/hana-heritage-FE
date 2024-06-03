import React from "react";
import { Avatar, Badge, Button } from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";

const ConsultingReview = () => {
  return (
    <div className="w-full space-y-10">
      <div className="space-y-2">
        <h1 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          오늘의 <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            상담 대기
          </span>{" "}
          목록입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          바로 오늘, 상담을 기다리고 있는 손님 목록입니다. 전화를 걸어 상담을 진행해주세요. 😇
        </p>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              고객 성함
            </th>
            <th scope="col" className="px-6 py-3">
              전화번호
            </th>
            <th scope="col" className="px-6 py-3">
              업무
            </th>
            <th scope="col" className="px-6 py-3">
              상담
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Avatar />
              <div className="ps-3">
                <div className="text-base font-semibold">황유진</div>
              </div>
            </th>
            <td className="px-6 py-4">010-1234-2211</td>
            <td className="px-6 py-4">대출</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                14:02 완료
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Avatar />
              <div className="ps-3">
                <div className="text-base font-semibold">정찬수</div>
              </div>
            </th>
            <td className="px-6 py-4">010-1234-2211</td>
            <td className="px-6 py-4">대출</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <Button size="sm" gradientDuoTone="greenToBlue">
                  완료 처리하기
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ConsultingReview;
