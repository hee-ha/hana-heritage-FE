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
  AutoTransfer,
  TransferView,
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
						<Route path="deposit/detail" element={<DepositDetail />} />
						<Route path="deposit/sign/1" element={<DepositSign1 />} />
						<Route path="deposit/sign/2" element={<DepositDetail />} />
						<Route path="deposit/sign/3" element={<DepositDetail />} />
						<Route path="deposit/sign/4" element={<DepositDetail />} />
						<Route path="saving" element={<Saving />} />
						<Route path="simple-transaction" element={<SimpleTransaction />} />
						<Route path="inheritance" element={<Inheritance />} />
            <Route path="auto" element={<AutoTransfer />} />
            <Route path="transferView" element={<TransferView />} />
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
}

export default App;
