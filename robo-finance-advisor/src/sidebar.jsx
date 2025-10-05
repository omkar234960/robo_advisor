import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-52 bg-black h-screen flex flex-col pt-20 border-r border-gray-800 fixed left-0 top-0 z-40">
    <NavLink to="/dashboard" className={({ isActive }) => `py-3 px-4 text-sm font-bold transition-colors ${isActive ? "bg-gray-800 text-yellow-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>Dashboard</NavLink>
    <NavLink to="/portfolio" className={({ isActive }) => `py-3 px-4 text-sm font-bold transition-colors ${isActive ? "bg-gray-800 text-yellow-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>Portfolio</NavLink>
    <NavLink to="/chat" className={({ isActive }) => `py-3 px-4 text-sm font-bold transition-colors ${isActive ? "bg-gray-800 text-yellow-400" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>Chat with AI</NavLink>
  </aside>
);

export default Sidebar;
