import React from "react";
import { useLocation } from "react-router-dom";
import { autoTransfer } from "../../apis/transfer/autoTransfer";
import { Transfer } from "../../apis/transfer/simpleTransfer";

function TransferView() {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const type = location.state?.type || "";
  const accountNumber = location.state?.selectedAccount || "";

  console.log(formData);
  console.log(accountNumber);
  console.log(type);

  const formDataToSend = {
    ...formData,
    amount: parseInt(formData.amount.replace(/,/g, "")),
  };

  const doTransfer = async (formDataToSend) => {
    try {
      const response = await Transfer(formDataToSend);
      if (response.isSuccess) {
        console.log(response.result);
        alert("이체 성공하셨습니다!");
        window.location.href = "/transfer/history";
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const doAutoTransfer = async (formDataToSend) => {
    try {
      const response = await autoTransfer(formDataToSend);
      // console.log(response);
      if (response.isSuccess) {
        console.log(response.result);
        window.location.href = "/";
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "simple") {
      doTransfer(formDataToSend);
    } else if (type === "auto") {
      doAutoTransfer(formDataToSend);
    }
  };

  return (
    <div className="px-24">
      <header className="sectionHead">
        <h2 className="font-hana2 font-semibold text-6xl z-10">
          작성하신 이체 정보입니다.
        </h2>
        <hr />
      </header>
      <main className="flex flex-col items-center flex-grow p-4">
        <div className="text-5xl font-noto font-semibold mb-10">
          <span className="text-hanaGreen">{formData.recipientBank}은행</span>{" "}
          <span className="text-hanaGreen">{formData.recipientRemarks}</span>
          님께 <span className="text-hanaGreen">{formData.amount}</span>원을
          이체합니다.
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="bg-white font-noto text-3xl rounded-lg shadow-lg p-6 mt-6">
            <div className="space-y-8">
              <div className="flex justify-between">
                <span className="font-hana2 text-gray-400 text-4xl">
                  출금계좌
                </span>
                <span>{accountNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-hana2 text-gray-400 text-4xl">
                  입금계좌
                </span>
                <span>{formData.recipientAccountNumber}</span>
                {type === "auto" && <span>{formData.toAccountNumber}</span>}
              </div>
              <div className="flex justify-between">
                <span className="font-hana2 text-gray-400 text-4xl">
                  이체금액
                </span>
                <span>{formData.amount}원</span>
              </div>
              <div className="flex justify-between">
                <span className="font-hana2 text-gray-400 text-4xl">
                  수수료
                </span>
                <span>면제</span>
              </div>
              <div className="flex justify-between">
                <span className="font-hana2 text-gray-400 text-4xl">
                  받는분에게 표기
                </span>
                <span>{formData.recipientRemarks}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-hana2 text-4xl text-gray-400">
                  나에게 표기
                </span>
                <span>{formData.senderRemarks}</span>
              </div>

              {type === "auto" && (
                <>
                  <div className="flex justify-between">
                    <span className="font-hana2 text-gray-400 text-4xl">
                      자동이체 일자
                    </span>
                    <span>매달 {formData.autoTransferDay}일</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-hana2 text-gray-400 text-4xl">
                      자동이체 기간
                    </span>
                    <span>
                      {formData.startDate} ~ {formData.endDate}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          <button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            이체하기
          </button>
        </form>
      </main>
    </div>
  );
}

export default TransferView;
