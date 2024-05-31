import React from "react";
import { Link } from "react-router-dom";
import Button from "./components/common/Button/Button";

const Nav = () => {
  return (
    <div className="mx-10 flex flex-1 items-center justify-center space-x-6">
      <div className="text-center">
        <Link
          to="/deposits"
          className="text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-bold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          aria-current="page"
        >
          예·적금가입
        </Link>
      </div>
      <div className="text-center">
        <Link
          to="/account/creation"
          className="text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-bold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          aria-current="page"
        >
          계좌개설
        </Link>
      </div>
      <div className="text-center">
        <Link
          to="/transfer"
          className="text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-semibold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          aria-current="page"
        >
          이체
        </Link>
      </div>
      <div className="text-center">
        <Link
          to="/transfer/history"
          className="text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-semibold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          aria-current="page"
        >
          이체내역
        </Link>
      </div>
      <div className="text-center">
        <Link
          to="/account"
          className="text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-semibold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          aria-current="page"
        >
          내계좌
        </Link>
      </div>
      <div className="text-center">
        <Link
          to="/inheritance"
          className="text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-semibold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          aria-current="page"
        >
          상속
        </Link>
      </div>
    </div>
  );
};

export default Nav;
