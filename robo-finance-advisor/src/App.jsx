import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Sidebar from "./sidebar.jsx";
import Home from "./home.jsx";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";
import Portfolio from "./portfolio.jsx";
import Chat from "./chat.jsx";
import Logout from "./logout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Header />
              <Sidebar />
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PrivateRoute>
              <Header />
              <Sidebar />
              <Portfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Header />
              <Sidebar />
              <Chat />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
