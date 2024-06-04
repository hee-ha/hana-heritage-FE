import React from "react";
import classNames from "classnames";

const GradientButton = ({
  className = "",
  isDisabled = false,
  type = "button",
  label,
  handleClickBtn,
  font = "font-noto",
  fontSize,
  fontColor = "text-white",
  bgColor = "bg-hanaGreen",
  paddingY = "py-0.5",
  paddingX = "px-0.5",
  width="w-auto",
}) => {
  const buttonClass = classNames(
    className,
    isDisabled,
    font,
    fontSize,
    fontColor,
    bgColor,
    paddingY,
    paddingX,
    width,
    "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 rounded-lg",
    {
      "cursor-not-allowed opacity-50": isDisabled, // disabled 상태일 때 색상 희미하게 변경
    },
  );

  return (
    <button
      disabled={isDisabled}
      type="button"
      className={buttonClass}
    >
      <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
        {label}
      </span>
    </button>
  );
};

export default GradientButton;
