import React from "react";
import { RecoilRoot } from "recoil";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";

function App() {
  return (
    <RecoilRoot>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <h2 className="text-2xl">Welcome to HanaHeritage</h2>
          <div className="font-hana2">
            <h1 className="font-bold">Hana2 폰트</h1>
            <p className="font-light">Hana2 폰트 Light 버전</p>
            <p className="font-medium">Hana2 폰트 Medium 버전</p>
            <p className="font-semibold">Hana2 폰트 Heavy 버전</p>
            <p className="italic">Hana2 폰트 CM 버전</p>
            <p className="font-bold">Hana2 폰트 Bold 버전</p>
          </div>
        </main>
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
