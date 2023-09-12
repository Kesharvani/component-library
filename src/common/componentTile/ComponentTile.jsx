import React from "react";
import "./ComponentTile.css";
import { useNavigate } from "react-router-dom";

export default function ComponentTile({ title, isSideBar }) {
  const navigate = useNavigate();
  return (
    <div
      className={isSideBar ? "" : "tile_container"}
      onClick={() => navigate(`/${title}`)}
    >
      {title}
    </div>
  );
}
