import React, { useState } from "react";

function RegisterForm() {
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
    <div className="container mx-auto p-10 mt-6 mb-6 bg-white rounded-xl shadow-xl">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          로그인 용 비밀번호를 입력하는 단계입니다.
        </h2>
        <hr />
      </header>

      <h2 className="font-hana font-bold text-5xl mb-6 text-center pt-10 pb-10">
        회원가입
      </h2>
      <form className="space-y-10">
        <div className="relative h-16 w-full min-w-[200px]">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder=""
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-10 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            비밀번호를 입력해주세요.
          </label>
        </div>
        <div className="relative h-16 w-full min-w-[200px]">
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder=""
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-10 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            비밀번호를 한 번 더 입력해주세요.
          </label>
        </div>
        <p
          id="password-error"
          className={`text-red-500 font-hana2 mt-1 text-3xl ${
            passwordError ? "" : "hidden"
          }`}
        >
          비밀번호가 일치하지 않습니다.
        </p>
        <p
          id="password-check"
          className={`text-green-500 font-hana2 mt-1 text-3xl ${
            passwordMatch ? "" : "hidden"
          }`}
        >
          비밀번호가 일치합니다.
        </p>

        <div className="flex justify-center items-center">
          <button
            type="button"
            className="col w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
          >
            회원가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
export default RegisterForm;
