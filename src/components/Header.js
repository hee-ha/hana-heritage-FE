// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img
            src="/png/Hana_Bank.png"
            alt="하나은행 로고"
            className="h-8 mr-2"
          />
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-hanaGreen">
            예금
          </a>
          <a href="#" className="text-gray-700 hover:text-hanaGreen">
            적금
          </a>
          <a href="#" className="text-gray-700 hover:text-hanaGreen">
            간단거래
          </a>
          <a href="#" className="text-gray-700 hover:text-hanaGreen">
            상속
          </a>
          <a href="#" className="text-gray-700 hover:text-hanaGreen">
            노후관리
          </a>
          <a href="#" className="text-gray-700 hover:text-hanaGreen">
            로그인
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
