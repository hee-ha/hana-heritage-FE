import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="font-noto font-extrabold">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
