import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/system";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NextUIProvider>
        <Header />
        <main className="flex-grow p-0">
          <Outlet />
        </main>
        <Footer />
      </NextUIProvider>
    </div>
  );
};

export default Layout;
