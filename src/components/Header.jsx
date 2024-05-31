import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow shadow-hanaGreen">
      <div className="mx-auto flex justify-between items-center px-24 py-6">
        <div className="flex flex-row items-center">
          <Link to="/">
            <img
              src="/png/Hana_Bank.png"
              alt="하나은행 로고"
              className="h-12 mr-2"
            />
          </Link>
          <Nav />
        </div>
        <div>
          <Link
            to="/logout"
            className="text-white bg-hanaRed font-hana2 font-semibold rounded-md px-3 py-2 text-4xl"
            aria-current="page"
          >
            로그아웃
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
