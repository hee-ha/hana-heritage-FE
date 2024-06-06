import React, { useState } from "react";
import { Link } from "react-router-dom";
import Property from "./component/Property";
import Contract from "./component/Contract";
import { Link } from "react-router-dom";

function Inheritance() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Contract />;
      case 1:
        return <Property />;
      default:
        return <Contract />;
    }
  };

  return (
    <div className="px-24">
      <div className="text-center mt-10">
        <Link
          to="/inheritance/join"
          className="text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-semibold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          aria-current="page"
        >
          상속 홈페이지 바로가기(임시)
        </Link>
        <Link
          to="/inheritance/ocr"
          className="text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-semibold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          aria-current="page"
        >
          ocr 바로가기(임시)
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <div
          className={`px-6 py-2 mx-2 text-3xl font-hana2 cursor-pointer rounded-t-lg ${
            activeTab === 0 ? "bg-hanaGreen text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab(0)}
        >
          계약서 확인
        </div>
        <div
          className={`px-6 py-2 mx-2 text-3xl font-han2 cursor-pointer rounded-t-lg ${
            activeTab === 1 ? "bg-hanaGreen text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab(1)}
        >
          내자산 조회
        </div>
      </div>
      <hr />
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
}
export default Inheritance;
