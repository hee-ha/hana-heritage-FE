import React, { useState } from "react";

function BankButtons() {
  const [showMoreBanks, setShowMoreBanks] = useState(false);

  const [selectedBank, setSelectedBank] = useState(null);
  const handleBankClick = (bank) => {
    setSelectedBank(bank.name);
    // 선택된 은행 이름 가져오기
    console.log(bank.name);
  };
  const banks = [
    {
      name: "하나",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_HANA_Profile.png",
    },
    {
      name: "국민",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_KB_Profile.png",
    },
    {
      name: "신한",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_SHINHAN_Profile.png",
    },
    {
      name: "농협",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_NH_Profile.png",
    },
    {
      name: "우리",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_WOORI_Profile.png",
    },
    {
      name: "기업",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_IBK_Profile.png",
    },
    {
      name: "대구",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/IS_DGB_Profile.png",
    },
    {
      name: "부산",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_BUSAN_Profile.png",
    },
    {
      name: "경남",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_KYOUNGNAM_Profile.png",
    },
    {
      name: "광주",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_KWANGJU_Profile.png",
    },
    {
      name: "전북",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_JEJU_Profile.png",
    },
    {
      name: "제주",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_JEJU_Profile.png",
    },
    {
      name: "산업",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_KDB_Profile.png",
    },
    {
      name: "신협",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_CU_Profile.png",
    },
    {
      name: "수협",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_SH_Profile.png",
    },
    {
      name: "우체국",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_EPOST_Profile.png",
    },
    {
      name: "한국씨티",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_CITI_Profile.png",
    },
    {
      name: "SC제일",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_SC_Profile.png",
    },
    {
      name: "카카오뱅크",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_KAKAO_Profile.png",
    },
    {
      name: "토스뱅크",
      logo: "https://financial.pstatic.net/pie/common-bi/0.11.0/images/BK_TOSS_Profile.png",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {banks.slice(0, 4).map((bank, index) => (
          <button
            key={index}
            className={`font-hana2 hover:border-hanaGreen flex-1 text-3xl text-black bg-white p-2 rounded-md border mx-1 ${
              selectedBank === bank.name
                ? "border-hanaGreen"
                : "border-gray-300"
            }`}
            onClick={() => handleBankClick(bank)}
          >
            <img
              className="finImg mb-2"
              src={bank.logo}
              alt={`${bank.name} logo`}
            />
            {bank.name}
          </button>
        ))}
      </div>

      {showMoreBanks && (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {banks.slice(4).map((bank, index) => (
            <button
              key={index}
              className={`font-hana2 flex-1 hover:border-hanaGreen text-3xl text-black bg-white p-2 rounded-md border mx-1 ${
                selectedBank === bank.name
                  ? "border-hanaGreen"
                  : "border-gray-300"
              }`}
              onClick={() => handleBankClick(bank)}
            >
              <img
                className="finImg mb-2"
                src={bank.logo}
                alt={`${bank.name} logo`}
              />
              {bank.name}
            </button>
          ))}
        </div>
      )}

      <button
        className="transferbtn bg-hanaGreen active:border-hanaGreen w-full font-hana2 text-3xl text-white text-500 mt-6"
        onClick={() => setShowMoreBanks(!showMoreBanks)}
      >
        은행 더보기 {showMoreBanks ? "▲" : "▼"}
      </button>
    </>
  );
}

export default BankButtons;
