import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 mt-5">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-2">
            <div className="mb-8">
              <ul className="flex flex-wrap text-sm md:mb-0 justify-center md:justify-start">
                <li className="mr-4">사고신고</li>
                <li className="mr-4">상품 공시실</li>
                <li className="mr-4">경영공시</li>
                <li className="mr-4">퇴직연금공시</li>
                <li className="mr-4">원격지원상담</li>
                <li className="mr-4">상담센터</li>
                <li className="mr-4">개인정보처리방침</li>
                <li className="mr-4">본인정보이용 제공현황</li>
                <li className="mr-4">그룹사간 고객정보 제공내역조회</li>
                <li className="mr-4">영업점 찾기</li>
                <li className="mr-4">원큐 금융 상담서비스</li>
              </ul>
            </div>
            <div className="flex flex-col"></div>
            <div className="flex items-center justify-center md:justify-start mt-4 md:mt-0 mb-6">
              <img
                src="https://image.kebhana.com/cont/common/img/newmain2021/wa-mark.png"
                alt="과학기술정보통신부 WEB ACCESSIBILITY 마크"
                title="국가 공인 인증기관 : 웹와치"
                className="mr-2"
              />
              <img
                src="https://image.kebhana.com/cont/common/img/newmain2021/iso-mark.png"
                alt="ISO 마크"
                title="정보보호인증: ISO27001, ISO27701"
                className="mr-2"
              />
              <img
                src="https://image.kebhana.com/cont/common/img/newmain2021/isms-mark-black.png"
                alt="ISMS 마크"
                title="정보보호 인증: ISMS-P"
              />
              <p className="text-xs text-gray-600 text-center mt-4 ml-4">
                ⓒ Hana Bank. All right reserved.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <ul className="text-sm text-center md:text-right mb-4 md:mb-0">
              <li className="mb-2">고객센터</li>
              <li className="mb-2">
                <span className="font-hana2 font-bold whitespace-nowrap min-w-[150px]">
                  1588-1111 / 1599-1111
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
