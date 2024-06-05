import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDepositsList } from "../../apis/depositsList/getDepositsList.js";
import { searchDepositsList } from "../../apis/depositsList/searchDepositsList.js";
import { getMyInfo } from "../../apis/customer/getMyInfo";



function DepositsList() {
  
  const navigate = useNavigate();

  const navigateToPurchase = (id) => {
    navigate(`/deposits/detail?id=${id}`);
  };

  
  const doGetDepositsList = async () => {
    try {
      const response = await getDepositsList();
      console.log(response);
      setDepositsList(response.result);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const [depositsList, setDepositsList] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [name, setName] = useState("");

  const doSearchDepositsList = async () => {
    try {
      if (searchWord) {
        const response = await searchDepositsList(searchWord);
        console.log(response);
        setDepositsList(response.result);
      } else {
        navigate("/deposits");
      }
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const doMyInfo = async () => {
    try {
      const response = await getMyInfo();
      setName(response.result.name);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const renderJoinMember = (joinMember) => {
    return joinMember
      .split(".")
      .map((line, index) => <div key={index}>{line}</div>);
  };


  const formatCurrency = (number) => {
    if (number === null) {
      return "없음";
    }
    let formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formatted;
  };

  useEffect(() => {
    doGetDepositsList();
    doSearchDepositsList();
    doMyInfo();
  }, []);

  return (
    <div className="px-24 mb-24">
      <div className="flex flex-col mt-20 font-hana2 font-semibold text-6xl">
        {name} 고객님이 가입 가능한
      </div>
      <div className="flex flex-row mt-5 font-hana2 font-semibold text-6xl">
        <span className="text-hanaGreen">예·적금 상품 목록</span> &nbsp; 입니다.
      </div>
      <div className="flex items-center mt-12">
        <input
          type="text"
          id="success"
          className="border font-hana2 placeholder-Gray dark:placeholder-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 block w-1/2 p-3 dark:bg-gray-700 dark:border-green-500 shadow-md hover:shadow-lg duration-300 ease-in-out text-3xl"
          placeholder="검색"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button
          className="ml-4 w-1/5 text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10  transition-transform transform hover:animate-bubbly rounded-lg"
          onClick={doSearchDepositsList}
        >
          검색하기
        </button>
      </div>
      <ol>
        {depositsList.map((depositslist) => (
          <li key={depositslist.id}>
            <hr className="mt-12 mb-12"></hr>
            <span className="text-center font-semibold font-hana2 text-5xl mb-5">
              {depositslist.fin_prdt_nm} <br />
              <br />
            </span>
            <span
              style={{
                display: "inline-block",
                textAlign: "right",
                width: "100%",
              }}
              className="font-hana2 text-3xl"
            >
              가입대상
              <br />
            </span>
            <div className="flex justify-between w-full">
              <span className="font-hana2 text-3xl">
                최고한도: {formatCurrency(depositslist.max_limit) === "없음"? "없음"
                : formatCurrency(depositslist.max_limit)+"원"}
              </span>
              <span className="font-hana2 text-5xl font-bold text-hanaRed">
                {renderJoinMember(depositslist.join_member)}
              </span>
            </div>
            <span className="text-3xl font-hana2 flex items-center justify-end w-full">
              <button
                onClick={() => navigateToPurchase(depositslist.id)}
                type="submit"
                className="w-1/5 text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
              >
                가입하기
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DepositsList;
