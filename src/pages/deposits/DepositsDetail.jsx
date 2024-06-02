import { React, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

function DepositsDetail() {
  const [depositsDetail, setDepositsDetail] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  
  useEffect(() => {
    // TODO : url, token 모듈에서 사용하도록 하드코딩 제거
    let url = "http://127.0.0.1:80/api/v1/deposits-products/detail?id="+searchParams.get("id");
    console.log(url);

    axios
      .get(url, {headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsImlkIjoxLCJpYXQiOjE3MTczNDE2MzUsImV4cCI6MTcxNzQyODAzNX0.Q78FMHH0YQazLrK_29Lpu94xjms2gk2E2Ngp6zUqNT0`
    }})
      .then((res) => {
        console.log("받아온 데이터: ", res.data.result);
        setDepositsDetail(res.data.result);
      })
      .catch((error) => {
        console.log("에러: ", error);
      });
  }, []);
  
  return (
    <div className="px-24 font-noto text-3xl">
      <header>
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          선택하신 <span className="text-hanaGreen">{depositsDetail.finPrdtNm}</span>{" "}
          안내드립니다.
        </h2>
        <hr />
      </header>
      <div className="py-10">
        <p className="font-hana2 font-semibold text-5xl pb-5">{depositsDetail.finPrdtNm}</p>
        <p className="font-hana2">{depositsDetail.finPrdtNm}으로 목돈 모아보세요!</p>

        <div className="grid grid-cols-2 gap-5 my-10">
          <div className="bg-hanaGold rounded-lg p-10 text-white">
            <p className="mb-5 font-hana2">종류</p>
            <p className="text-5xl font-bold mb-5 leading-snug">
              {depositsDetail.type}
            </p>
          </div>
          <div className="bg-hanaGold rounded-lg p-10 text-white">
            <p className="mb-5 font-hana2">가입 대상</p>
            <p className="text-5xl font-bold mb-5 leading-snug">
              {(depositsDetail.joinMember||"").split('\n').map((line, index) => (
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
              {depositsDetail.joinDeny}개까지 가입 가능
            </p>
          </div>
          <div className="bg-hanaGold rounded-lg p-10 text-white">
            <p className="mb-5 font-hana2">최고 한도</p>
            <p className="text-5xl font-bold mb-5 leading-snug">
              {depositsDetail.maxLimit}만원
            </p>
          </div>
        </div>

        <Link to="/deposits/join/1">
          <button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            가입하기
          </button>
        </Link>
        <button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
          상담예약
        </button>

        <ul role="list" class="divide-y divide-hanaSilver">
          <li className="justify-between gap-x-6 py-5">
            <p className="my-5 font-hana2 font-bold text-hanaGreen">
              01. 만기 후 이자율
            </p>
            <p className="text-5xl mb-5 leading-snug">
              {(depositsDetail.mtrtInt||"").split('\n').map((line, index) => (
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
              {(depositsDetail.spclCnd||"").split('\n').map((line, index) => (
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
              {(depositsDetail.etcNote||"").split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
              ))}
            </p>
          </li>
        </ul>

        <Link to="/deposits/join/1">
          <button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            가입하기
          </button>
        </Link>
        <Link to="/deposits">
          <button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            목록보기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DepositsDetail;
