import React from "react";
import "./ComponentTile.css";
import { NavLink } from "react-router-dom";
import { useComponent } from "../../componentContext/ComponentContext";
export default function ComponentTile({ title, isSideBar }) {
  const { setSelectedComponent } = useComponent();

  return (
    <NavLink
      to={`/${title}`}
      className={isSideBar ? "sidebar_container" : "tile_container"}
      onClick={() => setSelectedComponent(title)}
      style={({ isActive, isPending }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "black" : "white",
        };
      }}
    >
      {title}
    </NavLink>
  );
}
