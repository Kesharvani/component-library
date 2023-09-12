import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <h1>Your Unique Component Library</h1>
      <p>A collection of innovative components for modern web development</p>
      <button
        className="get_started_btn"
        onClick={() => navigate("/components")}
      >
        Get Started
      </button>
    </div>
  );
}
