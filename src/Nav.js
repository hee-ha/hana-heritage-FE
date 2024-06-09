import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./components/common/Button/Button";

// 헬퍼 함수 정의
const getLinkClassName = (isActive) =>
  isActive
    ? "text-white bg-hanaGreen font-hana2 font-semibold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
    : "text-hanaBlack hover:text-white hover:bg-hanaGreen font-hana2 font-semibold rounded-md px-3 py-2 text-4xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg";

const Nav = () => {
  const location = useLocation();

  return (
    <div className="mx-10 flex flex-1 items-center justify-center space-x-6">
      <div className="text-center">
        <NavLink
          to="/account/home"
          className={() =>
            getLinkClassName(location.pathname === "/account/home")
          }
          aria-current="page"
        >
          계좌개설
        </NavLink>
      </div>
      <div className="text-center">
        <NavLink
          to="/transfer"
          className={() => getLinkClassName(location.pathname === "/transfer")}
          aria-current="page"
        >
          이체
        </NavLink>
      </div>
      <div className="text-center">
        <NavLink
          to="/transfer/history"
          className={() =>
            getLinkClassName(location.pathname === "/transfer/history")
          }
          aria-current="page"
        >
          이체내역
        </NavLink>
      </div>
      <div className="text-center">
        <NavLink
          to="/account"
          className={() => getLinkClassName(location.pathname === "/account")}
          aria-current="page"
        >
          내계좌
        </NavLink>
      </div>
      <div className="text-center">
        <NavLink
          to="/inheritance"
          className={() =>
            getLinkClassName(location.pathname === "/inheritance")
          }
          aria-current="page"
        >
          상속
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
