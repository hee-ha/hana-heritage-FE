import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useLogout } from "../hooks/useAuth";

const Header = () => {
  const { auth } = useAuthContext();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="bg-white shadow shadow-hanaGreen">
      <div className="mx-auto flex justify-between items-center px-24 py-6">
        <div className="flex flex-row items-center">
          <Link to="/">
            <img
              src="/png/hana-logo.png"
              alt="하나은행 로고"
              className="h-16 mr-2"
            />
          </Link>
          <Nav />
        </div>
        {auth && (
          <div>
            <button
              onClick={handleLogout}
              className="text-white bg-hanaRed font-hana2 font-semibold rounded-md px-3 py-2 text-4xl"
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
