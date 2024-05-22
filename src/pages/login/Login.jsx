import React, { useState, useEffect } from "react";

function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-grow flex items-center justify-center h-screen p-0">
      {isLoading ? (
        <h1 className="text-black font-hana2 font-semibold text-6xl">
          로그인 화면으로 이동합니다
        </h1>
      ) : (
        <div className="container mx-auto max-w-md p-10 mt-6 mb-6 bg-white rounded-xl shadow-xl">
          <h2 className="font-hana font-bold text-4xl mb-6 text-center">
            로그인
          </h2>
          <form className="space-y-4">
            <div class="relative h-16 w-full min-w-[200px]">
              <input
                placeholder=""
                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-2xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label class="after:content[''] pointer-events-none absolute left-0 -top-4 flex h-full w-full select-none !overflow-visible truncate text-2xl font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-2xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                전화번호를 입력해주세요.
              </label>
            </div>
            <div class="relative h-16 w-full min-w-[200px]">
              <input
                type="password"
                placeholder=""
                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-2xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label class="after:content[''] pointer-events-none absolute left-0 -top-4 flex h-full w-full select-none !overflow-visible truncate text-2xl font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-2xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                비밀번호를 입력해주세요.
              </label>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-white font-hana2 font-semibold text-3xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
                로그인
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
