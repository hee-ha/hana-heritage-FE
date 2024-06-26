import { useState } from "react";
import Identify from "./Identify";
import RegisterForm from "./RegisterForm";

function Register() {
  const [isIdentified, setIsIdentified] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [registerInfo, setRegisterInfo] = useState(null);

  const handleIdentificationSuccess = (info) => {
    console.log(info);
    const data = {
      name: info.name,
      phoneNumber: info.phoneNumber,
      identificationNumber: info.identificationNumber,
    };
    setRegisterInfo(data);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setIsIdentified(true);
    }, 2000); // 3초 후에 Signup 컴포넌트로 전환
  };

  return (
    <div>
      {showMessage ? (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-6xl font-hana2 font-semibold">
            본인확인 되었습니다.
          </h1>
        </div>
      ) : !isIdentified ? (
        <Identify onIdentifySuccess={handleIdentificationSuccess} />
      ) : (
        <RegisterForm props={registerInfo} />
      )}
    </div>
  );
}

export default Register;
