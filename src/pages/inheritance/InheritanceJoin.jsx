import React, { useRef, useEffect, useState } from "react";
import Video from "../../assets/mp4/heritage.mp4";
import "aos/dist/aos.css"; // AOS CSS 파일 가져오기
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import { Accordion } from "flowbite-react";
import { addConsultingReservation } from "../../apis/consulting/addConsultingReservation";

function InheritanceJoin() {
  const videoRef = useRef();
  const firstSectionRef = useRef();
  const secondSectionRef = useRef();
  const thirdSectionRef = useRef();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [workTypeName, setWorkTypeName] = useState("리빙트러스트");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [reservationDatetime, setReservationDatetime] = useState(null);

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

  const moveToJoin = () => {
    navigate("/inheritance/join2");
    console.log("click");
  };

  const doAddConsultingReservation = async (requestBody) => {
    try {
      const response = await addConsultingReservation(requestBody);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const confirmForm = () => {
    if (agreement === false) {
      alert("개인(신용)정보 수집·이용에 동의 시만 가입 가능합니다.");
    } else if (phoneNumber === null) {
      alert("연락처를 입력해주세요.");
    } else if (reservationDatetime === null) {
      alert("상담 예약일시를 선택해주세요.");
    } else {
      const requestBody = {
        workTypeName: workTypeName,
        phoneNumber: phoneNumber,
        reservationDatetime: reservationDatetime,
      };
      doAddConsultingReservation(requestBody);
      alert("예약이 완료되었습니다!");
      setShowModal(false);
    }
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
          className="h-4/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-20 flex flex-col "
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
          className="h-4/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-20 flex flex-col whitespace-nowrap"
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
          className="h-4/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-20 flex flex-col"
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
      <button
        class="fixed flex items-center bottom-5 right-14 bg-hanaGold text-black text-5xl font-hana2 font-bold p-6 rounded-3xl shadow-lg z-30 hover:animate-bubbly"
        onClick={moveToJoin}
      >
        가입하기
        <img
          src="https://www.svgrepo.com/show/65639/contract.svg"
          alt="가입 로고"
          className="h-16 ml-3"
        />
      </button>
      <button
        onClick={() => setShowModal(true)}
        className="fixed flex items-center right-14 bg-hanaGold text-white text-5xl font-hana2 font-bold p-6 rounded-3xl shadow-lg z-30 hover:animate-bubbly"
        style={{ bottom: "140px" }}
      >
        상담예약
        <img
          src="https://cdn-icons-png.flaticon.com/512/2798/2798186.png"
          alt="가입 로고"
          className="h-16 ml-3"
        />
      </button>
      {/* 상담 예약 폼 */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-14 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-auto">
            <p className="font-hana2 font-semibold text-5xl pb-5 mb-5">
              상담 예약을 위해 작성해주세요.
            </p>
            <hr />

            <div className="my-10 text-3xl space-y-10">
              <div>
                <label className="font-hana2 font-bold text-hanaGreen">
                  업무선택
                </label>
                <select
                  id="country"
                  name="country"
                  placeholder="dd"
                  autocomplete="country-name"
                  className="w-full p-2 border rounded mt-2 text-5xl"
                  onChange={(e) => setWorkTypeName(e.target.value)}
                >
                  <option>리빙트러스트</option>
                </select>
              </div>
              <div>
                <label className="font-hana2 font-bold text-hanaGreen">
                  성명
                </label>
                <input
                  type="text"
                  value=""
                  className="w-full p-2 border rounded mt-2 text-5xl text-gray-600"
                  disabled
                />
              </div>
              <div>
                <label className="font-hana2 font-bold text-hanaGreen">
                  연락처
                </label>
                <input
                  type="text"
                  placeholder="01012345678"
                  className="w-full p-2 border rounded mt-2 text-5xl"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label className="font-hana2 font-bold text-hanaGreen">
                  상담예약일시
                </label>
                <input
                  type="date"
                  placeholder="상담예약일시"
                  className="w-full p-2 border rounded mt-2 text-5xl"
                  onChange={(e) => setReservationDatetime(e.target.value)}
                />
              </div>
            </div>

            <Accordion>
              <Accordion.Panel isOpen={true}>
                <Accordion.Title>개인정보 수집 및 이용 동의</Accordion.Title>
                <Accordion.Content>
                  <p className="leading-snug mb-5">
                    고객님의 상담업무를 처리하기 위해서는 개인정보보호법 제15조
                    1항 및 제24조 1항에 따라 아래의 내용에 대하여 고객님의
                    동의가 필요합니다 .<br />
                  </p>
                  <p className="leading-snug mb-5">
                    <strong>1. 개인정보의 수집,이용목적</strong>
                    <br />
                    상담업무 처리를 위한 본인식별, 본인의사확인 및 상담결과 통보
                  </p>

                  <p className="leading-snug mb-5">
                    <strong>2.수집하는 개인정보의 항목</strong>
                    <br />
                    성명, 전화번호
                  </p>

                  <p className="leading-snug mb-5">
                    <strong>3. 개인정보의 보유 및 이용 기간</strong>
                    <br />위 개인정보는 수집·이용에 관한 동의일로부터 처리
                    종료일까지 위 이용목적을 위하여 보유·이용됩니다. 단,
                    (금융)거래 종료일 후에는 금융사고 조사, 분쟁해결, 민원처리,
                    볍령상 의무이행 및 당행의 리스크 관리업무만을 위하여 보유
                    이용됩니다.
                  </p>

                  <p className="leading-snug mb-5">
                    <strong>
                      4. 고객님은 개인정보 수집 및 이용을 거부할 권리가 있으며
                      권리행사 시 상담이 거부될 수 있습니다.
                    </strong>
                    <br />
                  </p>

                  <p className="leading-snug mb-5">
                    <strong>제공 항목</strong>
                    <br />
                    일반개인정보 : 성명, 생년월일
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

            <div className="bg-hanaRed/10 border border-hanaRed rounded-lg my-10 p-10">
              <p className="mb-3 font-hana2 font-bold text-hanaRed">
                개인정보 수집 및 이용 동의여부
              </p>
              <p className="leading-snug mt-10 mb-5">
                개인정보 수집 및 이용에 동의하셔야 상담이 가능합니다. 개인정보
                수집 및 이용에 동의하십니까?
              </p>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small3"
                    name="hosting3"
                    value="hosting-small3"
                    className="hidden peer"
                    onChange={(e) => setAgreement(true)}
                  />
                  <label
                    for="hosting-small3"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white rounded-lg cursor-pointer  peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100 "
                  >
                    <div className="block">
                      <div className="w-full">동의합니다.</div>
                    </div>
                    <svg
                      className="h-8 w-8 rtl:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="hosting-big3"
                    name="hosting3"
                    value="hosting-big3"
                    className="hidden peer"
                    onChange={(e) => setAgreement(false)}
                  />
                  <label
                    for="hosting-big3"
                    className="inline-flex items-center justify-between w-full p-5 text-hanaRed bg-white rounded-lg cursor-pointer  peer-checked:bg-hanaRed peer-checked:text-white hover:bg-gray-100 "
                  >
                    <div className="block">
                      <div className="w-full">동의하지 않습니다.</div>
                    </div>
                    <svg
                      className="h-8 w-8 rtl:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </label>
                </li>
              </ul>
            </div>

            <div className="space-x-5 mt-4 flex justify-end">
              <button
                onClick={() => {
                  confirmForm();
                }}
                className="p-5 bg-hanaGreen text-white rounded"
              >
                신청하기
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="p-5 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                취소하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InheritanceJoin;
