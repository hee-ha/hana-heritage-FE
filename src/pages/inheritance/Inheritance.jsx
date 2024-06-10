import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Property from "./component/Property";
import Contract from "./component/Contract";
import { getInheritanceStatus } from "../../apis/inheritance/getInheritanceStatus";

function Inheritance() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const [trustId, setTrustId] = useState("");
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Contract />;
      case 1:
        return <Property props={trustId} />;
      default:
        return <Contract />;
    }
  };

  const getStatus = async () => {
    try {
      const response = await getInheritanceStatus();
      console.log(response.isSuccess == false);
      setTrustId(response.result.livingTrustId);
      if (response.code == "2010") {
        navigate("/inheritance/join");
      } else if (response.result.approved == false) {
        navigate("/inheritance/wait");
      }
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div className="px-24">
      <div className="text-center mt-10"></div>
      <div className="flex justify-center mt-10">
        <div
          className={`px-6 py-2 mx-2 text-3xl font-hana2 cursor-pointer rounded-t-lg ${
            activeTab === 0 ? "bg-hanaGreen text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab(0)}
        >
          계약서 확인
        </div>
        <div
          className={`px-6 py-2 mx-2 text-3xl font-han2 cursor-pointer rounded-t-lg ${
            activeTab === 1 ? "bg-hanaGreen text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab(1)}
        >
          내자산 조회
        </div>
      </div>
      <hr />
      <div className="mt-6">{renderContent()}</div>
      {/* <div className="parent-component">
        <button variant="primary" onClick={handleOpenModal}>
          OCR 인증
        </button>

        <OcrAuthenticationModal
          show={showModal}
          handleClose={handleCloseModal}
          handleSave={handleSaveModal}
        />

        {ocrData && (
          <div className="ocr-result">
            <h3>OCR 인증 결과</h3>
            <p>이름: {ocrData.fields[0]?.inferText}</p>
            <p>주민등록 번호: {ocrData.fields[1]?.inferText}</p>
          </div>
        )}
      </div> */}
    </div>
  );
}
export default Inheritance;
