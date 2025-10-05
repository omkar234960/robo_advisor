import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("obo_user");
    navigate("/login");
  }, [navigate]);

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold text-yellow-400">Logging out...</h1>
    </div>
  );
}
