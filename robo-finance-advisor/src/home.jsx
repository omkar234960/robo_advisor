import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // CSS styles as JS objects
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "linear-gradient(180deg, #0b1a3b, #000000)",
      color: "#ffffff",
      padding: "20px",
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#facc15",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "20px",
      color: "#d1d5db",
      marginBottom: "40px",
      maxWidth: "500px",
    },
    button: {
      backgroundColor: "#e3342f",
      color: "#ffffff",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "15px 40px",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
      transition: "all 0.2s ease",
    },
  };

  // Button hover effect
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#cc1f1a";
    e.target.style.transform = "translateY(-3px)";
    e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#e3342f";
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Robo Advisor</h1>
      <p style={styles.subtitle}>
        Your Finance Buddy – Smart insights for smarter investments
      </p>
      <button
        style={styles.button}
        onClick={() => navigate("/login")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Get Started
      </button>
    </div>
  );
}
