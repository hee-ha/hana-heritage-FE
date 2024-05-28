import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import {
  DepositsList,
  DepositsDetail,
  DepositsJoin1,
  DepositsJoin2,
  DepositsJoin3,
  DepositsJoin4,
  Home,
  Login,
  Register,
  Identify,
  Inheritance,
  AutoTransfer,
  SimpleTransfer,
  TransferView,
  AccountDetail,
  AccountInquiry,
  AccountInquiryCard,
} from "./pages";

import "./styles/globals.css";
import "./styles/transaction.css";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* 유저 */}
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            
            {/* 이체 */}
            <Route path="simple-transfer" element={<SimpleTransfer />} />
            <Route path="auto-transfer" element={<AutoTransfer />} />
            <Route path="transfer-view" element={<TransferView />} />
            
            {/* 상속 */}
            <Route path="inheritance" element={<Inheritance />} />
            
            {/* 예적금 */}
            <Route path="deposits" element={<DepositsList />} />
            <Route path="deposits/detail" element={<DepositsDetail />} />
						<Route path="deposits/join/1" element={<DepositsJoin1 />} />
						<Route path="deposits/join/2" element={<DepositsJoin2 />} />
						<Route path="deposits/join/3" element={<DepositsJoin3 />} />
						<Route path="deposits/join/4" element={<DepositsJoin4 />} />
            
						<Route path="account" element={<AccountInquiry />} />
						<Route path="account/detail" element={<AccountDetail />} />
            
              
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );

}

export default App;
