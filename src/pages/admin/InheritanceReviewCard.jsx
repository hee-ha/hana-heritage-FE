import React from "react";
import { Card } from "flowbite-react";
import GradientButton from "../../components/common/Button/GradientButton";
import GreenBadge from "../../components/common/Badge/GreenBadge";

export function InheritanceReviewCard({ contract, setShowModal, handleApprove }) {
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };
 
  return (
    <Card>
      <div className="flex flex-col items-center font-noto">
        <div className="mb-4 w-full flex justify-start">
          {contract.isApproved?(
          <GreenBadge label={"승인됨"} className="px-3 py-2 font-bold" />
          ) : (
          <GreenBadge label={"대기중"} className="px-3 py-2 font-bold" />
          )}
        </div>
        <div className="flex flex-col items-center font-noto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10"
          >
            <path
              fillRule="evenodd"
              d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
              clipRule="evenodd"
            />
            <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
          </svg>

          <h5 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
            <span className="font-bold">{contract.customerName}</span> 손님
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(contract.created_at)}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <GradientButton
              label="서류 검토하기"
              handleClickBtn={setShowModal}
            />
            <button
              onClick={handleApprove}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              승인하기
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
