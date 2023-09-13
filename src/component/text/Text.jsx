import React from "react";
import "./Text.css";
export default function Text({ children, type }) {
  return <div className={type}>{children}</div>;
}
