import React from "react";
import classNames from "classnames";

const GreenBadge = ({ className = "", label, handleClickBtn }) => {
  const badgeClass = classNames(
    "flex h-fit items-center gap-1 font-noto font-semibold bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300 p-1 text-sm rounded",
    className,
  );
  return (
    <span className={badgeClass} data-testid="flowbite-badge">
      <span>{label}</span>
    </span>
  );
};

export default GreenBadge;
