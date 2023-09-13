import React from "react";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <h1>Component Craft</h1>
      <p>A collection of innovative components for modern web development</p>
      <div className="secondary_container">
        <button
          className="get_started_btn"
          onClick={() => navigate("/components")}
        >
          Get Started
        </button>
        <Link
          to="https://github.com/Kesharvani/component-library"
          className="github_icon"
        >
          <AiFillGithub size={36} />
        </Link>
      </div>
    </div>
  );
}
