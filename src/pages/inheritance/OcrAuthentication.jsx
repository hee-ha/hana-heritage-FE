import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axiosInstance from "../../apis/axiosInstance";

const OcrAuthenticationModal = ({ show, handleClose, handleSave }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrResult, setOcrResult] = useState(null);
  const [ocrMessage, setOcrMessage] = useState("");
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axiosInstance.post("/api/ocr", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("모달 res: ", response);
      if (response.data.isSuccess) {
        setOcrResult(response.data.result.images[0]);
      } else {
        console.error("OCR 요청 실패:", response.data.message);
        alert("OCR 요청에 실패했습니다.");
      }
    } catch (error) {
      console.error("OCR 요청 실패:", error);
      alert("OCR 요청에 실패했습니다.");
    }
  };

  const handleSaveClick = () => {
    handleSave(ocrResult);
  };
  const matching = {};

  useEffect(() => {
    setOcrMessage("판독이 완료되었습니다.");
  }, [ocrResult]);

  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">OCR 인증페이지입니다</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group mb-6">
            <label className="font-hana2 font-semibold text-5xl block mb-4 text-wrap">
              이미지 파일 업로드
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-3xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
          >
            OCR 실행
          </button>
        </form>
        {ocrResult ? (
          <div className="bg-gray-100 p-4 rounded mt-4">
            <h3 className="text-2xl font-bold mb-2">{ocrMessage}</h3>
          </div>
        ) : (
          <div className="bg-gray-100 p-4 rounded mt-4">
            <h3 className="text-2xl font-bold mb-2">
              OCR 판독을 위해 문서를 넣어주세요.
            </h3>
          </div>
        )}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleClose}
            className="mr-4 bg-gray-500 text-white py-2 px-4 rounded"
          >
            취소
          </button>
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            확인
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default OcrAuthenticationModal;
