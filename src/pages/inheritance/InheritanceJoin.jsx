import React, { useRef, useEffect, useState } from "react";
import Video from "../../assets/mp4/heritage.mp4";
import "aos/dist/aos.css"; // AOS CSS 파일 가져오기
import AOS from "aos";

function InheritanceJoin() {
  const videoRef = useRef();
  const firstSectionRef = useRef();
  const secondSectionRef = useRef();
  const thirdSectionRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      once: false, // 애니메이션이 반복 실행되도록 설정
    });

    // 페이지 로드 시 첫 번째 섹션으로 스크롤
    setTimeout(() => {
      firstSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);

    const handleResize = () => {
      const video = videoRef.current;
      if (!video) return; // 비디오 요소가 없을 경우를 대비한 예외 처리
      const { innerWidth, innerHeight } = window;
      const aspectRatio = video.videoWidth / video.videoHeight;
      const windowRatio = innerWidth / innerHeight;

      if (windowRatio > aspectRatio) {
        video.style.width = "100%";
        video.style.height = "auto";
      } else {
        video.style.width = "auto";
        video.style.height = "100%";
      }
    };

    const handleLoadedMetadata = () => {
      handleResize();
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSecondSection = () => {
    setTimeout(() => {
      secondSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const scrollToThirdSection = () => {
    setTimeout(() => {
      thirdSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      <div ref={firstSectionRef}>
        {/* 비디오 요소 */}
        <video
          muted
          autoPlay
          loop
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      {/* 배경 어둡게 처리 */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* 첫 번째 섹션 */}
      <section
        className="relative h-screen flex items-center justify-center z-10"
        data-aos="zoom-in"
      >
        <h1 className="text-white text-center font-hana2 font-semibold text-7xl">
          당신의 100년을 책임질 <br />
          <br />
          <span className="font-hana2 font-bold text-hanaGreen">하나은행 </span>
          <span className="font-hana2 font-bold text-hanaRed">
            리빙트러스트 서비스
          </span>
          를 소개합니다!
        </h1>
      </section>

      {/* 스크롤 다운 버튼 */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <button
          onClick={scrollToSecondSection}
          className="text-white flex flex-col items-center z-30"
        >
          <span className="font-hana2 font-semibold text-2xl">SCROLL DOWN</span>
          <br />
          <svg
            className="w-8 h-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {/* 두 번째 섹션 */}
      <section
        ref={secondSectionRef}
        className="relative h-screen flex flex-col items-center justify-center space-y-5 bg-landing2"
      >
        <div className="flex flex-col items-start z-10 text-2xl">
          <h1 className="text-black ml-6 mb-14 text-center font-hana2 font-semibold text-6xl">
            "살아 있을 때 내 마음대로 상속 설계"
          </h1>
          <div className="text-white ml-6 font-hana2 font-semibold text-4xl bg-black bg-opacity-40 py-5 px-7">
            <p className="leading-relaxed">
              •{" "}
              <span className="font-bold">하나 Living Trust(유언대용신탁)</span>
              는 자신이 원하는 대로{" "}
              <span className="text-yellow-500">
                상속 대상과 내용을 자유롭게 설계
              </span>
              할 수 있습니다.
            </p>
            <ul className="leading-relaxed mt-4 space-y-2">
              <li>
                • 살아 있는 동안에는{" "}
                <span className="text-yellow-500">
                  자신이 원하는 대로 재산을 관리·운용
                </span>
              </li>
              <li>
                • <span className="text-yellow-500">사후</span>에는 배우자,
                자녀, 제 3자 등을 수익자로 지정해{" "}
                <span className="text-yellow-500">
                  신탁 재산이 자동으로 이전
                </span>
                되도록 설정
              </li>
              <li>
                • 재산을 지급할 대상, 시기, 지급 방법을
                <span className="text-yellow-500"> 맞춤형으로 설계</span>
                가능
              </li>
              <li>
                • 손님 상황에 맞는 재산 관리와 상속 설계가 이루어질 수 있도록
                든든한 종합상속설계 플랜을 제안합니다.
              </li>
            </ul>
            <p className="text-white leading-relaxed mt-4">
              **신탁가능재산 :{" "}
              <span className="text-red-600 font-hana2 font-bold text-4xl">
                부동산, 금전, 금전채권, 유가증권
              </span>
            </p>
          </div>
        </div>
        {/* 스크롤 다운 버튼 */}
        <div className="absolute bottom-10 w-full flex justify-center z-30">
          <button
            onClick={scrollToThirdSection}
            className="text-white flex flex-col items-center z-30"
          >
            <span className="font-hana2 font-semibold text-2xl">
              SCROLL DOWN
            </span>
            <br />
            <svg
              className="w-8 h-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </section>

      {/* 세번째 섹션 */}
      <section
        ref={thirdSectionRef}
        className="relative h-screen flex items-center justify-center space-x-8 bg-landing2"
      >
        <div
          className="h-4/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-20 flex flex-col "
          style={{ width: "525px" }}
        >
          <a href="#">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              src="https://m.kebhana.com/cont/hidden/livingtrust/img/personalized/uses01-01.png"
              alt="Image 1"
            />
          </a>
          <div className="p-5 flex-grow flex flex-col">
            <a href="#">
              <h5 className="mb-2 text-4xl font-hana2 font-bold tracking-tight text-gray-900 dark:text-white border-b border-gray-300 pb-5">
                내가 원하는 대로 상속 설계 가능
              </h5>
            </a>
            <p className="mt-5 text-3xl font-hana2 font-normal text-gray-700 dark:text-gray-400 leading-normal">
              상속 재산 분할 컨설팅
              <br />
              남은 가족의 상속 집행 고민 해결
            </p>
          </div>
        </div>

        <div
          className="h-4/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-20 flex flex-col whitespace-nowrap"
          style={{ width: "525px" }}
        >
          <a href="#">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              src="https://m.kebhana.com/cont/hidden/livingtrust/img/personalized/uses01-02.png"
              alt="Image 2"
            />
          </a>
          <div className="p-5 flex-grow flex flex-col">
            <a href="#">
              <h5 className="mb-2 text-5xl font-hana2 font-bold tracking-tight text-gray-900 dark:text-white  border-b border-gray-300 pb-5">
                안전하고 정확한 재산 분배
              </h5>
            </a>
            <p className="mt-5 text-3xl font-hana2 font-normal text-gray-700 dark:text-gray-400 leading-normal">
              손님이 지정한 상속 비율 및 재산 분배
              <br />
              방법으로 상속 진행
            </p>
          </div>
        </div>

        <div
          className="h-4/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-20 flex flex-col"
          style={{ width: "525px" }}
        >
          <a href="#">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              src="https://m.kebhana.com/cont/hidden/livingtrust/img/personalized/uses01-03.png"
              alt="Image 3"
            />
          </a>
          <div className="p-5 flex-grow flex flex-col">
            <a href="#">
              <h5 className="mb-2 text-5xl font-hana2 font-bold tracking-tight text-gray-900 dark:text-white border-b border-gray-300 pb-5">
                연속상속 설계
              </h5>
            </a>
            <p className="mt-5 text-3xl font-hana2 font-normal text-gray-700 dark:text-gray-400 leading-normal">
              본인 유고시 배우자에게 1차 이전하고
              <br />
              배우자 유고시 자녀에게 2차 이전
              <br />
              설계로 연속상속 맞춤 관리
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InheritanceJoin;
