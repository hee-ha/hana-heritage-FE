import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/admin/settlement");
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default AdminHome;
