import { React, useState } from "react";
import { Accordion } from "flowbite-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function AccountCreation1() {
  const navigate = useNavigate();
  const location = useLocation();
  const productDetail = location.state?.product || {};
  // 1. 수집‧이용에 관한 사항
  const [agreeForCollection, setAgreeForCollection] = useState(false);
  const [agreeForReceiveAdvertising, setAgreeForReceiveAdvertising] =
    useState(null);
  const [checkboxes, setCheckboxes] = useState({
    sms: false,
    phone: false,
    mail: false,
    post: false,
  });

  // 2. 제공에 관한 사항
  const [agreeForProvision, setAgreeForProvision] = useState(false);

  // 광고 동의 X 버튼을 클릭했다면
  const setAdvertisingFalse = () => {
    setAgreeForReceiveAdvertising(false);
    setCheckboxes({
      sms: false,
      phone: false,
      mail: false,
      post: false,
    });
  };

  // 광고 동의 O 버튼을 클릭했다면
  const setAdvertisingTrue = () => {
    setAgreeForReceiveAdvertising(true);
    setCheckboxes({
      sms: true,
      phone: true,
      mail: true,
      post: true,
    });
  };

  // 문자, 전화, 메일, 우편 중 하나라도 클릭된다면
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxes((prevState) => ({ ...prevState, [id]: checked }));

    // 동의로 클릭된거라면
    if (checked === true) {
      setAgreeForReceiveAdvertising(true);
    }

    // 비동의로 클릭된거라면
    if (checked === false) {
      const allFalse = Object.entries(checkboxes)
        .filter(([key]) => key !== id)
        .every(([key, value]) => value === false);
      if (allFalse) {
        setAgreeForReceiveAdvertising(false);
      }
    }
  };

  console.log(productDetail);
  // 모두 동의했을 때 다음 페이지로 이동
  const goNextPage = () => {
    if (agreeForCollection === false) {
      alert("개인(신용)정보 수집·이용에 동의 시만 가입 가능합니다.");
    } else if (agreeForReceiveAdvertising === null) {
      alert(
        "전자적 전송매체를 통한 광고성 정보의 수신의 동의 여부를 선택해주세요.",
      );
    } else if (agreeForProvision === false) {
      alert("개인(신용)정보 제공에 동의 시만 가입 가능합니다.");
    } else {
      navigate("/account/creation/2");
    }
  };
  return (
    <div className="px-24 font-noto text-3xl">
      <header className="my-10">
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          <span className="text-hanaGreen">입·출금통장 개설</span> 진행
          중입니다.
        </h2>
        <hr />
      </header>

      {/* Stepper */}
      <ol className="my-10 flex items-center w-full p-4 space-x-4 text-sm font-medium text-center bg-white border border-hanaSilver rounded-lg shadow-sm sm:text-base  rtl:space-x-reverse">
        <li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
            1
          </span>
          약관동의
          <svg
            className="w-7 h-7 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
            2
          </span>
          정보입력
          <svg
            className="w-7 h-7 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
            3
          </span>
          정보확인
          <svg
            className="w-7 h-7 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center text-hanaSilver  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaSilver rounded-full shrink-0">
            4
          </span>
          개설완료
        </li>
      </ol>

      <div className="pb-10">
        <p className="font-hana2 font-semibold text-5xl pb-5">
          마케팅 목적 이용 제공
        </p>
        <p className="font-hana2 leading-snug">
          이 상품에서 제공하는 우대금리( 0.2% )는 아래 내용의 각 항목들에 대해
          모두 동의를 하시는 경우에만 제공됩니다.
        </p>
      </div>

      <div className="bg-hanaSilver rounded-lg p-10 text-white mb-10">
        <p className="mb-5 font-hana2 font-bold">
          개인(신용)정보 수집 이용 및 제공 동의서 (상품서비스 안내 등)
        </p>
        <p className="leading-snug">
          ㈜하나은행 귀중 귀 행이 상품서비스 안내 등을 위하여 본인의
          개인(신용)정보를 수집·이용하거나 제3자에게 제공하고자 하는 경우에는
          「신용정보의 이용 및 보호에 관한 법률」, 「개인정보보호법」등 관계
          법령에 따라 본인의 동의가 필요합니다.
          <br />▶ 아래에서 (금융)거래라 함은 은행업무(여신, 수신, 외국환),
          겸영업무(신탁, 펀드, 방카슈랑스, 신용카드 등),부수업무(보증, 팩토링,
          대여금고, 보호예수 등)와 관련된 거래를 의미합니다.
        </p>
      </div>

      {/* 약관 - 1 */}
      <Accordion>
        <Accordion.Panel isOpen={true}>
          <Accordion.Title>1. 수집‧이용에 관한 사항</Accordion.Title>
          <Accordion.Content>
            <p className="leading-snug mb-5">
              <strong>수집‧이용 목적</strong>
              <br />- 하나은행 및 하나금융그룹 계열사의 상품 또는 서비스의 안내
              및 이용권유, 경품지급, 고객관리, 마케팅 조사
            </p>

            <p className="leading-snug mb-5">
              <strong>보유·이용 기간</strong>
              <br />
              (금융)거래 종료일 또는 동의 철회 시까지 보유·이용
              <br />* 위 보유 기간에서의 (금융)거래 종료일이란 “당 행과 거래중인
              모든 계약(여·수신, 내·외국환, 카드 및 제3자 담보 제공 등) 해지 및
              서비스(대여금고, 보호예수, 외국환거래지정, 인터넷뱅킹 포함
              전자금융거래 등)가 종료된 날”을 말합니다.
            </p>

            <p className="leading-snug mb-5">
              <strong>거부 권리 및 불이익</strong>
              <br />위 개인(신용)정보 수집·이용에 관한 동의는 거부하실 수
              있으며, “상품서비스의 홍보 및 권유를 위한” 선택적 사항이므로
              동의하지 않더라도 (금융)거래 계약의 체결 및 이행에는 제한이
              없습니다. 다만, 동의하지 않으시는 경우 “상품서비스 안내 및
              이용권유, 경품지급, 고객관리 등”의 혜택을 받지 못할 수 있습니다.
            </p>

            <p className="leading-snug mb-5">
              <strong>수집‧이용할 항목</strong>
              <br />
              일반개인정보 : 성명, 생년월일, 성별, 주소, 직장정보, 국적,
              전자우편주소, 전화번호, 휴대폰번호, CI, 온라인기기
              광고식별자(ADID, IDFA등)
              <br />
              신용거래정보 : 상품종류, 거래조건, 거래일시, 금액
              ,거래설정정보.거래내역
            </p>

            <p className="leading-snug mb-5">
              <strong>개인정보 처리 위탁에 대한 안내</strong>
              <br />
              우편, 택배 등에 의한 사은품, 경품 및 홍보물 등 배송업무 수행하는
              두레시닝㈜, ㈜국민지에스, 외향산업㈜, ㈜다올커머스, ㈜아워홈 등
              업무 수탁자에게 제공합니다.
              <br />
              문자메시지 방식의 사은품, 경품 및 홍보물 등 전송 업무 수행하는
              ㈜케이티, (주)쿠프마케팅, ㈜LG유플러스, ㈜엠티에스컴퍼니 등
              문자메시지 서비스 업무 수탁자에게 제공합니다.
              <br />
              상품 또는 서비스 홍보 및 구매권유, 마케팅 조사(고객 만족도 조사
              등)를 아이비커리어㈜, ㈜한국고용정보, 외향산업㈜, 고객센터등 업무
              수탁자에게 제공합니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      {/* 동의 체크 - 1 */}
      <div className="bg-hanaRed/10 border border-hanaRed rounded-lg my-10 p-10">
        <p className="mb-3 font-hana2 font-bold text-hanaRed">
          수집 이용 동의 여부
        </p>
        <p className="leading-snug mt-10 mb-5">
          (1) 위 개인(신용)정보 수집·이용에 동의하십니까?
        </p>
        <ul className="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              onChange={(e) => setAgreeForCollection(true)}
              required
            />
            <label
              for="hosting-small"
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
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              onChange={(e) => setAgreeForCollection(false)}
              className="hidden peer"
            />
            <label
              for="hosting-big"
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

        <p className="leading-snug mt-10 mb-5">
          (2) 전자적 전송매체를 통한 광고성 정보의 수신을 동의하시겠습니까?{" "}
          <br />
          <span className="text-black/50">
            ※ [귀 행]은 상품서비스 안내 등 수집·이용 목적을 달성하기 위하여 위의
            동의한 안내수단으로 본인에게 연락할 수 있습니다.
          </span>
        </p>
        <ul className="grid w-full gap-6 md:grid-cols-4 mb-5">
          <li>
            <input
              type="checkbox"
              id="sms"
              value=""
              className="hidden peer"
              checked={checkboxes.sms}
              onChange={handleCheckboxChange}
            />
            <label
              for="sms"
              className="inline-flex items-center justify-between w-full h-full p-5 text-hanaSilver bg-white border-2 rounded-lg cursor-pointer peer-checked:border-hanaRed   peer-checked:text-hanaRed hover:bg-gray-50"
            >
              <div className="block">
                <div className="">
                  문자 메세지
                  <br />
                  (SMS, LMS 등)
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="phone"
              value=""
              className="hidden peer"
              checked={checkboxes.phone}
              onChange={handleCheckboxChange}
            />
            <label
              for="phone"
              className="inline-flex items-center justify-between w-full h-full p-5 text-hanaSilver bg-white border-2 rounded-lg cursor-pointer peer-checked:border-hanaRed   peer-checked:text-hanaRed hover:bg-gray-50"
            >
              <div className="block">
                <div>전화</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="mail"
              value=""
              className="hidden peer"
              checked={checkboxes.mail}
              onChange={handleCheckboxChange}
            />
            <label
              for="mail"
              className="inline-flex items-center justify-between w-full h-full p-5 text-hanaSilver bg-white border-2 rounded-lg cursor-pointer peer-checked:border-hanaRed   peer-checked:text-hanaRed hover:bg-gray-50"
            >
              <div className="block">
                <div className="">
                  전자우편
                  <br />
                  (이메일)
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="post"
              value=""
              className="hidden peer"
              checked={checkboxes.post}
              onChange={handleCheckboxChange}
            />
            <label
              for="post"
              className="inline-flex items-center justify-between w-full h-full p-5 text-hanaSilver bg-white border-2 rounded-lg cursor-pointer peer-checked:border-hanaRed   peer-checked:text-hanaRed hover:bg-gray-50"
            >
              <div className="block">
                <div className="">우편, 택배 등</div>
              </div>
            </label>
          </li>
        </ul>
        <ul className="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="hosting-small2"
              name="hosting2"
              value="hosting-small2"
              className="hidden peer"
              checked={agreeForReceiveAdvertising}
              onChange={(e) => setAdvertisingTrue()}
              required
            />
            <label
              for="hosting-small2"
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
              id="hosting-big2"
              name="hosting2"
              value="hosting-big2"
              className="hidden peer"
              checked={agreeForReceiveAdvertising === false}
              onChange={(e) => setAdvertisingFalse()}
            />
            <label
              for="hosting-big2"
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

      {/* 약관 - 2 */}
      <Accordion>
        <Accordion.Panel isOpen={true}>
          <Accordion.Title>2. 제공에 관한 사항</Accordion.Title>
          <Accordion.Content>
            <p className="leading-snug mb-5">
              <strong>제공받는 자</strong>
              <br />
              하나금융그룹계열사 : 하나금융투자㈜, 하나카드㈜, 하나캐피탈㈜,
              하나생명보험㈜, 하나손해보험㈜, ㈜하나저축은행, (주)핀크,
              ㈜하나자산신탁 등.
            </p>

            <p className="leading-snug mb-5">
              <strong>제공받는자의 이용 목적</strong>
              <br />
              하나은행에서 발생한 하나금융그룹 계열사등의 상품 또는 서비스의
              홍보비용 정산
            </p>

            <p className="leading-snug mb-5">
              <strong>보유 및 이용기간</strong>
              <br />
              개인(신용)정보 동의일로부터 2년 또는 동의철회 시까지 보유·이용
            </p>

            <p className="leading-snug mb-5">
              <strong>거부 권리 및 불이익</strong>
              <br />위 개인(신용)정보 수집·이용에 관한 동의는 거부하실 수
              있으며, “상품서비스의 홍보 및 권유를 위한” 선택적 사항이므로
              동의하지 않더라도 (금융)거래 계약의 체결 및 이행에는 제한이
              없습니다. 다만, 동의하지 않으시는 경우 “상품서비스 홍보 및 권유”를
              받으실 수 없습니다.
            </p>

            <p className="leading-snug mb-5">
              <strong>제공 항목</strong>
              <br />
              일반개인정보 : 성명, 생년월일
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      {/* 동의 체크 - 2 */}

      <div className="bg-hanaRed/10 border border-hanaRed rounded-lg my-10 p-10">
        <p className="mb-3 font-hana2 font-bold text-hanaRed">
          개인(신용)정보 제공 동의여부
        </p>
        <p className="leading-snug mt-10 mb-5">
          (1) 위 개인(신용)정보 제공에 동의하십니까?
        </p>
        <ul className="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="hosting-small3"
              name="hosting3"
              value="hosting-small3"
              className="hidden peer"
              onChange={(e) => setAgreeForProvision(true)}
              required
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
              onChange={(e) => setAgreeForProvision(false)}
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

      <div className="my-10 px-10">
        <ul className="list-disc">
          <li className="leading-snug">
            본인은 본 동의서의 내용을 이해하였으며, 개인(신용)정보
            수집∙이용∙제공에 관한 고객 권리안내문에 관하여 자세히 설명을 듣고
            수령하였습니다.
          </li>
          <li className="leading-snug">
            은행의 고의 또는 과실 등 귀책사유로 인한 개인정보 유출로 손님에게
            손해가 발생할 경우 관계 법령 등에따라 보상받으실 수 있습니다.
          </li>
          <li className="leading-snug">
            본 동의 이전에 발생한 개인(신용)정보도 수집·이용·제공 대상에
            포함됩니다.
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <div className="flex-grow">
          <button
            onClick={goNextPage}
            className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
          >
            다음
          </button>
        </div>
        <Link to={"/deposits"} className="flex-grow ml-4">
          <button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            취소
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AccountCreation1;
