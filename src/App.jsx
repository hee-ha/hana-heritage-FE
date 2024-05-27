import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import {
  Deposit,
  DepositDetail,
  DepositSign1,
  Home,
  Login,
  RetirementManagement,
  Saving,
  SimpleTransaction,
<<<<<<< HEAD
  Register,
  SignUpFull,
  Identify,
=======
>>>>>>> 3178d39 (chore: 충동해결(#14))
  AutoTransfer,
  TransferView,
  TransactionHistory,
} from "./pages";
import Inheritance from "./pages/inheritance/Inheritance";
import "./styles/globals.css";
import "./styles/transaction.css";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="deposit" element={<Deposit />} />
<<<<<<< HEAD
            <Route path="savings" element={<Saving />} />
            <Route path="simple-transaction" element={<SimpleTransaction />} />
            <Route path="inheritance" element={<Inheritance />} />
            <Route path="register" element={<Register />} />
            <Route path="signupFull" element={<SignUpFull />} />
            <Route path="deposit/detail" element={<DepositDetail />} />
						<Route path="deposit/sign/1" element={<DepositDetail />} />
						<Route path="deposit/sign/2" element={<DepositDetail />} />
						<Route path="deposit/sign/3" element={<DepositDetail />} />
						<Route path="deposit/sign/4" element={<DepositDetail />} />
						<Route path="saving" element={<Saving />} />
						<Route path="simple-transaction" element={<SimpleTransaction />} />
						<Route
						path="simple-transaction/TransactionHistory"
						element={<TransactionHistory />}
						/>
						<Route path="inheritance" element={<Inheritance />} />
            <Route path="auto" element={<AutoTransfer />} />
            <Route path="transferView" element={<TransferView />} />
              
=======
            <Route path="deposit/detail" element={<DepositDetail />} />
            <Route path="deposit/sign/1" element={<DepositSign1 />} />
            <Route path="deposit/sign/2" element={<DepositDetail />} />
            <Route path="deposit/sign/3" element={<DepositDetail />} />
            <Route path="deposit/sign/4" element={<DepositDetail />} />
            <Route path="saving" element={<Saving />} />
            <Route path="simple-transaction" element={<SimpleTransaction />} />
            <Route
              path="simple-transaction/TransactionHistory"
              element={<TransactionHistory />}
            />
            <Route path="inheritance" element={<Inheritance />} />
            <Route path="auto" element={<AutoTransfer />} />
            <Route path="transferView" element={<TransferView />} />
>>>>>>> 3178d39 (chore: 충동해결(#14))
            <Route
              path="retirement-management"
              element={<RetirementManagement />}
            />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
<<<<<<< HEAD

=======
>>>>>>> 3178d39 (chore: 충동해결(#14))
}

export default App;
