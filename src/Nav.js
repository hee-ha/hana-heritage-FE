import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex space-x-4">
      <Link to="/deposit" className="text-gray-700 hover:text-hanaGreen">
        예금
      </Link>
      <Link to="/savings" className="text-gray-700 hover:text-hanaGreen">
        적금
      </Link>
      <Link
        to="/simple-transaction"
        className="text-gray-700 hover:text-hanaGreen"
      >
        간단거래
      </Link>
      <Link to="/inheritance" className="text-gray-700 hover:text-hanaGreen">
        상속
      </Link>
      <Link
        to="/retirement-management"
        className="text-gray-700 hover:text-hanaGreen"
      >
        노후관리
      </Link>
      <Link to="/login" className="text-gray-700 hover:text-hanaGreen">
        로그인
      </Link>
    </nav>
  );
};

export default Nav;
