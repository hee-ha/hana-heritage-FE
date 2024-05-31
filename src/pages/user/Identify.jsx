import React, { useState } from "react";

function Identify({ onIdentifySuccess }) {
  const handleIdentifyClick = () => {
    // 본인인증 로직을 추가한 후 성공 시 onIdentifySuccess 호출
    onIdentifySuccess();
  };

  const [phoneNum, setPhoneNum] = useState("");

  const handleMobile = (e) => {
    const regex = /^[0-9]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNum(e.target.value);
    }
  };

  return (
    <div className="container mx-auto p-10 mt-6 mb-6 bg-white rounded-xl shadow-xl">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          회원가입을 위한 <span className="text-hanaGreen">본인인증</span>{" "}
          단계입니다.
        </h2>
        <hr />
      </header>
      <h2 className="font-hana font-bold text-5xl mb-6 text-center pt-10 pb-10">
        본인인증
      </h2>
      <form className="space-y-28">
        <div className="relative h-16 w-full min-w-[200px]">
          <input
            placeholder=""
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-12 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            이름을 입력해주세요.
          </label>
        </div>

        <div className="flex space-x-4">
          <div className="relative h-16 w-full min-w-[100px] space-y-8">
            <input
              placeholder=""
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-20 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              주민등록번호 앞자리를 입력해주세요.
            </label>
          </div>
          <div className="relative h-16 w-full min-w-[100px] space-y-8">
            <input
              placeholder=""
              type="password"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-20 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              주민등록번호 뒷자리를 입력해주세요.
            </label>
          </div>
        </div>

        <div className="relative h-16 w-full min-w-[200px]">
          <input
            type="text"
            value={phoneNum}
            onChange={handleMobile}
            placeholder=""
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-12 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            전화번호를 입력해주세요.
          </label>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={handleIdentifyClick}
            className="col w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
          >
            본인인증하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default Identify;
