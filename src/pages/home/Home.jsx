import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-landing flex flex-col items-center justify-center space-y-5">
      <div>
        <h1 className="text-white font-hana2 font-semibold text-6xl z-10 animate-float">
          시니어를 위한 하나은행 웹사이트에 오신것을 환영합니다!
        </h1>
      </div>
      <div>
        <h1 className="text-white font-hana2 font-semibold text-5xl z-10 animate-float">
          시니어를 위한 하나은행 웹사이트에 오신것을 환영합니다! 5xl
        </h1>
      </div>
      <div>
        <h1 className="text-white font-hana2 font-semibold text-2xl z-10 animate-float">
          시니어를 위한 하나은행 웹사이트에 오신것을 환영합니다! 2xl
        </h1>
      </div>
      <div>
        <h1 className="text-white font-hana2 font-semibold text-3xl z-10 animate-float">
          시니어를 위한 하나은행 웹사이트에 오신것을 환영합니다! 3xl
        </h1>
      </div>
      <div className="flex space-x-3">
        <h1 className="text-white font-hana2 font-semibold text-4xl z-10">
          시니어를 위한 하나은행 웹사이트에 오신것을 환영합니다! 4xl
        </h1>
        <button className="text-white font-hana2 font-semibold text-3xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
          로그인
        </button>
      </div>
      <div className="flex space-x-5">
        <Link to="/login">
          <button className="text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            로그인
          </button>
          <button className="text-white font-hana2 font-semibold text-4xl bg-hanaGreen py-4 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            로그인
          </button>
          <button className="text-white font-hana2 font-semibold text-3xl bg-hanaGreen py-4 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            로그인
          </button>
          <button className="text-white font-hana2 font-semibold text-xl bg-hanaGreen py-3 px-6 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            로그인
          </button>
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              placeholder="Static"
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Static
            </label>
          </div>
        </Link>
        <button className="text-hanaBlack font-hana2 font-semibold text-5xl bg-hanaGreen py-4 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Home;
