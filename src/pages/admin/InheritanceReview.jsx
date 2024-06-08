import React from "react";
import { Avatar, Badge, Button } from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";
import { InheritanceReviewCard } from "./InheritanceReviewCard";

const InheritanceReview = () => {
  
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          검토 대기중인{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            상속 계약
          </span>{" "}
          요청 목록 입니다.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          온라인으로 신청된 상속 계약 목록입니다. 서류를 검토 후 승인 처리를
          진행해주세요. 🔥
        </p>
      </div>
      <div className="w-full">
        <div class="grid sm:grid-cols-2 gap-6 md:grid-cols-3">
          <InheritanceReviewCard />
          <InheritanceReviewCard />
          <InheritanceReviewCard />
          <InheritanceReviewCard />
          <InheritanceReviewCard />
          <InheritanceReviewCard />
        </div>
      </div>
    </div>
  );
};

export default InheritanceReview;
