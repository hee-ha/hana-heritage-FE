import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import GradientButton from "../Button/GradientButton";
import StarAndLink from "../Rating/StarAndLink";

const CountingCard = ({ title = "", count = "" }) => {
  const cardClass = classNames(
    "w-full p-4  border border-emerald-500 border-1 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
  );
  return (
    <div className={cardClass}>
      <h5 className="text-base font-bold text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-xl font-extrabold tracking-tight text-emerald-500 ">
          {count}
        </span>
        <span className="text-2xl font-semibold text-emerald-500">건</span>
        <span className="ms-1 text-base font-normal text-gray-500 dark:text-gray-400">
          / week
        </span>
      </div>
    </div>
  );
};

export default CountingCard;
