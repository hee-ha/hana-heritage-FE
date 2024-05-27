import React, { useState } from "react";

function TransferAmount({ formData, setFormData, handleChange }) {
  // +입금 금액 버튼 함수
  const addAmount = (value) => {
    const currentAmount = parseInt(stripCommas(formData.amount)) || 0;
    if (!isNaN(currentAmount)) {
      setFormData({
        ...formData,
        amount: formatCurrency((currentAmount + value).toString()),
      });
    }
  };
  const formatCurrency = (value) => {
    if (value === "") return "";
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const stripCommas = (value) => {
    if (value === "") return "";
    return value.replace(/,/g, "");
  };

  const handleAmountChange = (e) => {
    const { value } = e.target;
    const strippedValue = stripCommas(value);
    if (!isNaN(strippedValue) && strippedValue !== "") {
      e.target.value = formatCurrency(strippedValue);
    }
    handleChange(e);
  };
  const korPriceFormatter = (number) => {
    number = stripCommas(number);
    var inputNumber = number < 0 ? false : number;
    var unitWords = ["", "만", "억", "조", "경"];
    var splitUnit = 10000;
    var splitCount = unitWords.length;
    var resultArray = [];
    var resultString = "";
    for (var i = 0; i < splitCount; i++) {
      var unitResult =
        (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);
      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }
    for (var i = 0; i < resultArray.length; i++) {
      if (!resultArray[i]) continue;
      resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString + "원";
  };

  return (
    <>
      <input
        type="text"
        name="amount"
        value={formData.amount}
        onChange={handleAmountChange}
        placeholder="1,000,000"
        className="w-full font-noto text-3xl p-2 border border-gray-300 rounded-md mb-4"
      />
      <div className="flex text-3xl justify-between mb-4">
        <button
          onClick={() => addAmount(10000)}
          className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1"
        >
          +1만
        </button>
        <button
          onClick={() => addAmount(50000)}
          className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1"
        >
          +5만
        </button>
        <button
          onClick={() => addAmount(100000)}
          className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1"
        >
          +10만
        </button>
        <button
          onClick={() => addAmount(1000000)}
          className="flex-1 bg-white p-2 rounded-md border border-gray-300 mx-1"
        >
          +100만
        </button>
      </div>
      {formData.amount !== "" && parseInt(formData.amount) > 0 && (
        <p className="text-3xl font-hana2 font-semibold text-right">
          {korPriceFormatter(formData.amount)}
        </p>
      )}
    </>
  );
}
export default TransferAmount;
