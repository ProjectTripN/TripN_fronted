import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        localStorage.clear(e);
        navigate("/");
      }}
    >
      {" "}
      로그아웃
    </button>
  );
}
