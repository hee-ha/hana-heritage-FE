import React, { useState } from "react";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        setPasswordError(false);
        setPasswordMatch(true);
      } else {
        setPasswordError(true);
        setPasswordMatch(false);
      }
    } else {
      setPasswordError(false);
      setPasswordMatch(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-10 mt-6 mb-6 bg-white rounded-xl shadow-xl">
      <h2 className="font-hana font-bold text-4xl mb-6 text-center">
        회원가입
      </h2>
      <form className="space-y-4">
        <div class="relative h-16 w-full min-w-[200px]">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder=""
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-2xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label class="after:content[''] pointer-events-none absolute left-0 -top-4 flex h-full w-full select-none !overflow-visible truncate text-2xl font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-2xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            비밀번호를 입력해주세요.
          </label>
        </div>
        <div class="relative h-16 w-full min-w-[200px]">
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder=""
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-2xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label class="after:content[''] pointer-events-none absolute left-0 -top-4 flex h-full w-full select-none !overflow-visible truncate text-2xl font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-2xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            비밀번호를 한 번 더 입력해주세요.
          </label>
        </div>
        <p
          id="password-error"
          className={`text-red-500 font-hana2 mt-1 ${
            passwordError ? "" : "hidden"
          }`}
        >
          비밀번호가 일치하지 않습니다.
        </p>
        <p
          id="password-check"
          className={`text-green-500 font-hana2 mt-1 ${
            passwordMatch ? "" : "hidden"
          }`}
        >
          비밀번호가 일치합니다.
        </p>

        <div className="flex justify-center items-center">
          <button className="text-white font-hana2 font-semibold text-3xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
