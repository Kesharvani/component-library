import React from "react";
import "./Avatar.css";
export default function Avatar({ name, size, source }) {
  const getSize = (size) => {
    switch (size.toLowerCase()) {
      case "small":
        return "60px";
      case "medium":
        return "80px";
      case "large":
        return "100px";
      default:
        return "80px";
    }
  };
  return (
    <img
      src={source}
      alt={name}
      width={getSize(size)}
      height={getSize(size)}
      className="avatar"
    />
  );
}
