import React, { useState } from "react";
import { sendSms, certificate } from "../../apis/authService";
import OcrAuthenticationModal from "../inheritance/OcrAuthentication";

function Identify({ onIdentifySuccess }) {
  const [name, setName] = useState("");
  const [firstResiNum, setFirstResiNum] = useState("");
  const [secondResiNum, setSecondResiNum] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [showVerificationField, setShowVerificationField] = useState(false);
  const [certCode, setCertCode] = useState("");
  const [showOcrModal, setShowOcrModal] = useState(false); // OCR 모달 상태 추가
  const [ocrData, setOcrData] = useState(null); // OCR 데이터 상태 추가

  const handleIdentifyClick = () => {
    // 본인인증 로직을 추가한 후 성공 시 onIdentifySuccess 호출
    let certInfo = {
      phoneNumber: phoneNum,
      certCode: certCode,
    };

    doCertificate(certInfo);
  };

  const handleSmsButtonClick = () => {
    doSms();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleFirstResiNum = (e) => {
    setFirstResiNum(e.target.value);
  };
  const handleSecondResiNum = (e) => {
    setSecondResiNum(e.target.value);
  };
  const handleCertCode = (e) => {
    setCertCode(e.target.value);
  };
  const handleMobile = (e) => {
    const regex = /^[0-9]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNum(e.target.value);
    }
  };

  const doCertificate = async (certInfo) => {
    try {
      const response = await certificate(certInfo);
      if (response.isSuccess) {
        alert("본인인증에 성공하였습니다.");
        let registerInfo = {
          name: name,
          phoneNumber: phoneNum,
          identificationNumber: firstResiNum + "-" + secondResiNum,
        };
        onIdentifySuccess(registerInfo);
      } else {
        alert("본인 인증이 되지 않았습니다.");
      }
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const doSms = async () => {
    try {
      const response = await sendSms(phoneNum);
      console.log(response);
      if (response.isSuccess) {
        alert("입력하신 번호로 인증번호가 전송되었습니다.");
        setShowVerificationField(true);
      } else {
        alert("문자 전송에 실패하였습니다. 올바른 값을 입력해주세요.");
      }
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const handleOpenOcrModal = () => setShowOcrModal(true);
  const handleCloseOcrModal = () => setShowOcrModal(false);
  const handleSaveOcrData = (data) => {
    console.log(data);
    setName(data?.fields[0]?.inferText);
    const [firstPart, secondPart] = data?.fields[1]?.inferText.split("-");
    setFirstResiNum(firstPart || "");
    setSecondResiNum(secondPart || "");
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
      {/* <h2 className="font-hana2 font-bold text-5xl mb-6 text-center pt-10 pb-10">
        본인인증
      </h2> */}
      <form className="space-y-28">
        <div className=" font-hana2 font-bold flex justify-center items-center text-5xl mt-5">
          회원가입을 위해 주민등록증을 제출해야 합니다.
        </div>

        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={handleOpenOcrModal}
            className="text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 transition-transform transform hover:animate-bubbly rounded-lg"
          >
            주민등록증 제출하기
          </button>
        </div>

        <div className="relative h-16 w-full min-w-[200px]">
          <input
            value={name}
            onChange={handleName}
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
              value={firstResiNum}
              onChange={handleFirstResiNum}
              placeholder=""
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-20 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              주민등록번호 앞자리
            </label>
          </div>
          <div className="relative h-16 w-full min-w-[100px] space-y-8">
            <input
              value={secondResiNum}
              onChange={handleSecondResiNum}
              placeholder=""
              type="password"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-20 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              주민등록번호 뒷자리
            </label>
          </div>
        </div>

        <div className="flex items-center space-x-4">
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
          <div className="relative h-16 min-w-[200px]">
            <button
              type="button"
              onClick={handleSmsButtonClick}
              className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
            >
              인증문자받기
            </button>
          </div>
        </div>

        {showVerificationField && (
          <div className="relative h-16 w-full min-w-[200px] mt-8">
            <input
              type="text"
              value={certCode}
              onChange={handleCertCode}
              placeholder=""
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-12 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              인증번호를 입력해주세요.
            </label>
          </div>
        )}

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

      <OcrAuthenticationModal
        show={showOcrModal}
        handleClose={handleCloseOcrModal}
        handleSave={handleSaveOcrData}
      />
    </div>
  );
}

export default Identify;
