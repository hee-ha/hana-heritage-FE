import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import PicComponent from "../../components/common/FaceId/PicComponent";

function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [phoneNumber3, setPhoneNumber3] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login } = useLogin();
  const navigate = useNavigate();
  const [isPicModalOpen, setIsPicModalOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const phoneNumber = `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`;
    login(
      { phoneNumber, password },
      {
        onSuccess: () => {
          setIsPicModalOpen(true);
        },
      },
    );
  };
  const openPicModal = () => {
    setIsPicModalOpen(true);
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-grow flex items-center justify-center h-screen p-0">
      {isLoading ? (
        <h1 className="text-black font-hana2 font-semibold text-6xl">
          로그인 화면으로 이동합니다
        </h1>
      ) : (
        <div className="container mx-auto p-8 mb-12 bg-white rounded-xl shadow-xl">
          <header className="text-center">
            <h2 className="font-hana2 font-semibold text-6xl py-8 ">로그인</h2>
          </header>
          <form className="space-y-20 mt-12" onSubmit={handleLogin}>
            <div className="relative h-16 w-full min-w-[200px]">
              <div className="flex justify-center items-center space-x-2">
                <input
                  placeholder=""
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  maxLength="3"
                  value={phoneNumber1}
                  onChange={(e) => setPhoneNumber1(e.target.value)}
                />
                <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-10 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  전화번호를 입력해주세요.
                </label>
                <span className="text-6xl text-blue-gray-700">-</span>
                <input
                  placeholder=""
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  maxLength="4"
                  value={phoneNumber2}
                  onChange={(e) => setPhoneNumber2(e.target.value)}
                />
                <span className="text-6xl text-blue-gray-700">-</span>
                <input
                  placeholder=""
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  maxLength="4"
                  type="password"
                  value={phoneNumber3}
                  onChange={(e) => setPhoneNumber3(e.target.value)}
                />
              </div>
            </div>

            <div className="relative h-16 w-full min-w-[200px]">
              <div className="flex justify-center items-center space-x-2">
                <input
                  type="password"
                  placeholder=""
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-5xl font-hana2 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="text-2xl after:content[''] pointer-events-none absolute left-0 -top-10 flex h-full w-full select-none !overflow-visible truncate font-hana2 leading-tight text-gray-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-4xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  비밀번호를 입력해주세요.
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                className="col w-full text-white font-hana2 font-semibold text-5xl bg-hanaRed py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
              >
                로그인
              </button>
              {isPicModalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <PicComponent closeModal={() => setIsPicModalOpen(false)} />
                  </div>
                </div>
              )}
              <button
                type="button"
                onClick={navigateToRegister}
                className="w-full text-hanaGreen font-hana2 font-semibold text-5xl border-4 border-hanaGreen py-3 px-8 z-10 mt-4 transition-transform transform hover:animate-bubbly rounded-lg"
              >
                회원가입하기
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
