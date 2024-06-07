import { React, useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Accordion } from "flowbite-react";
import axios from "axios";
import { getDepositsDetail } from "../../apis/depositsDetail/getDepositsDetail.js";
import { addConsultingReservation } from "../../apis/consulting/addConsultingReservation.js";

function DepositsDetail() {
  const navigate = useNavigate();
  const doDepositsDetail = async () => {
    try {
      const response = await getDepositsDetail(searchParams.get("id"));
      console.log(response);
      setDepositsDetail(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const doAddConsultingReservation = async (requestBody) => {
    try {
      const response = await addConsultingReservation(requestBody);
      console.log(response);
      setDepositsDetail(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  // 예적금 상품 상세 정보
  const [depositsDetail, setDepositsDetail] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    doDepositsDetail();
  }, []);

  // 상담 신청 폼
  const [showModal, setShowModal] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [workTypeName, setWorkTypeName] = useState("예·적금");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [reservationDatetime, setReservationDatetime] = useState(null);

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

  const handleRegisterButton = (e) => {
    e.preventDefault();
    navigate("/deposits/join/1", { state: { product: depositsDetail } });
  };
  return (
    <div className="px-24 font-noto text-3xl">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          선택하신{" "}
          <span className="text-hanaGreen">
            {depositsDetail.finPrdtNm || ""}
          </span>{" "}
          안내드립니다.
        </h2>
        <hr />
      </header>
      <div className="py-10">
        <p className="font-hana2 font-semibold text-5xl pb-5">
          {depositsDetail.finPrdtNm || ""}
        </p>
        <p className="font-hana2">
          {depositsDetail.finPrdtNm || ""}으로 목돈 모아보세요!
        </p>

        <div className="grid grid-cols-2 gap-5 my-10">
          <div className="bg-hanaGold rounded-lg p-10 text-white">
            <p className="mb-5 font-hana2">종류</p>
            <p className="text-5xl font-bold mb-5 leading-snug">
              {depositsDetail.type || ""}
            </p>
          </div>
          <div className="bg-hanaGold rounded-lg p-10 text-white">
            <p className="mb-5 font-hana2">가입 대상</p>
            <p className="text-5xl font-bold mb-5 leading-snug">
              {(depositsDetail.joinMember || "")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>
          <div className="bg-hanaGold rounded-lg p-10 text-white">
            <p className="mb-5 font-hana2">가입 제한</p>
            <p className="text-5xl font-bold mb-5 leading-snug">
              {depositsDetail.joinDeny || ""}개까지 가입 가능
            </p>
          </div>
          <div className="bg-hanaGold rounded-lg p-10 text-white">
            <p className="mb-5 font-hana2">최고 한도</p>
            <p className="text-5xl font-bold mb-5 leading-snug">
              {depositsDetail.maxLimit || ""}만원
            </p>
          </div>
        </div>

        <Link>
          <button
            onClick={handleRegisterButton}
            className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
          >
            가입하기
          </button>
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
        >
          상담예약
        </button>
        <ul role="list" class="divide-y divide-hanaSilver">
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">
              01. 만기 후 이자율
            </p>
            <p className="text-5xl mb-5 leading-snug">
              {(depositsDetail.mtrtInt || "").split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">
              02. 우대 조건
            </p>
            <p className="text-5xl mb-5 leading-snug">
              {(depositsDetail.spclCnd || "").split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </li>

          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">
              03. 기타 유의사항
            </p>
            <p className="text-5xl mb-5 leading-snug">
              {(depositsDetail.etcNote || "").split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </li>
        </ul>

        <Link>
          <button
            onClick={handleRegisterButton}
            className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
          >
            가입하기
          </button>
        </Link>
        <Link to="/deposits">
          <button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            목록보기
          </button>
        </Link>
      </div>

      {/* 상담 예약 폼 */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
                  <option>예·적금</option>
                  <option>대출</option>
                  <option>외환</option>
                  <option>펀드·보험·연금·일임형ISA</option>
                  <option>폰·모바일·인터넷뱅킹</option>
                  <option>기업뱅킹</option>
                  <option>퇴직연금</option>
                </select>
              </div>
              <div>
                <label className="font-hana2 font-bold text-hanaGreen">
                  성명
                </label>
                <input
                  type="text"
                  value="황혜림"
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

export default DepositsDetail;
