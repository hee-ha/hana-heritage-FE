import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import {
  Deposit,
  Home,
  Login,
  RetirementManagement,
  Saving,
  SimpleTransaction,
} from "./pages";
import Inheritance from "./pages/inheritance/Inheritance";
import Confirmation from "./pages/saving/Confirmation";
import Joinsuccess from "./pages/saving/Joinsuccess";

import "./styles/globals.css";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="savings" element={<Saving />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="simple-transaction" element={<SimpleTransaction />} />
            <Route path="inheritance" element={<Inheritance />} />
            <Route path="Joinsuccess" element={<Joinsuccess />} />
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
