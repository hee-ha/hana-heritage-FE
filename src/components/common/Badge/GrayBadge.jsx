import React from "react";
import classNames from "classnames";

const GrayBadge = ({ className = "", label, handleClickBtn }) => {
  const badgeClass = classNames(
    "flex h-fit items-center gap-1 font-noto font-semibold bg-gray-100 text-gray-800 p-1 text-sm rounded",
    className,
  );
  return (
    <span
      className={badgeClass}
      data-testid="flowbite-badge"
    >
      <span>{label}</span>
    </span>
  );
};

export default GrayBadge;
