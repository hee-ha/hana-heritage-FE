import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import GradientButton from "../Button/GradientButton";
import StarAndLink from "../Rating/StarAndLink";

const CardWithButton = ({
  title = "",
  content = "",
  buttonText = "",
  buttonLink = "",
  rank="1",
  count="3",
}) => {
  return (
    <div
      data-testid="flowbite-card"
      class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col max-w-sm"
    >
      <div class="flex h-full flex-col justify-center gap-2 p-4">
        <StarAndLink mainText={`${rank}위`} subText={`${count}회 조회됨`}/>
        <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">{content}</p>
        <Link to={buttonLink}>
          <GradientButton label={buttonText} width="w-full" containArrow />
        </Link>
      </div>
    </div>
  );
};

export default CardWithButton;
