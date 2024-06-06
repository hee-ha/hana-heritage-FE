import React, { useState } from "react";
import axiosInstance from "../../apis/axiosInstance";

const OcrAuthentication = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrResult, setOcrResult] = useState(null);

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

  return (
    <div className="px-24">
      <header className="sectionHead">
        <h2 className="font-hana2 font-semibold text-6xl z-10">
          <span className="text-hanaGreen">OCR 인증페이지입니다</span>
        </h2>
        <hr />
      </header>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group mb-6">
          <label className="font-hana2 font-semibold text-5xl block mb-4">
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
      {ocrResult && (
        <div className="bg-gray-100 p-4 rounded mt-4">
          <h3 className="text-2xl font-bold mb-2">OCR 결과</h3>
          <pre className="text-3xl">이름: {ocrResult.fields[0]?.inferText}</pre>
          <pre className="text-3xl">
            주민등록 번호: {ocrResult.fields[1]?.inferText}
          </pre>
        </div>
      )}
    </div>
  );
};

export default OcrAuthentication;
