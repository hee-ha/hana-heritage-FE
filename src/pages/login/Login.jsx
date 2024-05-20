import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <img src="/png/Login.png" alt="로그인 로고" className="h-32 mr-2" />
      <span className="font-hana2 font-semibold text-2xl whitespace-nowrap">
        아이디 로그인
      </span>
      <div class="mb-6">
        <label
          for="success"
          class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          Your name
        </label>
        <input
          type="text"
          id="success"
          class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Success input"
        />
        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
          <span class="font-medium">Well done!</span> Some success message.
        </p>
      </div>
    </div>
  );
}

export default Login;
