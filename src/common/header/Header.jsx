import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h3>SS Library</h3>
      </Link>
      <input type="search" placeholder="Search for components" />

      <div className="navigations">
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "black" : "red",
            };
          }}
          className="navLink"
        >
          Home
        </NavLink>
        <NavLink
          to="/components"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "black" : "red",
            };
          }}
          className="navLink"
        >
          Components
        </NavLink>
      </div>
    </header>
  );
}
