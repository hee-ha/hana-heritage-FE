import React from "react";
import { Link } from "react-router-dom";

const AccountHome = () => {
  return (
    <div className="bg-landing flex flex-row items-center justify-center space-x-10">
      <Link to="/deposits">
        <button className="text-white font-hana2 font-semibold text-6xl bg-hanaGreen p-20 transition-transform transform hover:animate-bubbly rounded-lg">
          예·적금가입
        </button>
      </Link>
      <Link to="/account/creation/1">
        <button className="text-white font-hana2 font-semibold text-6xl bg-hanaGreen p-20 transition-transform transform hover:animate-bubbly rounded-lg">
          입·출금통장
        </button>
      </Link>
    </div>
  );
};

export default AccountHome;
