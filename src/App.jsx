import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "aos/dist/aos.css"; // AOS CSS 파일 가져오기
import AOS from "aos";

import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";
import {
  AccountCreation1,
  AccountCreation2,
  AccountCreation3,
  AccountCreation4,
  AccountDetail,
  AccountInquiry,
  AdminHome,
  ConsultingRevew,
  DepositsPreference,
  InheritanceReview,
  Mail,
  Settlement,
  DepositsDetail,
  DepositsJoin1,
  DepositsJoin2,
  DepositsJoin3,
  DepositsJoin4,
  DepositsList,
  Home,
  Inheritance,
  InheritanceJoin2,
  InheritancePrepList,
  AutoTransfer,
  SimpleTransfer,
  TransferHistory,
  TransferHome,
  TransferView,
  Login,
  Register,
  AccountHome,
} from "./pages";
import "./styles/globals.css";
import "./styles/transaction.css";
import ScrollToTop from "./components/common/route/ScrollToTop";
import { AuthProvider, useAuthContext } from "./context/authContext";
import { getAuth, authState, signOut } from "./states/authState";
import InheritanceJoin from "./pages/inheritance/InheritanceJoin";
import Property from "./pages/inheritance/component/Property";
import OcrAuthentication from "./pages/inheritance/OcrAuthentication";

function App() {
  const { auth, setAuth } = useAuthContext();

  useEffect(() => {
    const storedAuth = getAuth();
    if (storedAuth) {
      setAuth(storedAuth);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      once: true, // 애니메이션이 한 번만 실행되도록 설정
    });
  }, []);

  return (
    <AuthProvider>
      <RecoilRoot>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* 어드민 */}
            <Route path="/admin/" element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="settlement" element={<Settlement />} />
              <Route
                path="deposits-preference"
                element={<DepositsPreference />}
              />
              <Route
                path="inheritance-review"
                element={<InheritanceReview />}
              />
              <Route path="consulting-review" element={<ConsultingRevew />} />
              <Route path="mail" element={<Mail />} />
            </Route>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* 유저 */}
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />

              {/* 이체 */}
              <Route path="transfer" element={<TransferHome />} />
              <Route path="transfer/simple" element={<SimpleTransfer />} />
              <Route path="transfer/auto" element={<AutoTransfer />} />
              <Route path="transfer/confirm" element={<TransferView />} />
              <Route path="transfer/history" element={<TransferHistory />} />

              {/* 상속 */}
              <Route path="inheritance" element={<Inheritance />} />
              <Route path="inheritance/join/2" element={<InheritanceJoin2 />} />
              <Route path="inheritance/preplist" element={<InheritancePrepList />} />
              <Route path="inheritance/join" element={<InheritanceJoin />} />
                
              <Route path="inheritance/ocr" element={<OcrAuthentication />} />
                

              {/* 예적금 */}
              <Route path="deposits" element={<DepositsList />} />
              <Route path="deposits/detail" element={<DepositsDetail />} />
              <Route path="deposits/join/1" element={<DepositsJoin1 />} />
              <Route path="deposits/join/2" element={<DepositsJoin2 />} />
              <Route path="deposits/join/3" element={<DepositsJoin3 />} />
              <Route path="deposits/join/4" element={<DepositsJoin4 />} />

              {/* 내 계좌 */}
              <Route path="account" element={<AccountInquiry />} />
              <Route path="account/detail" element={<AccountDetail />} />

              {/* 계좌 개설 */}
              <Route path="account/home" element={<AccountHome />} />
              <Route path="account/creation/1" element={<AccountCreation1 />} />
              <Route path="account/creation/2" element={<AccountCreation2 />} />
              <Route path="account/creation/3" element={<AccountCreation3 />} />
              <Route path="account/creation/4" element={<AccountCreation4 />} />
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </AuthProvider>
  );
}

export default App;
