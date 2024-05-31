import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";

const TransferHome = () => {
  return (
    <div className="bg-landing flex flex-row items-center justify-center space-x-10">
      <Link to="/transfer/simple">
        <button className="text-white font-hana2 font-semibold text-6xl bg-hanaGreen p-20 transition-transform transform hover:animate-bubbly rounded-lg">
          계좌이체
        </button>
      </Link>
      <Link to="/transfer/auto">
        <button className="text-white font-hana2 font-semibold text-6xl bg-hanaGreen p-20 transition-transform transform hover:animate-bubbly rounded-lg">
          자동이체
        </button>
      </Link>
    </div>
  );
};

export default TransferHome;
