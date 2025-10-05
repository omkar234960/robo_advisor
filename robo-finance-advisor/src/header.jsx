import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-black text-white z-50">
      <h1 className="logo">Robo Advisor</h1>
      <nav className="nav">
        <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
        <NavLink to="/chat" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Chat with AI</NavLink>
        <NavLink to="/logout" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Logout</NavLink>
      </nav>
    </header>
  );
};

export default Header;
