import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Home = () => {
  const { auth } = useAuthContext();
  console.log(auth);
  return (
    <div className="bg-landing flex flex-col items-center justify-center space-y-5">
      <div>
        <h1 className="my-10 text-white text-center font-hana2 font-semibold text-7xl z-10 animate-float">
          시니어를 위한 <br />
          <br />
          하나은행 웹사이트에 오신것을 환영합니다!
        </h1>
      </div>
      {auth?.isSuccess ? (
        <></>
      ) : (
        <>
          <div className="flex space-x-5">
            <Link to={"/login"}>
              <button className="text-white font-hana2 font-semibold text-6xl bg-hanaRed px-20 py-10 transition-transform transform hover:animate-bubbly rounded-lg">
                로그인
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="text-white font-hana2 font-semibold text-6xl bg-hanaGreen px-20 py-10 transition-transform transform hover:animate-bubbly rounded-lg">
                회원가입
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
