import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { createAccount } from "../../apis/account/createAccount";
import OcrAuthenticationModal from "../inheritance/OcrAuthentication";
import PicComponent from "../../components/common/FaceId/PicComponent";

function AccountCreation3() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : location.state?.formData || {};
  });
  const [userId, setUserId] = useState(() => {
    const savedUserId = localStorage.getItem("userId");
    return savedUserId ? JSON.parse(savedUserId) : location.state?.userId;
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가
  const [ocrData, setOcrData] = useState(null); // OCR 데이터 상태 추가
  const [isPicModalOpen, setIsPicModalOpen] = useState(false);

  useEffect(() => {
    if (location.state?.formData) {
      localStorage.setItem("formData", JSON.stringify(location.state.formData));
    }
    if (location.state?.userId) {
      localStorage.setItem("userId", JSON.stringify(location.state.userId));
    }
  }, [location.state]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCreateButton = () => {
    setShowModal(true); // 개설 버튼 클릭 시 모달을 띄움
  };

  const handleCloseModal = () => setShowModal(false);
  const handleSaveModal = (data) => {
    setOcrData(data);
    setShowModal(false);
    createAccountRequest(); // OCR 인증 후 계좌 생성 요청
  };

  const createAccountRequest = () => {
    let accountInfo = {
      accountName: formData.accountName,
      accountPassword: formData.password,
    };

    setIsPicModalOpen(true);

    setTimeout(() => {
      doCreate(accountInfo);
    }, 4500);
  };

  const doCreate = async (data) => {
    try {
      const response = await createAccount(data);

      if (response.isSuccess) {
        navigate("/account/creation/4", { state: { ...response.result } });
        localStorage.removeItem("formData"); // 계좌 생성 후 저장된 데이터 제거
        localStorage.removeItem("userId");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Failed to fetch response:", error);
    }
  };

  return (
    <div className="px-24 font-noto text-3xl">
      <header className="my-10">
        <h2 className="font-hana2 font-semibold text-6xl py-10">
          <span className="text-hanaGreen">계좌 개설</span> 진행 중입니다.
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
        <li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
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
        <li className="flex items-center text-hanaGreen  font-hana2 text-3xl">
          <span className="flex items-center justify-center w-9 h-9 me-4 border-4 border-hanaGreen rounded-full shrink-0">
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

      <div class="my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-3xl text-left rtl:text-right text-black dark:text-gray-400">
          <thead class="text-3xl text-hanaGold uppercase bg-hanaGold/20 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3" style={{ width: "300px" }}>
                구분
              </th>
              <th scope="col" class="px-6 py-3">
                입력 내용
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                style={{ width: "300px" }}
                class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                계좌별명
              </th>
              <td class="px-6 py-4">{formData.accountName}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                style={{ width: "300px" }}
                class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                계좌 비밀번호
              </th>
              <td class="px-6 py-4">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  size="4"
                  readOnly
                />
                <button
                  className="w-100 text-black/55 font-noto font-semibold text-3xl bg-hanaSilver p-2 rounded-lg"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "숨기기" : "확인하기"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <Link onClick={handleCreateButton} className="flex-grow">
          <button className="w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            개설
          </button>
          {isPicModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <PicComponent closeModal={() => setIsPicModalOpen(false)} />
              </div>
            </div>
          )}
        </Link>
        <Link to={"/deposits"} className="flex-grow ml-4">
          <button className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg">
            취소
          </button>
        </Link>
      </div>

      <OcrAuthenticationModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveModal}
      />
    </div>
  );
}

export default AccountCreation3;
