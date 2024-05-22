import React from "react";
import classNames from "classnames";

const Button = ({
  className = "",
  isDisabled = false,
  type = "button",
  label,
  handleClickBtn,
  font = "font-hana2",
  fontSize = "text-5xl",
  fontColor = "text-white",
  bgColor = "bg-hanaGreen",
  paddingY = "py-3",
  paddingX = "px-8",
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
    "font-semibold z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg",
    {
      "cursor-not-allowed": isDisabled,
    }
  );

  return (
    <button
      className={buttonClass}
      disabled={isDisabled}
      type={type}
      onClick={handleClickBtn}
    >
      {label}
    </button>
  );
};

export default Button;
