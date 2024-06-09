import React from "react";
import classNames from "classnames";

const GradientButton = ({
  className = "",
  isDisabled = false,
  type = "button",
  containArrow = false,
  label,
  handleClickBtn,
  font = "font-noto",
  fontSize,
  fontColor = "text-white",
  bgColor = "bg-hanaGreen",
  paddingY = "py-0.5",
  paddingX = "px-0.5",
  width = "w-auto",
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
    "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow]  bg-gradient-to-br from-green-400 to-cyan-600 text-white  rounded-lg",
    {
      "cursor-not-allowed opacity-50": isDisabled, // disabled 상태일 때 색상 희미하게 변경
    },
  );

  return (
    <button
      disabled={isDisabled}
      type="button"
      className={buttonClass}
      onClick={handleClickBtn}
    >
      <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
        {label}
        {containArrow == true ? (
          <svg
            class="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          ""
        )}
      </span>
    </button>
  );
};

export default GradientButton;
