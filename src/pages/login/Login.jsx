import React, { useState, useEffect } from "react";
import Button from "../../components/common/Button/Button";

function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center w-screen h-screen px-10">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-landing bg-opacity-90 w-screen h-screen">
          <h1 className="text-white font-hana2 font-semibold text-6xl z-10">
            로그인 화면으로 이동합니다
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center animate-fadeIn mt-5">
          <img src="/png/Login.png" alt="로그인 로고" className="h-32 mr-2" />
          <span className="font-hana2 font-semibold text-2xl whitespace-nowrap">
            아이디 로그인
          </span>
          {/* 아이디 */}
          <div className="mb-6">
            <label
              htmlFor="success"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Your name
            </label>
            <input
              type="text"
              id="success"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="Success input"
            />
            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Well done!</span> Some success
              message.
            </p> */}
          </div>
          {/* 비밀번호 */}
          <div className="mb-6">
            <Button label={"로그인"}>하지마</Button>
            <label
              htmlFor="success"
              className="block text-sm font-notoSans font-semibold dark:text-green-500"
            >
              Your name
            </label>
            <input
              type="text"
              id="success"
              className="border border-green-500 text-hanaBlack-900 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3 dark:bg-gray-700 dark:border-green-500 shadow-md hover:shadow-lg duration-300 ease-in-out"
              placeholder="Success input"
            />

            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Well done!</span> Some success
              message.
            </p> */}
          </div>

          {/* <p class="flex items-center gap-1 mt-2 font-sans text-sm antialiased font-normal leading-normal text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 -mt-px"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Use at least 8 characters, one uppercase, one lowercase and one
            number.
          </p> */}
        </div>
      )}
    </div>
  );
}

export default Login;
