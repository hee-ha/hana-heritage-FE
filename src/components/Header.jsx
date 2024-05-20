import React from "react";
import Nav from "../Nav";

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
        <Nav />
      </div>
    </header>
  );
};

export default Header;
