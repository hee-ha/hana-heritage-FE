import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import BankButtons from "../transfer/component/Bankbtn";
import TransferAmount from "../transfer/component/TransferAmount";
import { Link } from "react-router-dom";
import axios from "axios";

function InheritanceJoin2() {
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
    memo: "",
  });

  //   const [accounts, setAccounts] = useState([]);

  //   useEffect(() => {
  //     let url = "http://localhost/api/v1/transfer/get";

  //     axios
  //       .post(url, {
  //         id: 1,
  //       })
  //       .then((res) => {
  //         console.log("받아온 데이터: ", res.data.result);
  //         setAccounts(res.data.result);
  //       })
  //       .catch((error) => {
  //         console.log("에러: ", error);
  //       });
  //   }, []); // id를 의존성 배열에 추가

  const accounts = [
    {
      id: 1,
      name: "Young 하나통장",
      number: "하나 111-111111-111111",
      balance: "1원",
    },
    {
      id: 2,
      name: "Savings Account",
      number: "국민 222-222222-222222",
      balance: "500,000원",
    },
    {
      id: 3,
      name: "Business Account",
      number: "신한 333-333333-333333",
      balance: "1,000,000원",
    },
  ];

  const firstAccountName =
    accounts.length > 0 ? accounts[0].name : "No name available";
  const firstAccountValue =
    accounts.length > 0
      ? accounts[0].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "No balance available";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [contractDetails, setContractDetails] = useState({
    contractNumber: "",
    accountNumber: "",
    periodStart: "",
    periodEnd: "",
    principal: "",
    interest: "",
    beneficiary: {
      name: "",
      birthDate: "",
      contact: "",
      address: "",
      relationship: "",
    },
    substituteBeneficiary1: {
      name: "",
      birthDate: "",
      contact: "",
      address: "",
      relationship: "",
    },
    substituteBeneficiary2: {
      name: "",
      birthDate: "",
      contact: "",
      address: "",
      relationship: "",
    },
    amount: "",
    items: [{ type: "", material: "", quantity: "", value: "" }],
    specialNotes: "",
    representative: { address: "", contact: "", birthDate: "", name: "" },
    trustee: { signature: "" },
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setContractDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, section) => {
    const { name, value } = e.target;
    setContractDetails((prevDetails) => ({
      ...prevDetails,
      [section]: {
        ...prevDetails[section],
        [name]: value,
      },
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...contractDetails.items];
    updatedItems[index] = { ...updatedItems[index], [name]: value };
    setContractDetails((prevDetails) => ({
      ...prevDetails,
      items: updatedItems,
    }));
  };

  const handleAddItem = () => {
    setContractDetails((prevDetails) => ({
      ...prevDetails,
      items: [
        ...prevDetails.items,
        { type: "", material: "", quantity: "", value: "" },
      ],
    }));
  };

  // const handleRemoveItem = (index) => {
  //   // 새로운 배열을 만들어서 지정된 인덱스의 항목을 제외
  //   const newItems = contractDetails.items.filter((_, i) => i !== index);

  //   // contractDetails 상태를 업데이트
  //   setContractDetails((prevDetails) => ({
  //     ...prevDetails,
  //     items: newItems,
  //   }));
  // };

  const handleRemoveItem = (index) => {
    if (contractDetails.items.length > 1) {
      const newItems = [...contractDetails.items];
      newItems.splice(index, 1);
      setContractDetails({ ...contractDetails, items: newItems });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contractDetails);
    // submit the form data to an API or any other handling
  };

  return (
    <div className="mx-auto px-24 border rounded-lg shadow-lg bg-white">
      {/* <h1 className="text-2xl font-bold mb-6 text-center">신탁계약 세부내역</h1> */}
      <header className="sectionHead">
        <h2 className="font-hana2 font-semibold text-6xl z-10">
          <span className="text-hanaGreen">신탁계약 세부내역</span>을
          작성합니다.
        </h2>
        <hr />
      </header>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 text-4xl">
          <div className="form-group mt-6 mb-6 ">
            <label className="font-hana2 text-4xl">계약번호</label>
            <input
              type="text"
              name="contractNumber"
              value={contractDetails.contractNumber}
              onChange={handleChanges}
              className="w-full mt-2 p-2 border rounded"
            />
            <div className="mt-4"></div>

            <label className="font-hana2 text-4xl">계좌번호</label>
            <input
              type="text"
              name="accountNumber"
              value={contractDetails.accountNumber}
              onChange={handleChanges}
              className="w-full mt-2 p-2 border rounded"
            />

            <div className="mt-4"></div>

            <label className="font-hana2 text-4xl">신탁기간</label>
            <div className="flex space-x-4">
              <input
                type="date"
                name="periodStart"
                value={contractDetails.periodStart}
                onChange={handleChanges}
                className="w-full mt-2 p-2 border rounded"
              />
              <block>부터</block>
              <input
                type="date"
                name="periodEnd"
                value={contractDetails.periodEnd}
                onChange={handleChanges}
                className="w-full mt-2 p-2 border rounded"
              />
              <p>까지</p>
            </div>
          </div>

          {/* </div> */}

          <div className="form-group mt-6 mb-6">
            <label className="font-hana2 text-4xl">위탁자</label>
            <input
              type="text"
              name="principal"
              value={contractDetails.principal}
              onChange={handleChanges}
              className="w-full mt-2 p-2 border rounded"
            />
            <div className="mt-4"></div>

            <label className="font-hana2 text-4xl">수익자</label>
            <input
              type="text"
              name="interest"
              value={contractDetails.interest}
              onChange={handleChanges}
              className="w-full mt-2 p-2 border rounded"
            />
          </div>

          {/* <div className="form-group mt-6 mb-6">
          {contractDetails.items.map((item, index) => (
            <div key={index} className="mb-4">
              <legend className="font-hana2 text-4xl">
                사망통지인 {index + 1}
              </legend>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="type"
                  placeholder="성명"
                  value={item.type}
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="material"
                  placeholder="생년월일"
                  value={item.material}
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="quantity"
                  placeholder="연락처"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full mt-2 p-2 border rounded w-12 h-12"
                />
                <input
                  type="text"
                  name="value"
                  placeholder="위탁자와 관계"
                  value={item.value}
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="font-hana2 mt-2 p-2 bg-hanaRed text-white rounded"
                >
                  항목 삭제
                </button>
              </div>
              <div>
                <input
                  type="text"
                  name="value"
                  placeholder="주소"
                  value={item.value}
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full mt-2 p-2 border rounded"
                />
                
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddItem}
            className="font-hana2 mt-4 p-2 bg-hanaGreen text-white rounded"
          >
            항목 추가
          </button>
        </div> */}

          <div className="form-group mt-6 mb-6">
            {contractDetails.items.map((item, index) => (
              <div key={index} className="mb-4">
                <legend className="font-hana2 text-4xl">
                  사망통지인 {index + 1}
                </legend>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="type"
                    placeholder="성명"
                    value={item.type}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="material"
                    placeholder="생년월일"
                    value={item.material}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="quantity"
                    placeholder="연락처"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="value"
                    placeholder="위탁자와 관계"
                    value={item.value}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                </div>
                <div className="flex space-x-4 items-center">
                  <input
                    type="text"
                    name="address"
                    placeholder="주소"
                    value={item.address}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="font-hana2  bg-hanaRed text-white text-4xl py-3 px-10 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
                  >
                    항목 삭제
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddItem}
              className="font-hana2  bg-hanaGreen text-white py-3 px-10 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
            >
              항목 추가
            </button>
          </div>

          <div className="form-group mt-6 mb-6">
            <legend className="font-hana2 text-4xl">금전신탁</legend>
            <input
              type="text"
              name="amount"
              value={contractDetails.amount}
              onChange={handleChanges}
              className="w-full mt-2 p-2 border rounded"
            />
            <div className="mt-4"></div>

            <legend className="font-hana2 text-4xl">
              금전신탁 외 신탁재산목록
            </legend>
            {contractDetails.items.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="type"
                    placeholder="재산종류"
                    value={item.type}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="material"
                    placeholder="소재지"
                    value={item.material}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="quantity"
                    placeholder="수량"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="value"
                    placeholder="신탁가액"
                    value={item.value}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="font-hana2 mt-2 p-2 bg-hanaRed text-white py-3 px-10 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
                  >
                    항목 삭제
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddItem}
              className="font-hana2 mt-4 p-2 bg-hanaGreen text-white py-3 px-10 z-10 transition-transform transform hover:animate-bubbly rounded-lg"
            >
              항목 추가
            </button>
          </div>

          <div className="form-group mt-6 mb-6">
            <legend className="font-hana2 text-4xl">특약사항</legend>
            <textarea
              type="text"
              name="amount"
              value={contractDetails.amount}
              onChange={handleChanges}
              className="w-full mt-2 p-2 border rounded"
            />
            <div className="mt-4"></div>
          </div>

          <div className="form-group mt-6 mb-6">
            <legend className="font-hana2 text-4xl">위탁자 정보</legend>
            <input
              type="text"
              name="address"
              placeholder="주소"
              value={contractDetails.representative.address}
              onChange={(e) => handleNestedChange(e, "representative")}
              className="w-full mt-2 p-2 border rounded"
            />
            <input
              type="text"
              name="contact"
              placeholder="연락처"
              value={contractDetails.representative.contact}
              onChange={(e) => handleNestedChange(e, "representative")}
              className="w-full mt-2 p-2 border rounded"
            />
            <input
              type="date"
              name="birthDate"
              placeholder="생년월일"
              value={contractDetails.representative.birthDate}
              onChange={(e) => handleNestedChange(e, "representative")}
              className="w-full mt-2 p-2 border rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="성명"
              value={contractDetails.representative.name}
              onChange={(e) => handleNestedChange(e, "representative")}
              className="w-full mt-2 p-2 border rounded"
            />
            <div className="mt-4"></div>

            <legend className="font-hana2 text-4xl">수탁자</legend>
            <input
              type="text"
              name="signature"
              placeholder="미래에셋증권(주)"
              value={contractDetails.trustee.signature}
              onChange={(e) => handleNestedChange(e, "trustee")}
              className="w-full mt-2 p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className=" font-hana2 w-full p-4 bg-hanaGreen text-white rounded"
          >
            제출
          </button>
        </div>
      </form>
    </div>
  );
}

export default InheritanceJoin2;
